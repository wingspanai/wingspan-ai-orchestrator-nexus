
import { supabase } from "@/integrations/supabase/client";

export interface APIKeyConfig {
  serviceName: string;
  apiKey: string;
  description?: string;
}

export class APIKeyManager {
  private static instance: APIKeyManager;

  private constructor() {}

  public static getInstance(): APIKeyManager {
    if (!APIKeyManager.instance) {
      APIKeyManager.instance = new APIKeyManager();
    }
    return APIKeyManager.instance;
  }

  /**
   * Store an API key securely in the database
   */
  async storeAPIKey(config: APIKeyConfig): Promise<string | null> {
    try {
      const { data, error } = await supabase.rpc('store_api_key', {
        p_service_name: config.serviceName,
        p_api_key: config.apiKey,
        p_description: config.description || null
      });

      if (error) {
        console.error('Error storing API key:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error storing API key:', error);
      return null;
    }
  }

  /**
   * Retrieve an API key from the database
   */
  async getAPIKey(serviceName: string): Promise<string | null> {
    try {
      const { data, error } = await supabase.rpc('get_api_key', {
        p_service_name: serviceName
      });

      if (error) {
        console.error('Error retrieving API key:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error retrieving API key:', error);
      return null;
    }
  }

  /**
   * List all stored API keys (without exposing the actual keys)
   */
  async listAPIKeys(): Promise<any[]> {
    try {
      const { data, error } = await supabase
        .from('api_keys')
        .select('id, service_name, description, created_at, updated_at, is_active')
        .eq('is_active', true);

      if (error) {
        console.error('Error listing API keys:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error listing API keys:', error);
      return [];
    }
  }

  /**
   * Deactivate an API key
   */
  async deactivateAPIKey(serviceName: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('api_keys')
        .update({ is_active: false, updated_at: new Date().toISOString() })
        .eq('service_name', serviceName);

      if (error) {
        console.error('Error deactivating API key:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error deactivating API key:', error);
      return false;
    }
  }

  /**
   * Check if an API key exists and is active
   */
  async hasActiveAPIKey(serviceName: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('api_keys')
        .select('id')
        .eq('service_name', serviceName)
        .eq('is_active', true)
        .single();

      if (error) {
        return false;
      }

      return !!data;
    } catch (error) {
      return false;
    }
  }
}

// Export singleton instance
export const apiKeyManager = APIKeyManager.getInstance();
