
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MetricCard } from '@/components/Dashboard/MetricCard';
import { useResilienceStore } from '@/store/resilienceStore';
import { ShieldCheck, Clock, AlertOff, Brain, Activity, DollarSign } from 'lucide-react';

export function ResilienceHeader() {
  const {
    overallHealth,
    activeIncidents,
    autoResolvingIncidents,
    activeEMTAgents,
    totalEMTAgents,
    selfHealingRate,
    mttrAI,
    mttrHuman,
    preventedOutages,
    newPatternsLearned,
    costSavingsYTD,
    roi
  } = useResilienceStore();

  return (
    <div className="bg-gradient-to-r from-green-900 to-emerald-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div>
          <h1 className="text-3xl font-bold">Enterprise Resilience Command Center</h1>
          <p className="text-green-200 mt-1">
            Self-Healing Infrastructure | 99.97% Uptime | Zero Human Intervention
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{overallHealth}%</div>
            <div className="text-sm text-green-200">System Health</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{activeIncidents}</span>
              <Badge variant="outline" className="text-xs">
                {autoResolvingIncidents} auto-resolving
              </Badge>
            </div>
            <div className="text-sm text-green-200">Active Incidents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{activeEMTAgents}/{totalEMTAgents}</div>
            <div className="text-sm text-green-200">EMT Agents</div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-6 gap-4 p-6 bg-black/20">
        <MetricCard
          title="Self-Healing Rate"
          value={`${selfHealingRate}%`}
          subtitle="Issues auto-resolved"
          icon={<ShieldCheck className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
        
        <MetricCard
          title="MTTR (AI)"
          value={`${mttrAI} min`}
          subtitle="Mean Time to Recovery"
          icon={<Clock className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
        
        <MetricCard
          title="Prevented Outages"
          value={preventedOutages.toString()}
          subtitle="This month"
          icon={<AlertOff className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
        
        <MetricCard
          title="System Learning"
          value={newPatternsLearned.toLocaleString()}
          subtitle="New patterns identified"
          icon={<Brain className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
        
        <MetricCard
          title="Active EMT Agents"
          value={`${activeEMTAgents}/${totalEMTAgents}`}
          subtitle="Monitoring all systems"
          icon={<Activity className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
        
        <MetricCard
          title="Cost Savings"
          value={`$${(costSavingsYTD / 1000000).toFixed(1)}M`}
          subtitle="YTD from automation"
          icon={<DollarSign className="w-5 h-5" />}
          status="healthy"
          className="bg-white/10 border-white/20 text-white"
        />
      </div>
    </div>
  );
}
