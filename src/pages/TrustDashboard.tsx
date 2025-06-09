
import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { TrustScoreOverview } from "@/components/Trust/TrustScoreOverview";
import { AutonomyControlCenter } from "@/components/Trust/AutonomyControlCenter";
import { DecisionTransparencyLog } from "@/components/Trust/DecisionTransparencyLog";
import { OverrideControlPanel } from "@/components/Trust/OverrideControlPanel";
import { TrustAnalytics } from "@/components/Trust/TrustAnalytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TrustDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Trust & Transparency</h1>
            <p className="text-text-secondary mt-2">
              Build confidence through complete visibility and control over AI systems
            </p>
          </div>
        </div>

        <TrustScoreOverview />

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Autonomy Control</TabsTrigger>
            <TabsTrigger value="decisions">Decision Log</TabsTrigger>
            <TabsTrigger value="overrides">Override Controls</TabsTrigger>
            <TabsTrigger value="analytics">Trust Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <AutonomyControlCenter />
          </TabsContent>

          <TabsContent value="decisions" className="mt-6">
            <DecisionTransparencyLog />
          </TabsContent>

          <TabsContent value="overrides" className="mt-6">
            <OverrideControlPanel />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <TrustAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
