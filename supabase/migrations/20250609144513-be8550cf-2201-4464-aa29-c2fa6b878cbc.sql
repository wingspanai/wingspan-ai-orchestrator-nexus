
-- Create a secure table for storing API keys
CREATE TABLE IF NOT EXISTS public.api_keys (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL UNIQUE,
  api_key_encrypted TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.api_keys ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service access (no user-specific restrictions since this is for system use)
CREATE POLICY "Service can manage API keys" 
  ON public.api_keys 
  FOR ALL 
  USING (true);

-- Create function to encrypt API keys
CREATE OR REPLACE FUNCTION encrypt_api_key(api_key TEXT)
RETURNS TEXT AS $$
BEGIN
  -- Using Supabase's built-in encryption via vault
  RETURN vault.create_secret(api_key);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to decrypt API keys
CREATE OR REPLACE FUNCTION decrypt_api_key(encrypted_key TEXT)
RETURNS TEXT AS $$
BEGIN
  -- Using Supabase's built-in decryption via vault
  RETURN vault.decrypt_secret(encrypted_key::UUID);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to safely store API key
CREATE OR REPLACE FUNCTION store_api_key(
  p_service_name TEXT,
  p_api_key TEXT,
  p_description TEXT DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
  encrypted_key TEXT;
  key_id UUID;
BEGIN
  encrypted_key := encrypt_api_key(p_api_key);
  
  INSERT INTO public.api_keys (service_name, api_key_encrypted, description)
  VALUES (p_service_name, encrypted_key, p_description)
  ON CONFLICT (service_name) 
  DO UPDATE SET 
    api_key_encrypted = encrypted_key,
    description = COALESCE(p_description, api_keys.description),
    updated_at = now()
  RETURNING id INTO key_id;
  
  RETURN key_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to retrieve API key
CREATE OR REPLACE FUNCTION get_api_key(p_service_name TEXT)
RETURNS TEXT AS $$
DECLARE
  encrypted_key TEXT;
BEGIN
  SELECT api_key_encrypted INTO encrypted_key
  FROM public.api_keys
  WHERE service_name = p_service_name AND is_active = true;
  
  IF encrypted_key IS NULL THEN
    RETURN NULL;
  END IF;
  
  RETURN decrypt_api_key(encrypted_key);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Insert some common API key placeholders for the report builder system
INSERT INTO public.api_keys (service_name, api_key_encrypted, description, is_active)
VALUES 
  ('openai', 'placeholder_encrypted', 'OpenAI API key for AI report generation', false),
  ('perplexity', 'placeholder_encrypted', 'Perplexity API key for AI insights', false),
  ('google_analytics', 'placeholder_encrypted', 'Google Analytics API key', false),
  ('salesforce', 'placeholder_encrypted', 'Salesforce API key', false),
  ('hubspot', 'placeholder_encrypted', 'HubSpot API key', false),
  ('stripe', 'placeholder_encrypted', 'Stripe API key for financial data', false)
ON CONFLICT (service_name) DO NOTHING;
