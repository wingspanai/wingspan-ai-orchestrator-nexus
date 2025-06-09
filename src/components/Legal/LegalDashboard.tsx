
import { LegalDashboardHeader } from './LegalDashboardHeader';
import { ContractManagementSection } from './ContractManagementSection';
import { ComplianceSection } from './ComplianceSection';
import { PolicyManagementSection } from './PolicyManagementSection';
import { LitigationSection } from './LitigationSection';
import { RiskManagementSection } from './RiskManagementSection';
import { AILegalAssistant } from './AILegalAssistant';

export function LegalDashboard() {
  return (
    <div className="space-y-8">
      <LegalDashboardHeader />
      <ContractManagementSection />
      <ComplianceSection />
      <PolicyManagementSection />
      <LitigationSection />
      <RiskManagementSection />
      <AILegalAssistant />
    </div>
  );
}
