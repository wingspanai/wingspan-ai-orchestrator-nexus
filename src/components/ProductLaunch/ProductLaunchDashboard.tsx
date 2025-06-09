
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProductNavigator } from './ProductNavigator';
import { GlobalHeader } from './GlobalHeader';
import { AIAssistantPanel } from './AIAssistantPanel';
import { ProductCreationWizard } from './ProductCreationWizard';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useProductStore } from '@/store/productStore';

type ViewMode = 'timeline' | 'kanban' | 'calendar' | 'metrics';

export function ProductLaunchDashboard() {
  const [currentView, setCurrentView] = useState<ViewMode>('timeline');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showProductWizard, setShowProductWizard] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const { selectedProduct } = useProductStore();

  const handleCreateProduct = () => {
    setShowProductWizard(true);
  };

  const toggleAIAssistant = () => {
    setShowAIAssistant(!showAIAssistant);
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
                  {selectedProduct ? selectedProduct.name : 'Product Launch Dashboard'}
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
            {selectedProduct ? (
              <ProductDetailView product={selectedProduct} view={currentView} />
            ) : (
              <DashboardOverview />
            )}
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

function ProductDetailView({ product, view }: { product: any; view: ViewMode }) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">Product Detail View</h3>
          <p className="text-muted-foreground">
            Detailed {view} view for {product.name} will be implemented here
          </p>
        </div>
      </Card>
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
