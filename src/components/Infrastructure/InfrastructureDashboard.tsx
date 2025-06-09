
import { InfrastructureHeader } from './InfrastructureHeader';
import { InfrastructureMonitoring } from './InfrastructureMonitoring';
import { SecurityOperations } from './SecurityOperations';
import { IncidentManagement } from './IncidentManagement';

export function InfrastructureDashboard() {
  return (
    <div className="space-y-8">
      <InfrastructureHeader />
      <InfrastructureMonitoring />
      <SecurityOperations />
      <IncidentManagement />
    </div>
  );
}
