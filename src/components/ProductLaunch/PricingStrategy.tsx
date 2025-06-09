
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Plus, DollarSign } from 'lucide-react';
import { useGTMStore } from '@/store/gtmStore';

export function PricingStrategy() {
  const {
    pricingModel,
    pricingTiers,
    optimalPrice,
    priceConfidence,
    elasticityCoefficient,
    runPricingSimulation,
  } = useGTMStore();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Dynamic Pricing Strategy</CardTitle>
            <div className="flex gap-2">
              <Button onClick={runPricingSimulation}>
                <Play className="w-4 h-4 mr-2" />
                Run Simulation
              </Button>
              <Select value={pricingModel}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="value-based">Value-Based</SelectItem>
                  <SelectItem value="competitive">Competitive</SelectItem>
                  <SelectItem value="cost-plus">Cost-Plus</SelectItem>
                  <SelectItem value="dynamic">Dynamic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">${optimalPrice}</div>
              <div className="text-sm text-muted-foreground">Optimal Price</div>
              <div className="text-xs text-green-600">{priceConfidence}% confidence</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">+23%</div>
              <div className="text-sm text-muted-foreground">Revenue Impact</div>
              <div className="text-xs text-muted-foreground">vs. initial price</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">{elasticityCoefficient}</div>
              <div className="text-sm text-muted-foreground">Elasticity</div>
              <div className="text-xs text-muted-foreground">Moderately elastic</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Pricing Tiers</CardTitle>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Tier
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <Card key={tier.id} className={`${tier.featured ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tier.name}</CardTitle>
                    {tier.featured && <Badge>Most Popular</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center">
                        <DollarSign className="w-6 h-6" />
                        <span className="text-3xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground">/{tier.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {tier.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            feature.included ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {feature.included ? '✓' : '✗'}
                          </div>
                          <span className={feature.included ? '' : 'text-muted-foreground line-through'}>
                            {feature.text}
                            {feature.limit && ` (${feature.limit})`}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Projected Adoption</span>
                        <span>{tier.projectedAdoption}%</span>
                      </div>
                      <Progress value={tier.projectedAdoption} className="h-2" />
                      <div className="text-sm text-muted-foreground text-center">
                        ${tier.projectedRevenue}K/mo projected revenue
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Competitive Pricing Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <DollarSign className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Competitive Analysis</h3>
            <p className="text-muted-foreground">
              Detailed competitive pricing comparison and market positioning coming soon
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
