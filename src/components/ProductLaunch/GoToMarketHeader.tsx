
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, FileText, Eye } from 'lucide-react';
import { useGTMStore } from '@/store/gtmStore';

export function GoToMarketHeader() {
  const { selectedProduct, products, setSelectedProduct } = useGTMStore();

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

  return (
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
  );
}
