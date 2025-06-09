
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileText, Shield, CheckCircle, Clock, Plus, AlertTriangle } from 'lucide-react';

export function ComplianceAutomationSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Compliance Automation</CardTitle>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm">Automation Active</span>
          </div>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Automated Reports */}
        <div className="space-y-4">
          <h3 className="font-semibold">Automated Reports</h3>
          
          <div className="grid gap-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="font-medium">GDPR Compliance Report</p>
                  <p className="text-sm text-muted-foreground">Generated Monthly</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Scheduled</Badge>
                <Button size="sm">Generate Now</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">Security Audit Report</p>
                  <p className="text-sm text-muted-foreground">Generated Weekly</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-50 text-blue-700">Generating...</Badge>
                <div className="w-20">
                  <Progress value={65} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Gaps */}
        <div className="space-y-4">
          <h3 className="font-semibold">Compliance Gap Analysis</h3>
          
          <div className="space-y-3">
            <div className="p-4 border border-amber-200 bg-amber-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-900">Password Policy Update Required</p>
                    <p className="text-sm text-amber-700">NIST guidelines require 12-character minimum passwords</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                  Medium Severity
                </Badge>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Button size="sm">Start Remediation</Button>
                <span className="text-xs text-amber-600">Due: Next week</span>
              </div>
            </div>
            
            <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">Data Retention Policy</p>
                    <p className="text-sm text-green-700">All systems compliant with GDPR retention requirements</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Compliant
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Security Policies */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Security Policies</h3>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Policy
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Access Control Policy</span>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Compliance</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="flex justify-between">
                  <span>Violations</span>
                  <span className="font-medium text-red-600">2</span>
                </div>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Data Protection Policy</span>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Compliance</span>
                  <span className="font-medium">100%</span>
                </div>
                <div className="flex justify-between">
                  <span>Violations</span>
                  <span className="font-medium">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
