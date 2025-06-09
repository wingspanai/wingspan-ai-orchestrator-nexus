
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Target, 
  Users, 
  DollarSign, 
  Calendar, 
  Zap,
  TrendingUp,
  FileText,
  Eye,
  Brain,
  Share2,
  Megaphone,
  Rocket,
  Play,
  RefreshCw,
  Plus,
  Lightbulb,
  Settings,
  AlertCircle,
  Clock,
  CheckCircle,
  BarChart
} from 'lucide-react';
import { useGTMStore } from '@/store/gtmStore';
import { PositioningStrategy } from './PositioningStrategy';
import { PricingStrategy } from './PricingStrategy';
import { ChannelStrategy } from './ChannelStrategy';
import { MarketIntelligenceFeed } from './MarketIntelligenceFeed';
import { PerformanceDashboard } from './PerformanceDashboard';

export function GoToMarketDashboard() {
  const { 
    selectedProduct, 
    products, 
    activeTab, 
    setSelectedProduct, 
    setActiveTab,
    marketIntel
  } = useGTMStore();

  const handleProductChange = (productId: string) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product || null);
  };

  const runMarketSimulation = () => {
    console.log('Running market simulation...');
  };

  const generateGTMPlan = () => {
    console.log('Generating GTM plan...');
  };

  const viewCompetitorMoves = () => {
    console.log('Viewing competitor intelligence...');
  };

  const currentProduct = selectedProduct || products[0];

  // If Performance tab is selected, render the full PerformanceDashboard
  if (activeTab === 'performance') {
    return <PerformanceDashboard />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Go-to-Market Strategy Center</h1>
            <p className="text-indigo-100 mt-2">
              AI-powered market strategy, launch planning, and campaign orchestration
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={currentProduct.id} onValueChange={handleProductChange}>
              <SelectTrigger className="w-[250px] bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {products.map(product => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name} - {product.launchDate}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="flex gap-2">
              <Button variant="secondary" onClick={runMarketSimulation}>
                <TrendingUp className="w-4 h-4 mr-2" />
                Market Simulation
              </Button>
              <Button variant="secondary" onClick={generateGTMPlan}>
                <FileText className="w-4 h-4 mr-2" />
                Generate GTM Plan
              </Button>
              <Button variant="secondary" onClick={viewCompetitorMoves}>
                <Eye className="w-4 h-4 mr-2" />
                Competitor Intel
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-5 gap-4 p-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">${currentProduct.targetRevenue}M</div>
                <div className="text-sm text-muted-foreground">Target Revenue</div>
                <div className="text-xs text-green-600">87% confidence</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{currentProduct.totalAddressableMarket}M</div>
                <div className="text-sm text-muted-foreground">TAM Size</div>
                <div className="text-xs text-blue-600">5.2% capture</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">${currentProduct.customerAcquisitionCost}</div>
                <div className="text-sm text-muted-foreground">Target CAC</div>
                <div className="text-xs text-purple-600">LTV:CAC 8:1</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">42</div>
                <div className="text-sm text-muted-foreground">Days to Launch</div>
                <div className="text-xs text-orange-600">{currentProduct.launchReadiness}% ready</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Zap className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{currentProduct.campaignChannels}</div>
                <div className="text-sm text-muted-foreground">Active Channels</div>
                <div className="text-xs text-indigo-600">
                  {currentProduct.channelsReady}/{currentProduct.totalChannels} ready
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6 px-6 pb-6">
        {/* Main Strategy Canvas */}
        <main className="col-span-9">
          {/* Strategy Tabs */}
          <div className="border-b border-border mb-6">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('positioning')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'positioning' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Target className="w-4 h-4" />
                Positioning & Messaging
              </button>
              
              <button
                onClick={() => setActiveTab('pricing')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'pricing' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                Pricing Strategy
              </button>
              
              <button
                onClick={() => setActiveTab('channels')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'channels' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Share2 className="w-4 h-4" />
                Channel Strategy
              </button>
              
              <button
                onClick={() => setActiveTab('campaign')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'campaign' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Megaphone className="w-4 h-4" />
                Campaign Planning
              </button>
              
              <button
                onClick={() => setActiveTab('launch')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'launch' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Rocket className="w-4 h-4" />
                Launch Execution
              </button>

              <button
                onClick={() => setActiveTab('performance')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'performance' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <BarChart className="w-4 h-4" />
                Performance Analytics
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'positioning' && <PositioningStrategy />}
            {activeTab === 'pricing' && <PricingStrategy />}
            {activeTab === 'channels' && <ChannelStrategy />}
            {activeTab === 'campaign' && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <Megaphone className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Campaign Planning</h3>
                    <p className="text-muted-foreground">
                      Integrated campaign planning and content creation hub coming soon
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
            {activeTab === 'launch' && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <Rocket className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Launch Execution</h3>
                    <p className="text-muted-foreground">
                      Launch control center with real-time monitoring coming soon
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>

        {/* Right Sidebar - Market Intelligence */}
        <aside className="col-span-3">
          <MarketIntelligenceFeed />
        </aside>
      </div>
    </div>
  );
}
