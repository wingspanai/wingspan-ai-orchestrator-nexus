
import { Badge } from '@/components/ui/badge';
import { MetricCard } from '@/components/Dashboard/MetricCard';
import { useZeroKnowledgeStore } from '@/store/zeroKnowledgeStore';
import { Shield, Lock, FileCheck, Key, TrendingDown } from 'lucide-react';

export function ZKComplianceHeader() {
  const {
    overallCompliance,
    privacyViolations,
    auditReadiness,
    activeProofs,
    complianceCostReduction
  } = useZeroKnowledgeStore();

  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div>
          <h1 className="text-3xl font-bold">Zero-Knowledge Compliance Center</h1>
          <p className="text-indigo-200 mt-1">
            Prove Compliance Without Exposing Data | Patent-Pending Technology
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{overallCompliance}%</div>
            <div className="text-sm text-indigo-200">Compliance Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-indigo-200">Active Audits</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">✓</span>
              <Badge variant="outline" className="text-xs">
                Privacy Shield Active
              </Badge>
            </div>
            <div className="text-sm text-indigo-200">Zero Data Exposure</div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-5 gap-4 p-6 bg-black/20">
        <MetricCard
          title="Overall Compliance"
          value={`${overallCompliance}%`}
          subtitle="SOC2, HIPAA, GDPR, ISO27001"
          icon={<Shield className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
        
        <MetricCard
          title="Privacy Violations"
          value={privacyViolations.toString()}
          subtitle="Zero data exposure - 487 days"
          icon={<Lock className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
        
        <MetricCard
          title="Audit Readiness"
          value={`${auditReadiness}%`}
          subtitle="All proofs generated"
          icon={<FileCheck className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
        
        <MetricCard
          title="Active Proofs"
          value={activeProofs.toLocaleString()}
          subtitle="<100ms avg verification"
          icon={<Key className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
        
        <MetricCard
          title="Compliance Cost"
          value={`-${complianceCostReduction}%`}
          subtitle="$2.1M/year savings"
          icon={<TrendingDown className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
      </div>
    </div>
  );
}
