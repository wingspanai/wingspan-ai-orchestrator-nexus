
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Sparkles, FileText, Calendar, Download, Bell, AlertTriangle } from 'lucide-react';

export function AIExecutiveAssistant() {
  return (
    <div className="fixed right-4 bottom-4 z-50">
      <Card className="w-96 shadow-2xl bg-slate-800/95 border-slate-700 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white">
            <Brain className="w-5 h-5 text-purple-400" />
            Executive AI Assistant
            <Badge variant="outline" className="ml-auto text-purple-300 border-purple-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Llama 3.1 70B
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Quick Insight Alert */}
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-red-300 mb-1">Unusual Pattern Detected</h4>
                  <p className="text-xs text-slate-300 mb-2">
                    Customer acquisition cost increased 23% this week while conversion rates dropped 8%. 
                    Marketing and Sales agents suggest competitor promotion may be impacting performance.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs h-6">
                      Investigate
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs h-6">
                      Ignore
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Assistant Message */}
            <div className="p-3 bg-slate-700/50 rounded-lg">
              <p className="text-sm text-slate-300 mb-2">
                Good morning! I've analyzed insights from all 147 active agents. Here are your top 3 priorities:
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 font-medium">1.</span>
                  <span><strong>Supply chain risk</strong> - 70% probability of disruption in semiconductor components</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-medium">2.</span>
                  <span><strong>Revenue opportunity</strong> - $1.2M in upsell opportunities identified in Enterprise segment</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 font-medium">3.</span>
                  <span><strong>Talent alert</strong> - 2 key engineers showing flight risk signals</span>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <Input 
              placeholder="Ask about any business metric, prediction, or strategic question..."
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="text-xs h-8">
                <FileText className="w-3 h-3 mr-2" />
                Daily Summary
              </Button>
              <Button variant="outline" size="sm" className="text-xs h-8">
                <Calendar className="w-3 h-3 mr-2" />
                Schedule Review
              </Button>
              <Button variant="outline" size="sm" className="text-xs h-8">
                <Download className="w-3 h-3 mr-2" />
                Export Insights
              </Button>
              <Button variant="outline" size="sm" className="text-xs h-8">
                <Bell className="w-3 h-3 mr-2" />
                Alert Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
