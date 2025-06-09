
import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { IntegrationHubHeader } from "@/components/IntegrationHub/IntegrationHubHeader";
import { ConnectedIntegrationsSection } from "@/components/IntegrationHub/ConnectedIntegrationsSection";
import { AvailableIntegrationsSection } from "@/components/IntegrationHub/AvailableIntegrationsSection";
import { ConnectionWizard } from "@/components/IntegrationHub/ConnectionWizard";
import { IntegrationHealthSection } from "@/components/IntegrationHub/IntegrationHealthSection";
import { DataFlowVisualization } from "@/components/IntegrationHub/DataFlowVisualization";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function IntegrationHub() {
  const [activeTab, setActiveTab] = useState("connected");
  const [viewMode, setViewMode] = useState("grid");
  const [showWizard, setShowWizard] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const openConnectionWizard = (integration = null) => {
    setSelectedIntegration(integration);
    setShowWizard(true);
  };

  const closeWizard = () => {
    setShowWizard(false);
    setSelectedIntegration(null);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <IntegrationHubHeader onAddIntegration={() => openConnectionWizard()} />

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="connected">Connected Systems</TabsTrigger>
            <TabsTrigger value="available">Available Integrations</TabsTrigger>
            <TabsTrigger value="health">System Health</TabsTrigger>
            <TabsTrigger value="flow">Data Flow</TabsTrigger>
          </TabsList>

          <TabsContent value="connected" className="mt-6">
            <ConnectedIntegrationsSection 
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </TabsContent>

          <TabsContent value="available" className="mt-6">
            <AvailableIntegrationsSection 
              onConnect={openConnectionWizard}
            />
          </TabsContent>

          <TabsContent value="health" className="mt-6">
            <IntegrationHealthSection />
          </TabsContent>

          <TabsContent value="flow" className="mt-6">
            <DataFlowVisualization />
          </TabsContent>
        </Tabs>

        <ConnectionWizard
          show={showWizard}
          selectedIntegration={selectedIntegration}
          onClose={closeWizard}
        />
      </div>
    </MainLayout>
  );
}
