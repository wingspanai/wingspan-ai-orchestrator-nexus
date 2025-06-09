
import React, { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { SecurityDashboardHeader } from '@/components/Security/SecurityDashboardHeader';
import { SecurityMonitorSection } from '@/components/Security/SecurityMonitorSection';
import { AuditTrailSection } from '@/components/Security/AuditTrailSection';
import { ComplianceAutomationSection } from '@/components/Security/ComplianceAutomationSection';
import { IncidentResponseSection } from '@/components/Security/IncidentResponseSection';
import { SecurityInsightsSection } from '@/components/Security/SecurityInsightsSection';

const SecurityAuditDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <MainLayout>
      <div className="space-y-6">
        <SecurityDashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SecurityMonitorSection />
          <AuditTrailSection />
        </div>
        
        <ComplianceAutomationSection />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IncidentResponseSection />
          <SecurityInsightsSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default SecurityAuditDashboard;
