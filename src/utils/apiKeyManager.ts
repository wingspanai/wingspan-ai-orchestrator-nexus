
import { supabase } from '@/integrations/supabase/client';

export interface APIKey {
  id: string;
  service_name: string;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export class APIKeyManager {
  static async storeAPIKey(serviceName: string, apiKey: string, description?: string): Promise<string | null> {
    try {
      const { data, error } = await supabase.rpc('store_api_key', {
        p_service_name: serviceName,
        p_api_key: apiKey,
        p_description: description
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

  static async getAPIKey(serviceName: string): Promise<string | null> {
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

  static async listAPIKeys(): Promise<APIKey[]> {
    try {
      const { data, error } = await supabase
        .from('api_keys')
        .select('id, service_name, description, is_active, created_at, updated_at')
        .order('created_at', { ascending: false });

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

  static async toggleAPIKey(serviceName: string, isActive: boolean): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('api_keys')
        .update({ is_active: isActive, updated_at: new Date().toISOString() })
        .eq('service_name', serviceName);

      if (error) {
        console.error('Error toggling API key:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error toggling API key:', error);
      return false;
    }
  }

  static async deleteAPIKey(serviceName: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('api_keys')
        .delete()
        .eq('service_name', serviceName);

      if (error) {
        console.error('Error deleting API key:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error deleting API key:', error);
      return false;
    }
  }
}
