
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProductNavigator } from './ProductNavigator';
import { GlobalHeader } from './GlobalHeader';
import { AIAssistantPanel } from './AIAssistantPanel';
import { ProductCreationWizard } from './ProductCreationWizard';
import { IdeationDashboard } from './IdeationDashboard';
import { DevelopmentDashboard } from './DevelopmentDashboard';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useProductStore } from '@/store/productStore';
import { useLocation } from 'react-router-dom';

type ViewMode = 'timeline' | 'kanban' | 'calendar' | 'metrics';

export function ProductLaunchDashboard() {
  const [currentView, setCurrentView] = useState<ViewMode>('timeline');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showProductWizard, setShowProductWizard] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const { selectedProduct } = useProductStore();
  const location = useLocation();

  const handleCreateProduct = () => {
    setShowProductWizard(true);
  };

  const toggleAIAssistant = () => {
    setShowAIAssistant(!showAIAssistant);
  };

  const getCurrentContent = () => {
    if (location.pathname.includes('/ideation')) {
      return <IdeationDashboard />;
    }
    if (location.pathname.includes('/development')) {
      return <DevelopmentDashboard />;
    }
    // Add other views here as they're implemented
    return <DashboardOverview />;
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <GlobalHeader 
        onCreateProduct={handleCreateProduct}
        onToggleAI={toggleAIAssistant}
        showAIAssistant={showAIAssistant}
      />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className={`transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-80'} border-r border-border`}>
          <ProductNavigator 
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content Header */}
          <div className="border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">
                  {selectedProduct ? selectedProduct.name : getPageTitle(location.pathname)}
                </h1>
                {selectedProduct && (
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStageColor(selectedProduct.stage)}`}>
                    {selectedProduct.stage.replace('-', ' ').toUpperCase()}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <ViewToggle 
                  currentView={currentView}
                  onViewChange={setCurrentView}
                />
              </div>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 overflow-auto p-6">
            {getCurrentContent()}
          </div>
        </div>

        {/* AI Assistant Panel */}
        {showAIAssistant && (
          <AIAssistantPanel onClose={() => setShowAIAssistant(false)} />
        )}
      </div>

      {/* Product Creation Wizard */}
      <Dialog open={showProductWizard} onOpenChange={setShowProductWizard}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <ProductCreationWizard 
            onComplete={() => setShowProductWizard(false)}
            onCancel={() => setShowProductWizard(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function getPageTitle(pathname: string) {
  if (pathname.includes('/ideation')) return 'Product Ideation Hub';
  if (pathname.includes('/development')) return 'Development Command Center';
  if (pathname.includes('/go-to-market')) return 'Go-to-Market Strategy';
  if (pathname.includes('/launch')) return 'Launch Management';
  if (pathname.includes('/performance')) return 'Performance Analytics';
  return 'Product Launch Dashboard';
}

function getStageColor(stage: string) {
  switch (stage) {
    case 'ideation': return 'bg-blue-100 text-blue-800';
    case 'development': return 'bg-yellow-100 text-yellow-800';
    case 'go-to-market': return 'bg-purple-100 text-purple-800';
    case 'launch': return 'bg-orange-100 text-orange-800';
    case 'live': return 'bg-green-100 text-green-800';
    case 'post-launch': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

function ViewToggle({ currentView, onViewChange }: { currentView: ViewMode; onViewChange: (view: ViewMode) => void }) {
  const views: { key: ViewMode; label: string }[] = [
    { key: 'timeline', label: 'Timeline' },
    { key: 'kanban', label: 'Kanban' },
    { key: 'calendar', label: 'Calendar' },
    { key: 'metrics', label: 'Metrics' }
  ];

  return (
    <div className="flex rounded-lg border border-border">
      {views.map((view) => (
        <Button
          key={view.key}
          variant={currentView === view.key ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewChange(view.key)}
          className="rounded-none first:rounded-l-lg last:rounded-r-lg"
        >
          {view.label}
        </Button>
      ))}
    </div>
  );
}

function DashboardOverview() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">Welcome to Product Launch Dashboard</h3>
          <p className="text-muted-foreground mb-4">
            Select a product from the sidebar or create a new one to get started
          </p>
          <Button>Create Your First Product</Button>
        </div>
      </Card>
    </div>
  );
}
