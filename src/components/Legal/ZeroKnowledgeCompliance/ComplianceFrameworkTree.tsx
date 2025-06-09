
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useZeroKnowledgeStore } from '@/store/zeroKnowledgeStore';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';

export function ComplianceFrameworkTree() {
  const { complianceFrameworks } = useZeroKnowledgeStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'non-compliant':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/95 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Compliance Frameworks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Regulatory Compliance */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Badge variant="default">Regulatory</Badge>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Compliant</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {complianceFrameworks
                .filter(f => f.type === 'regulatory')
                .map(framework => (
                  <div key={framework.id} className="p-3 rounded-lg bg-slate-700/50 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-white">{framework.name}</span>
                      {getStatusIcon(framework.status)}
                    </div>
                    <div className="space-y-1">
                      {framework.requirements.map(req => (
                        <div key={req.id} className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">{req.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {req.proofId}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Industry Standards */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Badge variant="secondary">Industry Standards</Badge>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Compliant</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">SOC 2 Type II</span>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Security</span>
                    <Badge variant="outline" className="text-xs">ZKP-SOC2-SEC</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Availability</span>
                    <Badge variant="outline" className="text-xs">ZKP-SOC2-AVL</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Confidentiality</span>
                    <Badge variant="outline" className="text-xs">ZKP-SOC2-CON</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Policies */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline">Custom Policies</Badge>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Compliant</span>
              </div>
            </div>
            
            <div className="space-y-2">
              {['Data Retention Policy', 'Access Control Policy', 'Encryption Policy', 'Incident Response'].map((policy, index) => (
                <div key={policy} className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{policy}</span>
                  <Badge variant="outline" className="text-xs">
                    ZKP-POL-{String(index + 1).padStart(3, '0')}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Alerts */}
      <Card className="bg-slate-800/95 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Compliance Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                <span className="font-medium text-yellow-400">GDPR Annual Report Due</span>
              </div>
              <p className="text-sm text-gray-300">
                Annual data protection report due to supervisory authority
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
