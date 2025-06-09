
import React, { useState, useEffect } from "react";
import { Key, Plus, Trash2, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { apiKeyManager } from "@/utils/apiKeyManager";
import { toast } from "sonner";

interface APIKeyManagerProps {
  show: boolean;
  onClose: () => void;
}

export function APIKeyManager({ show, onClose }: APIKeyManagerProps) {
  const [apiKeys, setApiKeys] = useState<any[]>([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newKey, setNewKey] = useState({
    serviceName: "",
    apiKey: "",
    description: ""
  });
  const [showApiKey, setShowApiKey] = useState(false);
  const [loading, setLoading] = useState(false);

  const supportedServices = [
    { value: "openai", label: "OpenAI", description: "For AI report generation" },
    { value: "perplexity", label: "Perplexity", description: "For AI insights and research" },
    { value: "google_analytics", label: "Google Analytics", description: "For web analytics data" },
    { value: "salesforce", label: "Salesforce", description: "For CRM data" },
    { value: "hubspot", label: "HubSpot", description: "For marketing and sales data" },
    { value: "stripe", label: "Stripe", description: "For financial transaction data" },
    { value: "mailchimp", label: "Mailchimp", description: "For email marketing data" },
    { value: "slack", label: "Slack", description: "For team communication integration" }
  ];

  useEffect(() => {
    if (show) {
      loadAPIKeys();
    }
  }, [show]);

  const loadAPIKeys = async () => {
    try {
      const keys = await apiKeyManager.listAPIKeys();
      setApiKeys(keys);
    } catch (error) {
      console.error("Error loading API keys:", error);
      toast.error("Failed to load API keys");
    }
  };

  const handleAddAPIKey = async () => {
    if (!newKey.serviceName || !newKey.apiKey) {
      toast.error("Service name and API key are required");
      return;
    }

    setLoading(true);
    try {
      const result = await apiKeyManager.storeAPIKey({
        serviceName: newKey.serviceName,
        apiKey: newKey.apiKey,
        description: newKey.description
      });

      if (result) {
        toast.success("API key stored successfully");
        setShowAddDialog(false);
        setNewKey({ serviceName: "", apiKey: "", description: "" });
        loadAPIKeys();
      } else {
        toast.error("Failed to store API key");
      }
    } catch (error) {
      console.error("Error storing API key:", error);
      toast.error("Failed to store API key");
    } finally {
      setLoading(false);
    }
  };

  const handleDeactivateKey = async (serviceName: string) => {
    try {
      const success = await apiKeyManager.deactivateAPIKey(serviceName);
      if (success) {
        toast.success("API key deactivated");
        loadAPIKeys();
      } else {
        toast.error("Failed to deactivate API key");
      }
    } catch (error) {
      console.error("Error deactivating API key:", error);
      toast.error("Failed to deactivate API key");
    }
  };

  const getServiceLabel = (serviceName: string) => {
    const service = supportedServices.find(s => s.value === serviceName);
    return service?.label || serviceName;
  };

  return (
    <>
      <Dialog open={show} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              API Key Manager
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Securely store and manage API keys for external services
              </p>
              <Button onClick={() => setShowAddDialog(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add API Key
              </Button>
            </div>

            <div className="grid gap-4">
              {apiKeys.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Key className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">No API Keys Stored</h3>
                    <p className="text-gray-500 mb-4">Add your first API key to get started</p>
                    <Button onClick={() => setShowAddDialog(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add API Key
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                apiKeys.map((key) => (
                  <Card key={key.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${key.is_active ? 'bg-green-500' : 'bg-red-500'}`} />
                            <h3 className="font-medium">{getServiceLabel(key.service_name)}</h3>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {key.service_name}
                            </span>
                          </div>
                          {key.description && (
                            <p className="text-sm text-gray-600 mt-1 ml-6">{key.description}</p>
                          )}
                          <div className="text-xs text-gray-500 mt-2 ml-6">
                            Created: {new Date(key.created_at).toLocaleDateString()}
                            {key.updated_at !== key.created_at && (
                              <span> • Updated: {new Date(key.updated_at).toLocaleDateString()}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {key.is_active ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeactivateKey(key.service_name)}
                            disabled={!key.is_active}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add API Key Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New API Key</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label htmlFor="service">Service</Label>
              <Select
                value={newKey.serviceName}
                onValueChange={(value) => setNewKey(prev => ({ ...prev, serviceName: value }))}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {supportedServices.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      <div>
                        <div className="font-medium">{service.label}</div>
                        <div className="text-xs text-gray-500">{service.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="apiKey">API Key</Label>
              <div className="relative mt-1">
                <Input
                  id="apiKey"
                  type={showApiKey ? "text" : "password"}
                  value={newKey.apiKey}
                  onChange={(e) => setNewKey(prev => ({ ...prev, apiKey: e.target.value }))}
                  placeholder="Enter your API key"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                value={newKey.description}
                onChange={(e) => setNewKey(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Add a description for this API key"
                rows={3}
                className="mt-1"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="ghost" onClick={() => setShowAddDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddAPIKey} disabled={loading}>
              {loading ? "Storing..." : "Store API Key"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
