
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { useProductStore } from '@/store/productStore';
import { ProductStage, Priority } from '@/types/product';

interface ProductNavigatorProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function ProductNavigator({ collapsed, onToggleCollapse }: ProductNavigatorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { 
    filters, 
    setFilters, 
    filteredProducts, 
    getCounts, 
    selectProduct, 
    selectedProduct 
  } = useProductStore();
  
  const counts = getCounts();
  const products = filteredProducts();

  const handleStageFilter = (stage: ProductStage) => {
    const currentStages = filters.stage || [];
    const newStages = currentStages.includes(stage)
      ? currentStages.filter(s => s !== stage)
      : [...currentStages, stage];
    
    setFilters({ ...filters, stage: newStages });
  };

  const handlePriorityFilter = (priority: Priority) => {
    const currentPriorities = filters.priority || [];
    const newPriorities = currentPriorities.includes(priority)
      ? currentPriorities.filter(p => p !== priority)
      : [...currentPriorities, priority];
    
    setFilters({ ...filters, priority: newPriorities });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters({ ...filters, searchQuery: query });
  };

  if (collapsed) {
    return (
      <div className="p-2 h-full border-r border-border">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onToggleCollapse}
          className="w-full justify-center"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-muted/20">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Products</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onToggleCollapse}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 space-y-4 border-b border-border">
        {/* Stage Filters */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Stage</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {(['ideation', 'development', 'go-to-market', 'launch', 'live'] as ProductStage[]).map((stage) => (
              <Badge
                key={stage}
                variant={filters.stage?.includes(stage) ? 'default' : 'outline'}
                className="cursor-pointer text-xs"
                onClick={() => handleStageFilter(stage)}
              >
                {stage.replace('-', ' ')} ({counts[stage] || 0})
              </Badge>
            ))}
          </div>
        </div>

        {/* Priority Filters */}
        <div>
          <span className="text-sm font-medium mb-2 block">Priority</span>
          <div className="flex flex-wrap gap-1">
            {(['critical', 'high', 'medium', 'low'] as Priority[]).map((priority) => (
              <Badge
                key={priority}
                variant={filters.priority?.includes(priority) ? 'default' : 'outline'}
                className="cursor-pointer text-xs"
                onClick={() => handlePriorityFilter(priority)}
              >
                {priority}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {products.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <p>No products found</p>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedProduct?.id === product.id}
              onClick={() => selectProduct(product)}
            />
          ))
        )}
      </div>
    </div>
  );
}

interface ProductCardProps {
  product: any;
  isSelected: boolean;
  onClick: () => void;
}

function ProductCard({ product, isSelected, onClick }: ProductCardProps) {
  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'ideation': return 'bg-blue-500';
      case 'development': return 'bg-yellow-500';
      case 'go-to-market': return 'bg-purple-500';
      case 'launch': return 'bg-orange-500';
      case 'live': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-3">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium text-sm truncate">{product.name}</h3>
          <div className={`w-2 h-2 rounded-full ${getStageColor(product.stage)}`} />
        </div>
        
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          <span className={`text-xs font-medium ${getPriorityColor(product.priority)}`}>
            {product.priority}
          </span>
        </div>
        
        {product.metrics && (
          <div className="mt-2 pt-2 border-t border-border">
            <div className="flex justify-between text-xs">
              <span>Progress: {product.metrics.progressScore}%</span>
              <span>Risk: {product.metrics.riskScore}%</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
