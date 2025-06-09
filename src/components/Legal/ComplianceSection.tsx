
import { useState } from 'react';
import { Shield, Upload, FileText, Calendar, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLegalStore } from '@/store/legalStore';

export function ComplianceSection() {
  const { complianceFrameworks, complianceAlerts } = useLegalStore();
  const [selectedMonth, setSelectedMonth] = useState('2024-12');

  const getComplianceColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Regulatory Compliance</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Import Regulations
          </Button>
          <Button variant="ghost">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {complianceFrameworks.map((framework) => (
          <Card key={framework.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{framework.icon}</div>
                  <div>
                    <CardTitle>{framework.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{framework.region}</p>
                  </div>
                </div>
                <div className={`text-2xl font-bold ${getComplianceColor(framework.complianceScore)}`}>
                  {framework.complianceScore}%
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold">{framework.totalRequirements}</div>
                  <div className="text-xs text-muted-foreground">Total</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-green-600">{framework.compliantItems}</div>
                  <div className="text-xs text-muted-foreground">Compliant</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-yellow-600">{framework.inProgress}</div>
                  <div className="text-xs text-muted-foreground">In Progress</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-red-600">{framework.nonCompliant}</div>
                  <div className="text-xs text-muted-foreground">Non-Compliant</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Compliance by Category</h4>
                {framework.categories.map((category) => (
                  <div key={category.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{category.name}</span>
                      <span className={getComplianceColor(category.compliance)}>
                        {category.compliance}%
                      </span>
                    </div>
                    <Progress value={category.compliance} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Button size="sm">View Details</Button>
                <Button size="sm" variant="ghost">
                  <Shield className="w-4 h-4 mr-2" />
                  Audit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Compliance Calendar</CardTitle>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-12">December 2024</SelectItem>
                  <SelectItem value="2025-01">January 2025</SelectItem>
                  <SelectItem value="2025-02">February 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: new Date('2024-12-31'),
                  name: 'GDPR Annual Report',
                  framework: 'GDPR',
                  urgency: 'high',
                  status: 'pending'
                },
                {
                  date: new Date('2024-12-15'),
                  name: 'SOX Controls Review',
                  framework: 'SOX',
                  urgency: 'medium',
                  status: 'in-progress'
                }
              ].map((deadline, index) => (
                <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="text-center min-w-12">
                    <div className="text-lg font-bold">{deadline.date.getDate()}</div>
                    <div className="text-xs text-muted-foreground">
                      {deadline.date.toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{deadline.name}</div>
                    <div className="text-sm text-muted-foreground">{deadline.framework}</div>
                  </div>
                  <div className="text-right">
                    <Badge variant={deadline.urgency === 'high' ? 'destructive' : 'secondary'}>
                      {deadline.status}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">
                      {Math.ceil((deadline.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days left
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Audits</CardTitle>
              <Button size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Audit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: 'GDPR Compliance Audit',
                  date: new Date('2024-11-15'),
                  overallScore: 92,
                  criticalFindings: 0,
                  majorFindings: 2,
                  minorFindings: 5
                },
                {
                  type: 'SOX Internal Controls',
                  date: new Date('2024-10-20'),
                  overallScore: 89,
                  criticalFindings: 1,
                  majorFindings: 3,
                  minorFindings: 8
                }
              ].map((audit, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{audit.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(audit.date)}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getComplianceColor(audit.overallScore)}`}>
                        {audit.overallScore}%
                      </div>
                      <div className="text-xs text-muted-foreground">Overall Score</div>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-red-600">{audit.criticalFindings}</div>
                        <div className="text-xs text-muted-foreground">Critical</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-orange-600">{audit.majorFindings}</div>
                        <div className="text-xs text-muted-foreground">Major</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-yellow-600">{audit.minorFindings}</div>
                        <div className="text-xs text-muted-foreground">Minor</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">View Report</Button>
                    <Button size="sm" variant="ghost">Create Plan</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
