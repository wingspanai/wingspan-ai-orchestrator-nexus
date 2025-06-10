
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, Shield, Activity, Users } from 'lucide-react';

export function SettingsHeader() {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">System Settings</h1>
              <p className="text-purple-100">Configure your AI-powered business intelligence platform</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
              <Shield className="w-3 h-3 mr-1" />
              Enterprise Security
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-100 border-blue-500/50">
              <Activity className="w-3 h-3 mr-1" />
              All Systems Operational
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-100 border-purple-500/50">
              <Users className="w-3 h-3 mr-1" />
              Team Administrator
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-white">24</div>
              <div className="text-xs text-purple-100">Active Integrations</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-white">10</div>
              <div className="text-xs text-purple-100">AI Engines</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-white">47</div>
              <div className="text-xs text-purple-100">Team Members</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-white">99.9%</div>
              <div className="text-xs text-purple-100">Uptime</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
