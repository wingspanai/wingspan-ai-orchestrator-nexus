
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useZeroKnowledgeStore } from '@/store/zeroKnowledgeStore';
import { CheckCircle, Clock, Zap } from 'lucide-react';

export function ProofGenerationPanel() {
  const { zkProofs, verificationStream } = useZeroKnowledgeStore();

  const proofCategories = [
    {
      name: 'Data Privacy Proofs',
      count: zkProofs.filter(p => p.type === 'privacy').length,
      proofs: zkProofs.filter(p => p.type === 'privacy')
    },
    {
      name: 'Access Control Proofs',
      count: zkProofs.filter(p => p.type === 'access-control').length,
      proofs: zkProofs.filter(p => p.type === 'access-control')
    },
    {
      name: 'Audit Trail Proofs',
      count: zkProofs.filter(p => p.type === 'audit-trail').length,
      proofs: zkProofs.filter(p => p.type === 'audit-trail')
    }
  ];

  return (
    <Card className="bg-slate-800/95 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Zero-Knowledge Proof Management</CardTitle>
        <CardDescription className="text-gray-400">
          Generate and manage cryptographic proofs without exposing underlying data
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Proof Categories */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {proofCategories.map(category => (
            <div key={category.name} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white">{category.name}</h4>
                <Badge className="bg-blue-600">{category.count} Active</Badge>
              </div>
              <div className="space-y-2">
                {category.proofs.slice(0, 3).map(proof => (
                  <div key={proof.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{proof.name}</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-gray-400">{proof.verificationTime}ms</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proof Generator */}
        <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-white">Generate New Compliance Proof</h4>
            <Button variant="outline" size="sm">
              <Zap className="w-4 h-4 mr-2" />
              Proof Wizard
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-300 block mb-2">Compliance Requirement</label>
              <div className="p-2 rounded bg-slate-600 text-sm text-white">
                GDPR - Right to Deletion
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-2">Proof Type</label>
              <div className="p-2 rounded bg-slate-600 text-sm text-white">
                Zero-Knowledge Proof
              </div>
            </div>
            <div className="flex items-end">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Generate Proof
              </Button>
            </div>
          </div>
        </div>

        {/* Real-Time Verification Stream */}
        <div>
          <h4 className="font-medium text-white mb-4">Real-Time Proof Verification</h4>
          <div className="space-y-2">
            {verificationStream.map(verification => (
              <div key={verification.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 border border-slate-600">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{verification.timestamp}</span>
                  <span className="text-sm text-white">{verification.proofId}</span>
                  <span className="text-sm text-gray-300">{verification.requirement}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-400">{verification.time}ms</span>
                  <span className="text-xs text-gray-400">{verification.gas}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
