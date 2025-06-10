
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SettingsHeader } from './SettingsHeader';
import { AccountSettingsPanel } from './AccountSettingsPanel';
import { SecuritySettingsPanel } from './SecuritySettingsPanel';
import { NotificationSettingsPanel } from './NotificationSettingsPanel';
import { IntegrationSettingsPanel } from './IntegrationSettingsPanel';
import { AIEngineSettingsPanel } from './AIEngineSettingsPanel';
import { DataPrivacySettingsPanel } from './DataPrivacySettingsPanel';
import { TeamManagementPanel } from './TeamManagementPanel';
import { BillingSettingsPanel } from './BillingSettingsPanel';
import { User, Shield, Bell, Plug, Brain, Lock, Users, CreditCard } from 'lucide-react';

export function SettingsDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SettingsHeader />
      
      <div className="p-6 space-y-6">
        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-slate-800 border-slate-700">
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Account
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2">
              <Plug className="w-4 h-4" />
              Integrations
            </TabsTrigger>
            <TabsTrigger value="ai-engines" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Engines
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Team
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Billing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-6">
            <AccountSettingsPanel />
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <SecuritySettingsPanel />
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <NotificationSettingsPanel />
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <IntegrationSettingsPanel />
          </TabsContent>

          <TabsContent value="ai-engines" className="space-y-6">
            <AIEngineSettingsPanel />
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <DataPrivacySettingsPanel />
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <TeamManagementPanel />
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <BillingSettingsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
