
import { useState } from "react";
import { ArrowLeft, X, Lock, Zap, CheckCircle, XCircle, Loader } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ConnectionWizardProps {
  show: boolean;
  selectedIntegration: any;
  onClose: () => void;
}

export function ConnectionWizard({ show, selectedIntegration, onClose }: ConnectionWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAuthMethod, setSelectedAuthMethod] = useState("oauth");
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; error?: string } | null>(null);
  const [activating, setActivating] = useState(false);

  const steps = [
    { id: "auth", label: "Authentication" },
    { id: "mapping", label: "Data Mapping" },
    { id: "settings", label: "Sync Settings" },
    { id: "review", label: "Review & Activate" }
  ];

  const totalSteps = steps.length;

  const testConnection = async () => {
    setTesting(true);
    // Simulate API call
    setTimeout(() => {
      setTestResult({ success: true });
      setTesting(false);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const activateIntegration = async () => {
    setActivating(true);
    // Simulate activation
    setTimeout(() => {
      setActivating(false);
      onClose();
    }, 3000);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return testResult?.success;
      case 1: return true;
      case 2: return true;
      case 3: return true;
      default: return false;
    }
  };

  if (!selectedIntegration) return null;

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={previousStep}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <DialogTitle>{selectedIntegration.name} Setup</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="space-y-4">
          <Progress value={(currentStep + 1) / totalSteps * 100} />
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center gap-2 ${
                  index === currentStep
                    ? "text-primary"
                    : index < currentStep
                    ? "text-green-600"
                    : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index === currentStep
                      ? "bg-primary text-primary-foreground"
                      : index < currentStep
                      ? "bg-green-600 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? <CheckCircle className="h-4 w-4" /> : index + 1}
                </div>
                <span className="text-sm font-medium">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="py-6">
          {/* Step 1: Authentication */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Connect to {selectedIntegration.name}</h3>
                <p className="text-muted-foreground">
                  Choose your authentication method and provide credentials
                </p>
              </div>

              <RadioGroup value={selectedAuthMethod} onValueChange={setSelectedAuthMethod}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="oauth" id="oauth" />
                    <div className="flex-1">
                      <Label htmlFor="oauth" className="font-medium">OAuth 2.0</Label>
                      <p className="text-sm text-muted-foreground">
                        Secure authentication using OAuth (Recommended)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="apikey" id="apikey" />
                    <div className="flex-1">
                      <Label htmlFor="apikey" className="font-medium">API Key</Label>
                      <p className="text-sm text-muted-foreground">
                        Direct API key authentication
                      </p>
                    </div>
                  </div>
                </div>
              </RadioGroup>

              {selectedAuthMethod === "oauth" && (
                <div className="space-y-4">
                  <Button size="lg" className="w-full">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded mr-3" />
                    Connect with {selectedIntegration.name}
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    Your credentials are encrypted and stored securely
                  </div>
                </div>
              )}

              {selectedAuthMethod === "apikey" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="apikey-input">API Key</Label>
                    <Input
                      id="apikey-input"
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter your API key"
                    />
                    <p className="text-sm text-muted-foreground">
                      <Button variant="link" className="p-0 h-auto text-sm">
                        Where do I find my API key?
                      </Button>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apisecret-input">API Secret (Optional)</Label>
                    <Input
                      id="apisecret-input"
                      type="password"
                      value={apiSecret}
                      onChange={(e) => setApiSecret(e.target.value)}
                      placeholder="Enter your API secret"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <Button
                  onClick={testConnection}
                  disabled={testing || (!apiKey && selectedAuthMethod === "apikey")}
                  className="w-full"
                >
                  {testing ? (
                    <>
                      <Loader className="h-4 w-4 mr-2 animate-spin" />
                      Testing Connection...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      Test Connection
                    </>
                  )}
                </Button>
                
                {testResult && (
                  <div className={`flex items-center gap-2 p-3 rounded-lg ${
                    testResult.success 
                      ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                      : "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                  }`}>
                    {testResult.success ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Connection successful!
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4" />
                        {testResult.error}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Data Mapping */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Configure Data Sync</h3>
                <p className="text-muted-foreground">
                  Select data types and map fields between systems
                </p>
              </div>
              
              <div className="p-6 border rounded-lg text-center">
                <p className="text-muted-foreground">Data mapping configuration would go here</p>
              </div>
            </div>
          )}

          {/* Step 3: Sync Settings */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Configure Sync Settings</h3>
                <p className="text-muted-foreground">
                  Set up how and when data should sync between systems
                </p>
              </div>
              
              <div className="p-6 border rounded-lg text-center">
                <p className="text-muted-foreground">Sync settings configuration would go here</p>
              </div>
            </div>
          )}

          {/* Step 4: Review & Activate */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Review Configuration</h3>
                <p className="text-muted-foreground">
                  Review your integration settings before activating
                </p>
              </div>
              
              <div className="space-y-4 p-6 border rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Integration</Label>
                    <p className="font-medium">{selectedIntegration.name}</p>
                  </div>
                  <div>
                    <Label>Authentication</Label>
                    <p className="font-medium capitalize">{selectedAuthMethod}</p>
                  </div>
                  <div>
                    <Label>Connection Status</Label>
                    <p className="font-medium text-green-600 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-6 border-t">
          <div>
            {currentStep > 0 && (
              <Button variant="ghost" onClick={previousStep}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="ghost">Save as Draft</Button>
            {currentStep < totalSteps - 1 ? (
              <Button onClick={nextStep} disabled={!canProceed()}>
                Next
              </Button>
            ) : (
              <Button onClick={activateIntegration} disabled={activating}>
                {activating ? (
                  <>
                    <Loader className="h-4 w-4 mr-2 animate-spin" />
                    Activating...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Activate Integration
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
