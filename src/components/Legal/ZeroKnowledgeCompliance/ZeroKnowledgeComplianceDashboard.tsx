
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ZKComplianceHeader } from './ZKComplianceHeader';
import { ComplianceFrameworkTree } from './ComplianceFrameworkTree';
import { ProofGenerationPanel } from './ProofGenerationPanel';
import { AuditInterfacePanel } from './AuditInterfacePanel';
import { PrivacyControlsPanel } from './PrivacyControlsPanel';
import { ComplianceAutomationPanel } from './ComplianceAutomationPanel';
import { ProofVerifierWidget } from './ProofVerifierWidget';
import { Key, FileSearch, Shield, Cpu } from 'lucide-react';

export function ZeroKnowledgeComplianceDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900">
      <ZKComplianceHeader />
      
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Left Panel - Compliance Framework Tree */}
        <aside className="col-span-3">
          <ComplianceFrameworkTree />
        </aside>

        {/* Main Content - Zero-Knowledge Operations */}
        <main className="col-span-9">
          <Tabs defaultValue="proof-generation" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
              <TabsTrigger value="proof-generation" className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                Proof Generation
              </TabsTrigger>
              <TabsTrigger value="audit-interface" className="flex items-center gap-2">
                <FileSearch className="w-4 h-4" />
                Audit Interface
              </TabsTrigger>
              <TabsTrigger value="privacy-controls" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacy Controls
              </TabsTrigger>
              <TabsTrigger value="compliance-automation" className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Automation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="proof-generation">
              <ProofGenerationPanel />
            </TabsContent>

            <TabsContent value="audit-interface">
              <AuditInterfacePanel />
            </TabsContent>

            <TabsContent value="privacy-controls">
              <PrivacyControlsPanel />
            </TabsContent>

            <TabsContent value="compliance-automation">
              <ComplianceAutomationPanel />
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <ProofVerifierWidget />
    </div>
  );
}
