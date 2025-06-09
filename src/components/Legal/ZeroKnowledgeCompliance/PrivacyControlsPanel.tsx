
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useZeroKnowledgeStore } from '@/store/zeroKnowledgeStore';
import { Lock, Eye, Download, Edit } from 'lucide-react';

export function PrivacyControlsPanel() {
  const { privacyAssessments, dataSubjectRequests } = useZeroKnowledgeStore();

  const rightsData = [
    { title: 'Right to Access', icon: Eye, count: dataSubjectRequests.access, avgTime: '24 hours' },
    { title: 'Right to Deletion', icon: Lock, count: dataSubjectRequests.deletion, avgTime: '48 hours' },
    { title: 'Right to Portability', icon: Download, count: dataSubjectRequests.portability, avgTime: '72 hours' },
    { title: 'Right to Rectification', icon: Edit, count: dataSubjectRequests.rectification, avgTime: '24 hours' }
  ];

  return (
    <Card className="bg-slate-800/95 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Privacy Control Center</CardTitle>
        <CardDescription className="text-gray-400">
          Manage data privacy settings and zero-knowledge configurations
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Data Subject Rights */}
        <div className="mb-6">
          <h4 className="font-medium text-white mb-4">Data Subject Rights Management</h4>
          <div className="grid grid-cols-2 gap-4">
            {rightsData.map(right => (
              <div key={right.title} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-center gap-2 mb-2">
                  <right.icon className="w-4 h-4 text-blue-400" />
                  <span className="font-medium text-white">{right.title}</span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-300">{right.count} pending requests</div>
                  <div className="text-xs text-gray-400">Avg response: {right.avgTime}</div>
                </div>
                <Button variant="outline" size="sm" className="mt-2 w-full">
                  Process Requests
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Impact Assessments */}
        <div>
          <h4 className="font-medium text-white mb-4">Privacy Impact Assessments</h4>
          <div className="space-y-3">
            {privacyAssessments.map(assessment => (
              <div key={assessment.id} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">{assessment.project}</span>
                  <Badge 
                    variant={assessment.riskLevel === 'high' ? 'destructive' : assessment.riskLevel === 'medium' ? 'default' : 'secondary'}
                  >
                    {assessment.riskLevel} risk
                  </Badge>
                </div>
                <div className="text-sm text-gray-300 mb-2">
                  Data Types: {assessment.dataTypes.join(', ')}
                </div>
                <div className="text-sm text-gray-400 mb-3">
                  Purpose: {assessment.purpose}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Review</Button>
                  <Button size="sm">Generate Proof</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
