
import { Shield, Plus, Download, DollarSign, FileText, AlertTriangle, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLegalStore } from '@/store/legalStore';

export function LegalDashboardHeader() {
  const {
    complianceScore,
    activeContracts,
    expiringContracts,
    pendingReview,
    regulatoryCompliance,
    openIssues,
    criticalIssues,
    totalContractValue
  } = useLegalStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Legal & Compliance</h1>
          <p className="text-muted-foreground mt-2">Manage risk and ensure regulatory compliance</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-16 h-16">
              <div className="w-full h-full rounded-full border-4 border-gray-200">
                <div
                  className="w-full h-full rounded-full border-4 border-green-500 border-t-transparent animate-spin"
                  style={{
                    background: `conic-gradient(#10B981 ${complianceScore * 3.6}deg, transparent 0)`
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold">{complianceScore}%</span>
              </div>
            </div>
            <span className="text-sm text-muted-foreground">Compliance Score</span>
          </div>
          <Button onClick={() => {}}>
            <Shield className="w-4 h-4 mr-2" />
            Run Audit
          </Button>
          <Button onClick={() => {}}>
            <Plus className="w-4 h-4 mr-2" />
            New Contract
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Active Contracts
            </CardTitle>
            <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
              {activeContracts}
            </div>
            <div className="space-y-1 mt-2">
              <div className="text-xs text-purple-600 dark:text-purple-400">
                {expiringContracts} expiring soon
              </div>
              <div className="text-xs text-purple-600 dark:text-purple-400">
                {pendingReview} pending review
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Regulatory Compliance
            </CardTitle>
            <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
              {regulatoryCompliance}%
            </div>
            <div className="space-y-1 mt-2">
              <div className="text-xs text-blue-600 dark:text-blue-400">
                GDPR: 92%
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400">
                SOX: 89%
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-amber-700 dark:text-amber-300">
              Open Issues
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-800 dark:text-amber-200">
              {openIssues}
            </div>
            <div className="space-y-1 mt-2">
              <div className="text-xs text-red-600">
                {criticalIssues} critical
              </div>
              <div className="text-xs text-orange-600">
                8 high priority
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
              Contract Value
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800 dark:text-green-200">
              ${totalContractValue}M
            </div>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400 mt-2">
              <span>↑ 12% YoY</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
