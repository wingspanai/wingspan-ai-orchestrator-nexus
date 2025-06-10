
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Download, Receipt, Zap, Crown, Star } from 'lucide-react';

export function BillingSettingsPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Crown className="h-5 w-5" />
            Current Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise Pro</h3>
            <p className="text-slate-300 mb-4">Advanced AI-powered business intelligence</p>
            <div className="text-4xl font-bold text-white mb-2">$299</div>
            <div className="text-slate-400 text-sm">per month</div>
            <Badge className="mt-4 bg-green-500/20 text-green-100 border-green-500/50">
              Active
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Next billing date</span>
              <span className="text-white">January 15, 2025</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Billing cycle</span>
              <span className="text-white">Monthly</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Users included</span>
              <span className="text-white">50 seats</span>
            </div>
          </div>

          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Manage Plan
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Method
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 rounded bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">•••• •••• •••• 1234</h4>
                  <p className="text-sm text-slate-400">Expires 12/26</p>
                </div>
              </div>
              <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                Primary
              </Badge>
            </div>
            <Button variant="outline" className="w-full border-slate-600 text-slate-300">
              Update Payment Method
            </Button>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-medium">Billing Address</h4>
            <div className="text-sm text-slate-400">
              <p>Acme Corporation</p>
              <p>123 Business St, Suite 100</p>
              <p>San Francisco, CA 94105</p>
              <p>United States</p>
            </div>
            <Button variant="outline" className="border-slate-600 text-slate-300">
              Update Address
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Recent Invoices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
              <div>
                <h4 className="text-white font-medium">Invoice #INV-2024-12</h4>
                <p className="text-sm text-slate-400">December 15, 2024</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-medium">$299.00</span>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
              <div>
                <h4 className="text-white font-medium">Invoice #INV-2024-11</h4>
                <p className="text-sm text-slate-400">November 15, 2024</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-medium">$299.00</span>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
              <div>
                <h4 className="text-white font-medium">Invoice #INV-2024-10</h4>
                <p className="text-sm text-slate-400">October 15, 2024</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-medium">$299.00</span>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full border-slate-600 text-slate-300">
            View All Invoices
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Usage & Limits
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">AI Predictions</span>
                <span className="text-white">847K / 1M</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '84.7%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">API Calls</span>
                <span className="text-white">234K / 500K</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '46.8%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Data Storage</span>
                <span className="text-white">127 GB / 500 GB</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full" style={{ width: '25.4%' }}></div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full border-slate-600 text-slate-300">
            View Detailed Usage
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
