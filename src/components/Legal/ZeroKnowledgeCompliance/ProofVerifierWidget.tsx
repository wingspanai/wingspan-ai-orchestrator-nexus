
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Key, CheckCircle, XCircle } from 'lucide-react';

export function ProofVerifierWidget() {
  const recentVerifications = [
    { id: '1', proofId: 'ZKP-GDPR-001', success: true },
    { id: '2', proofId: 'ZKP-HIPAA-002', success: true },
    { id: '3', proofId: 'ZKP-SOC2-SEC', success: true }
  ];

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <Card className="w-80 shadow-2xl bg-slate-800/95 border-slate-700 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white">
            <Key className="w-5 h-5 text-blue-400" />
            Proof Verifier
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input 
                placeholder="Enter proof ID or hash..." 
                className="bg-slate-700 border-slate-600 text-white"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Verify Proof
              </Button>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-white mb-2">Recent Verifications</h5>
              <div className="space-y-2">
                {recentVerifications.map(v => (
                  <div key={v.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{v.proofId}</span>
                    <div className="flex items-center gap-1">
                      {v.success ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400" />
                      )}
                      <Badge variant="outline" className="text-xs">
                        {v.success ? 'Verified' : 'Failed'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
