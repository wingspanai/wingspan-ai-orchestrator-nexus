
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Lock, Shield, Eye, Download, Trash2 } from 'lucide-react';

export function DataPrivacySettingsPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Data Protection & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Data Encryption</h4>
                <p className="text-sm text-slate-400">Encrypt all data at rest and in transit</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                  AES-256
                </Badge>
                <Switch defaultChecked disabled />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Data Anonymization</h4>
                <p className="text-sm text-slate-400">Remove PII from analytics datasets</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Zero-Knowledge Processing</h4>
                <p className="text-sm text-slate-400">Process data without exposing raw information</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Audit Logging</h4>
                <p className="text-sm text-slate-400">Log all data access and modifications</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Compliance & Regulations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">GDPR Compliance</h4>
                <p className="text-sm text-slate-400">EU General Data Protection Regulation</p>
              </div>
              <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                Compliant
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">CCPA Compliance</h4>
                <p className="text-sm text-slate-400">California Consumer Privacy Act</p>
              </div>
              <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                Compliant
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">SOC 2 Type II</h4>
                <p className="text-sm text-slate-400">Security and availability controls</p>
              </div>
              <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                Certified
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">ISO 27001</h4>
                <p className="text-sm text-slate-400">Information security management</p>
              </div>
              <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                Certified
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Data Access & Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Right to be Forgotten</h4>
                <p className="text-sm text-slate-400">Enable customer data deletion requests</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Data Portability</h4>
                <p className="text-sm text-slate-400">Allow customers to export their data</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Opt-out Analytics</h4>
                <p className="text-sm text-slate-400">Respect user analytics preferences</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="space-y-3 border-t border-slate-600 pt-4">
            <Button variant="outline" className="w-full border-slate-600 text-slate-300">
              <Download className="w-4 h-4 mr-2" />
              Download Privacy Report
            </Button>
            <Button variant="outline" className="w-full border-slate-600 text-slate-300">
              <Eye className="w-4 h-4 mr-2" />
              View Data Processing Log
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Trash2 className="h-5 w-5" />
            Data Retention & Cleanup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-slate-300">Customer Data Retention</label>
              <select className="w-full p-2 rounded bg-slate-700 border border-slate-600 text-white">
                <option>7 years (Recommended)</option>
                <option>5 years</option>
                <option>3 years</option>
                <option>1 year</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-300">Analytics Data Retention</label>
              <select className="w-full p-2 rounded bg-slate-700 border border-slate-600 text-white">
                <option>2 years (Recommended)</option>
                <option>1 year</option>
                <option>6 months</option>
                <option>3 months</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Automatic Cleanup</h4>
                <p className="text-sm text-slate-400">Automatically delete expired data</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="space-y-3 border-t border-slate-600 pt-4">
            <Button variant="outline" className="w-full border-red-600 text-red-300 hover:bg-red-600/10">
              <Trash2 className="w-4 h-4 mr-2" />
              Initiate Data Cleanup
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
