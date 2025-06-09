
import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { AIHealthHeader } from "@/components/AIHealth/AIHealthHeader";
import { AgentPerformanceSection } from "@/components/AIHealth/AgentPerformanceSection";
import { ModelPerformanceSection } from "@/components/AIHealth/ModelPerformanceSection";
import { SystemDiagnosticsSection } from "@/components/AIHealth/SystemDiagnosticsSection";
import { AIOptimizationSection } from "@/components/AIHealth/AIOptimizationSection";
import { MaintenanceSection } from "@/components/AIHealth/MaintenanceSection";

const AIHealthDashboard = () => {
  const [overallHealth, setOverallHealth] = useState(87);
  const [agentView, setAgentView] = useState("grid");
  const [selectedModel, setSelectedModel] = useState("all");
  const [autoDiagnostics, setAutoDiagnostics] = useState(true);

  return (
    <MainLayout>
      <div className="space-y-8">
        <AIHealthHeader 
          overallHealth={overallHealth}
          onRunDiagnostics={() => console.log("Running diagnostics...")}
        />
        
        <div className="grid grid-cols-1 gap-8">
          <AgentPerformanceSection 
            view={agentView}
            onViewChange={setAgentView}
          />
          
          <ModelPerformanceSection 
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SystemDiagnosticsSection 
              autoDiagnostics={autoDiagnostics}
              onToggleAutoDiagnostics={setAutoDiagnostics}
            />
            
            <AIOptimizationSection />
          </div>
          
          <MaintenanceSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default AIHealthDashboard;
