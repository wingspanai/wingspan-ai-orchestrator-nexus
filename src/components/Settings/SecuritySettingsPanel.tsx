
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Shield, Key, Smartphone, AlertTriangle, Check, Clock } from 'lucide-react';

export function SecuritySettingsPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Key className="h-5 w-5" />
            Password & Authentication
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300">Current Password</Label>
              <Input 
                type="password" 
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">New Password</Label>
              <Input 
                type="password" 
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Confirm New Password</Label>
              <Input 
                type="password" 
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Update Password
            </Button>
          </div>

          <div className="border-t border-slate-600 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                <p className="text-sm text-slate-400">Add an extra layer of security</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                  Enabled
                </Badge>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Trusted Devices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">MacBook Pro</p>
                  <p className="text-sm text-slate-400">Chrome • San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                  <Check className="w-3 h-3 mr-1" />
                  Current
                </Badge>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  Remove
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">iPhone 15 Pro</p>
                  <p className="text-sm text-slate-400">Safari • Last used 2 hours ago</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                Remove
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Login Notifications</h4>
                <p className="text-sm text-slate-400">Get notified of new login attempts</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Session Timeout</h4>
                <p className="text-sm text-slate-400">Auto-logout after inactivity</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Data Encryption</h4>
                <p className="text-sm text-slate-400">Encrypt sensitive data at rest</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">API Access Logging</h4>
                <p className="text-sm text-slate-400">Log all API access attempts</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Recent Security Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <Check className="w-4 h-4 text-green-400" />
              <div className="flex-1">
                <p className="text-sm text-white">Successful login</p>
                <p className="text-xs text-slate-400">MacBook Pro • 2 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Clock className="w-4 h-4 text-blue-400" />
              <div className="flex-1">
                <p className="text-sm text-white">Password changed</p>
                <p className="text-xs text-slate-400">You • 3 hours ago</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              <div className="flex-1">
                <p className="text-sm text-white">Failed login attempt</p>
                <p className="text-xs text-slate-400">Unknown device • 1 day ago</p>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full border-slate-600 text-slate-300">
            View Full Security Log
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
