
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Calendar, Settings } from 'lucide-react';

export function AIResilienceAssistant() {
  return (
    <div className="fixed right-4 bottom-4 z-50">
      <Card className="w-96 shadow-2xl bg-slate-800/95 border-slate-700 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white">
            <Shield className="w-5 h-5 text-blue-400" />
            Resilience AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
              <div className="mb-2">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
                  Critical Pattern Detected
                </Badge>
              </div>
              <p className="text-sm text-white mb-3">
                Database connection pool exhaustion pattern similar to incident from 3 weeks ago. 
                87% probability of occurrence in next 2 hours during peak load.
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Implement Prevention
                </Button>
                <Button size="sm" variant="outline">
                  <Calendar className="w-4 h-4 mr-1" />
                  Schedule Maintenance
                </Button>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
              <div className="mb-2">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                  Optimization Opportunity
                </Badge>
              </div>
              <p className="text-sm text-white mb-3">
                Redis cache hit rate could be improved by 23% with memory reallocation. 
                Estimated $3,200/month savings.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Settings className="w-4 h-4 mr-1" />
                  Configure
                </Button>
                <Button size="sm" variant="ghost">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
              <div className="mb-2">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                  System Learning
                </Badge>
              </div>
              <p className="text-sm text-white mb-3">
                New traffic pattern identified: 15% faster response times possible 
                with dynamic load balancing adjustment.
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Apply Learning
                </Button>
                <Button size="sm" variant="outline">
                  Review Impact
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
