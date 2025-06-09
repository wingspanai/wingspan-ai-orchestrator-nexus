
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Lightbulb, Users, Calendar, Zap, Target } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useProductStore } from '@/store/productStore';
import { Product, ProductCategory, Priority } from '@/types/product';

interface ProductCreationWizardProps {
  onComplete: () => void;
  onCancel: () => void;
}

interface WizardStep {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  component: React.ComponentType<any>;
}

interface ProductFormData {
  name: string;
  description: string;
  category: ProductCategory | '';
  priority: Priority | '';
  targetMarket: string;
  keywords: string[];
  estimatedBudget: number;
  targetLaunchDate: string;
}

export function ProductCreationWizard({ onComplete, onCancel }: ProductCreationWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    category: '',
    priority: '',
    targetMarket: '',
    keywords: [],
    estimatedBudget: 0,
    targetLaunchDate: ''
  });

  const { addProduct } = useProductStore();

  const steps: WizardStep[] = [
    { id: 'basic', title: 'Basic Information', icon: Lightbulb, component: BasicInfoStep },
    { id: 'market', title: 'Market Analysis', icon: Target, component: MarketAnalysisStep },
    { id: 'team', title: 'Team Assignment', icon: Users, component: TeamAssignmentStep },
    { id: 'timeline', title: 'Timeline & Budget', icon: Calendar, component: TimelineStep },
    { id: 'automation', title: 'Automation Setup', icon: Zap, component: AutomationStep },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Create the product
    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      category: formData.category as ProductCategory,
      stage: 'ideation',
      priority: formData.priority as Priority,
      metadata: {
        tags: [],
        keywords: formData.keywords,
        targetMarket: formData.targetMarket,
        competitors: []
      },
      teams: [],
      timeline: {
        startDate: new Date(),
        targetLaunchDate: new Date(formData.targetLaunchDate),
        milestones: []
      },
      metrics: {
        budget: formData.estimatedBudget,
        burnRate: 0,
        progressScore: 0,
        riskScore: 0,
        marketFit: 0
      },
      risks: [],
      aiInsights: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'current-user'
    };

    addProduct(newProduct);
    onComplete();
  };

  const updateFormData = (updates: Partial<ProductFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Create New Product</h2>
        <p className="text-muted-foreground">Let's set up your product launch journey</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          
          return (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                isActive 
                  ? 'border-primary bg-primary text-primary-foreground' 
                  : isCompleted 
                  ? 'border-green-500 bg-green-500 text-white'
                  : 'border-muted-foreground text-muted-foreground'
              }`}>
                <Icon className="h-4 w-4" />
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-2 ${
                  isCompleted ? 'bg-green-500' : 'bg-muted-foreground'
                }`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <Card className="min-h-[400px]">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {React.createElement(steps[currentStep].icon, { className: "h-5 w-5" })}
            <span>{steps[currentStep].title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CurrentStepComponent 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <div>
          {currentStep > 0 && (
            <Button variant="outline" onClick={handlePrevious}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
          )}
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext}>
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleComplete}>
              Create Product
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// Step Components
function BasicInfoStep({ formData, updateFormData }: any) {
  const [newKeyword, setNewKeyword] = useState('');

  const addKeyword = () => {
    if (newKeyword.trim() && !formData.keywords.includes(newKeyword.trim())) {
      updateFormData({
        keywords: [...formData.keywords, newKeyword.trim()]
      });
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    updateFormData({
      keywords: formData.keywords.filter((k: string) => k !== keyword)
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="productName">Product Name *</Label>
          <Input
            id="productName"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            placeholder="Enter product name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category *</Label>
          <Select value={formData.category} onValueChange={(value) => updateFormData({ category: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="saas">SaaS</SelectItem>
              <SelectItem value="hardware">Hardware</SelectItem>
              <SelectItem value="consumer-app">Consumer App</SelectItem>
              <SelectItem value="enterprise-b2b">Enterprise B2B</SelectItem>
              <SelectItem value="marketplace">Marketplace</SelectItem>
              <SelectItem value="platform">Platform</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => updateFormData({ description: e.target.value })}
          placeholder="Describe your product and its key features"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="priority">Priority</Label>
        <Select value={formData.priority} onValueChange={(value) => updateFormData({ priority: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Keywords</Label>
        <div className="flex space-x-2">
          <Input
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            placeholder="Add keyword"
            onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
          />
          <Button type="button" onClick={addKeyword}>Add</Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.keywords.map((keyword: string) => (
            <Badge key={keyword} variant="secondary" className="cursor-pointer" onClick={() => removeKeyword(keyword)}>
              {keyword} ×
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketAnalysisStep({ formData, updateFormData }: any) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="targetMarket">Target Market</Label>
        <Input
          id="targetMarket"
          value={formData.targetMarket}
          onChange={(e) => updateFormData({ targetMarket: e.target.value })}
          placeholder="Describe your target market"
        />
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <Lightbulb className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI Market Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Our AI will analyze market conditions, competition, and opportunities for your product
            </p>
            <Button variant="outline">Run Market Analysis</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TeamAssignmentStep({ formData, updateFormData }: any) {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Team Builder</h3>
            <p className="text-muted-foreground mb-4">
              Assign team members and get AI recommendations for optimal team composition
            </p>
            <Button variant="outline">Configure Team</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TimelineStep({ formData, updateFormData }: any) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="budget">Estimated Budget</Label>
          <Input
            id="budget"
            type="number"
            value={formData.estimatedBudget}
            onChange={(e) => updateFormData({ estimatedBudget: Number(e.target.value) })}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="launchDate">Target Launch Date</Label>
          <Input
            id="launchDate"
            type="date"
            value={formData.targetLaunchDate}
            onChange={(e) => updateFormData({ targetLaunchDate: e.target.value })}
          />
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI Timeline Generator</h3>
            <p className="text-muted-foreground mb-4">
              Generate optimized timeline based on complexity, team size, and constraints
            </p>
            <Button variant="outline">Generate Timeline</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AutomationStep({ formData, updateFormData }: any) {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <Zap className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Automation Setup</h3>
            <p className="text-muted-foreground mb-4">
              Configure workflows, notifications, and automation rules for your product launch
            </p>
            <Button variant="outline">Setup Automations</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
