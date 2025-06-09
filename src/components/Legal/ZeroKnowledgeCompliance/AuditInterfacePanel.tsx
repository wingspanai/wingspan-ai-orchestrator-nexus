
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useZeroKnowledgeStore } from '@/store/zeroKnowledgeStore';
import { Users, MessageSquare, Shield } from 'lucide-react';

export function AuditInterfacePanel() {
  const { activeAudits, auditMessages } = useZeroKnowledgeStore();

  return (
    <Card className="bg-slate-800/95 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Secure Auditor Portal</CardTitle>
        <CardDescription className="text-gray-400">
          Provide auditors with verification capabilities without data access
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Active Audit Sessions */}
        <div className="mb-6">
          <h4 className="font-medium text-white mb-4">Active Audit Sessions</h4>
          <div className="space-y-4">
            {activeAudits.map(audit => (
              <div key={audit.id} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="font-medium text-white">{audit.auditor}</div>
                      <div className="text-sm text-gray-400">{audit.type}</div>
                    </div>
                  </div>
                  <Badge className="bg-green-600">Active</Badge>
                </div>
                <div className="space-y-2">
                  <Progress value={audit.progress} className="w-full" />
                  <div className="text-sm text-gray-300">
                    {audit.itemsReviewed}/{audit.totalItems} items reviewed
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="text-sm font-medium text-white mb-2">Pending Verifications</h5>
                  {audit.pendingRequests.map(request => (
                    <div key={request.id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{request.type}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Provide Proof</Button>
                        <Button size="sm" variant="destructive">Deny</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secure Communication */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <h4 className="font-medium text-white">Secure Communication Channel</h4>
          </div>
          <div className="space-y-3">
            {auditMessages.map(message => (
              <div key={message.id} className="p-3 rounded-lg bg-slate-700/30 border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">{message.sender}</span>
                  <span className="text-xs text-gray-400">{message.timestamp}</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">{message.content}</p>
                {message.attachedProofs && (
                  <div className="flex gap-2">
                    {message.attachedProofs.map(proof => (
                      <Badge key={proof} variant="outline" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        {proof}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
