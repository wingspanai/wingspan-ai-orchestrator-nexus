
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Plug, Check, AlertCircle, RefreshCw, ExternalLink } from 'lucide-react';

export function IntegrationSettingsPanel() {
  const integrations = [
    { name: 'Salesforce', status: 'connected', icon: '🔄', description: 'CRM data synchronization', lastSync: '2 minutes ago' },
    { name: 'HubSpot', status: 'connected', icon: '🎯', description: 'Marketing automation', lastSync: '5 minutes ago' },
    { name: 'Slack', status: 'connected', icon: '💬', description: 'Team communications', lastSync: '1 minute ago' },
    { name: 'Google Analytics', status: 'connected', icon: '📊', description: 'Web analytics data', lastSync: '10 minutes ago' },
    { name: 'Stripe', status: 'connected', icon: '💳', description: 'Payment processing', lastSync: '3 minutes ago' },
    { name: 'Zapier', status: 'disconnected', icon: '⚡', description: 'Workflow automation', lastSync: 'Never' },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Plug className="h-5 w-5" />
            Active Integrations
            <Badge className="bg-blue-500/20 text-blue-100 border-blue-500/50">
              {integrations.filter(i => i.status === 'connected').length} Connected
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{integration.icon}</div>
                <div>
                  <h4 className="text-white font-medium">{integration.name}</h4>
                  <p className="text-sm text-slate-400">{integration.description}</p>
                  <p className="text-xs text-slate-500">Last sync: {integration.lastSync}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {integration.status === 'connected' ? (
                  <>
                    <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                      <Check className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Sync
                    </Button>
                    <Switch defaultChecked />
                  </>
                ) : (
                  <>
                    <Badge className="bg-red-500/20 text-red-100 border-red-500/50">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Disconnected
                    </Badge>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Connect
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Available Integrations
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Microsoft Teams', 'Zoom', 'Jira', 'GitHub', 'AWS', 'Azure'].map((integration) => (
            <div key={integration} className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 text-center">
              <h4 className="text-white font-medium mb-2">{integration}</h4>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                Connect
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
