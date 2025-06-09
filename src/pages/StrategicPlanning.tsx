
import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { StrategicPlanningHeader } from "@/components/Strategic/StrategicPlanningHeader";
import { OKRManagementSection } from "@/components/Strategic/OKRManagementSection";
import { StrategicInitiativesSection } from "@/components/Strategic/StrategicInitiativesSection";
import { ScenarioPlanningSection } from "@/components/Strategic/ScenarioPlanningSection";
import { ResourceAllocationSection } from "@/components/Strategic/ResourceAllocationSection";
import { StrategicRoadmapSection } from "@/components/Strategic/StrategicRoadmapSection";
import { AIStrategicAdvisor } from "@/components/Strategic/AIStrategicAdvisor";

const StrategicPlanning = () => {
  const [planningPeriod, setPlanningPeriod] = useState("fy-2025");
  const [activeView, setActiveView] = useState("overview");

  return (
    <MainLayout>
      <div className="space-y-8">
        <StrategicPlanningHeader 
          planningPeriod={planningPeriod}
          onPlanningPeriodChange={setPlanningPeriod}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <OKRManagementSection />
            <StrategicInitiativesSection />
            <ScenarioPlanningSection />
          </div>
          
          <div className="space-y-8">
            <AIStrategicAdvisor />
            <ResourceAllocationSection />
          </div>
        </div>
        
        <StrategicRoadmapSection />
      </div>
    </MainLayout>
  );
};

export default StrategicPlanning;
