
import { useState } from 'react';
import { Brain, Upload, RefreshCw, Search, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLegalStore } from '@/store/legalStore';

export function AILegalAssistant() {
  const { legalInsights } = useLegalStore();
  const [legalQuery, setLegalQuery] = useState('');
  const [analyzedContract, setAnalyzedContract] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const contractRisks = [
    {
      id: '1',
      title: 'Unlimited Liability Clause',
      description: 'Contract contains unlimited liability provisions that could expose organization to significant risk',
      severity: 'high',
      clause: '12.3'
    },
    {
      id: '2',
      title: 'Ambiguous Termination Terms',
      description: 'Termination clauses lack clarity on notice periods and obligations',
      severity: 'medium',
      clause: '8.1'
    }
  ];

  const keyTerms = [
    { id: '1', type: 'Payment Terms', value: 'Net 30 days', section: '5.2' },
    { id: '2', type: 'Contract Value', value: '$250,000 annually', section: '3.1' },
    { id: '3', type: 'Term Length', value: '2 years with auto-renewal', section: '2.1' },
    { id: '4', type: 'Liability Cap', value: '$500,000', section: '12.1' }
  ];

  const complianceRecommendations = [
    {
      id: '1',
      category: 'Data Protection',
      priority: 'high',
      title: 'Implement Enhanced Data Encryption',
      description: 'Current encryption standards may not meet upcoming regulatory requirements',
      riskReduction: 45,
      costSavings: 125,
      effortLevel: 'medium'
    },
    {
      id: '2',
      category: 'Contract Management',
      priority: 'medium',
      title: 'Automate Contract Renewal Notifications',
      description: 'Prevent missed renewal deadlines with automated alerting system',
      riskReduction: 30,
      costSavings: 75,
      effortLevel: 'low'
    }
  ];

  const getRiskIcon = (severity: string) => {
    switch (severity) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl font-bold">AI Legal Assistant</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Ready to assist</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Contract Analysis</CardTitle>
              <Button size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload Contract
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {!analyzedContract ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  📄
                </div>
                <div className="text-sm text-muted-foreground">
                  Upload a contract to get AI-powered analysis
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h4 className="font-medium mb-2">AI Summary</h4>
                  <div className="text-sm text-muted-foreground p-3 bg-gray-50 rounded-lg">
                    This software license agreement establishes terms for enterprise software usage with standard commercial provisions. Key considerations include liability limitations and data protection requirements.
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Identified Risks</h4>
                  <div className="space-y-3">
                    {contractRisks.map((risk) => (
                      <div key={risk.id} className="p-3 border rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="text-lg">{getRiskIcon(risk.severity)}</div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{risk.title}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {risk.description}
                            </div>
                            <div className="text-xs text-blue-600 mt-1">
                              Clause {risk.clause}
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            Suggest Fix
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Key Terms Extracted</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {keyTerms.map((term) => (
                      <div key={term.id} className="p-3 border rounded-lg">
                        <div className="text-sm font-medium">{term.type}</div>
                        <div className="text-sm">{term.value}</div>
                        <div className="text-xs text-muted-foreground">Section {term.section}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Legal Research Assistant</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Input
                placeholder="Ask a legal question or search for precedents..."
                value={legalQuery}
                onChange={(e) => setLegalQuery(e.target.value)}
              />
              <div className="flex gap-2">
                <Badge variant="outline">Case Law</Badge>
                <Badge variant="outline">Statutes</Badge>
                <Badge variant="outline">Regulations</Badge>
                <Badge variant="outline">Internal Docs</Badge>
              </div>
            </div>

            {!searchResults ? (
              <div className="text-center py-8">
                <Search className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <div className="text-sm text-muted-foreground">
                  Enter a query to search legal resources
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  {
                    type: 'Case Law',
                    title: 'Smith v. Technology Corp',
                    citation: '123 F.3d 456 (9th Cir. 2023)',
                    summary: 'Establishes precedent for software liability limitations...',
                    relevance: 92
                  },
                  {
                    type: 'Statute',
                    title: 'Digital Privacy Act Section 12',
                    citation: '15 U.S.C. § 1234',
                    summary: 'Requires disclosure of data processing activities...',
                    relevance: 88
                  }
                ].map((result, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">{result.type}</Badge>
                        <div className="font-medium text-sm">{result.title}</div>
                        <div className="text-xs text-muted-foreground">{result.citation}</div>
                        <div className="text-sm mt-2">{result.summary}</div>
                      </div>
                      <div className="text-xs text-muted-foreground ml-2">
                        {result.relevance}% relevant
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="mt-2">
                      View Full Text
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>AI Compliance Recommendations</CardTitle>
            <Button size="sm" variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceRecommendations.map((rec) => (
              <div key={rec.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{rec.category}</Badge>
                      <Badge className={getPriorityColor(rec.priority)}>
                        {rec.priority} Priority
                      </Badge>
                    </div>
                    <div className="font-medium">{rec.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {rec.description}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Potential Impact</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm font-medium">Risk Reduction</div>
                      <div className="text-lg font-bold text-green-600">{rec.riskReduction}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">Cost Savings</div>
                      <div className="text-lg font-bold text-blue-600">${rec.costSavings}K</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">Effort</div>
                      <div className="flex justify-center">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full mx-0.5 ${
                              i < (rec.effortLevel === 'low' ? 1 : rec.effortLevel === 'medium' ? 2 : 3)
                                ? 'bg-yellow-500'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm">Implement</Button>
                  <Button size="sm" variant="ghost">Schedule Review</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
