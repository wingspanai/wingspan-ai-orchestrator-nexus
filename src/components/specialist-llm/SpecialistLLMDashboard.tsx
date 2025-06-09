
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { 
  Brain, 
  Settings, 
  Activity, 
  Save, 
  RefreshCw, 
  Copy,
  Zap,
  Shield,
  TrendingUp,
  Users,
  BarChart,
  AlertCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Types
interface SpecialistLLM {
  id: string;
  name: string;
  type: 'ECF' | 'RIE' | 'BPR' | 'PBI' | 'HCO';
  status: 'active' | 'inactive' | 'training';
  performance: {
    accuracy: number;
    responseTime: number;
    throughput: number;
    errorRate: number;
  };
  personality: PersonalityProfile;
  icon: React.ReactNode;
  color: string;
}

interface PersonalityProfile {
  creativity: number;
  formality: number;
  verbosity: number;
  assertiveness: number;
  empathy: number;
  technicalDepth: number;
  riskTolerance: number;
  proactivity: number;
}

interface PersonalityTemplate {
  id: string;
  name: string;
  description: string;
  profile: PersonalityProfile;
}

// Specialist LLM configurations
const specialistLLMs: SpecialistLLM[] = [
  {
    id: 'ecf-llm',
    name: 'Enterprise Context Fusion',
    type: 'ECF',
    status: 'active',
    performance: {
      accuracy: 0.92,
      responseTime: 245,
      throughput: 1200,
      errorRate: 0.02
    },
    personality: {
      creativity: 0.7,
      formality: 0.6,
      verbosity: 0.5,
      assertiveness: 0.7,
      empathy: 0.5,
      technicalDepth: 0.8,
      riskTolerance: 0.6,
      proactivity: 0.8
    },
    icon: <Brain className="w-5 h-5" />,
    color: '#3B82F6'
  },
  {
    id: 'rie-llm',
    name: 'Regulatory Interpretation',
    type: 'RIE',
    status: 'active',
    performance: {
      accuracy: 0.95,
      responseTime: 180,
      throughput: 800,
      errorRate: 0.01
    },
    personality: {
      creativity: 0.3,
      formality: 0.9,
      verbosity: 0.7,
      assertiveness: 0.8,
      empathy: 0.4,
      technicalDepth: 0.9,
      riskTolerance: 0.2,
      proactivity: 0.6
    },
    icon: <Shield className="w-5 h-5" />,
    color: '#10B981'
  },
  {
    id: 'bpr-llm',
    name: 'Biometric Pattern Recognition',
    type: 'BPR',
    status: 'active',
    performance: {
      accuracy: 0.89,
      responseTime: 120,
      throughput: 2000,
      errorRate: 0.03
    },
    personality: {
      creativity: 0.5,
      formality: 0.5,
      verbosity: 0.3,
      assertiveness: 0.9,
      empathy: 0.3,
      technicalDepth: 0.7,
      riskTolerance: 0.4,
      proactivity: 0.9
    },
    icon: <Activity className="w-5 h-5" />,
    color: '#8B5CF6'
  },
  {
    id: 'pbi-llm',
    name: 'Predictive Business Intelligence',
    type: 'PBI',
    status: 'active',
    performance: {
      accuracy: 0.87,
      responseTime: 320,
      throughput: 600,
      errorRate: 0.04
    },
    personality: {
      creativity: 0.6,
      formality: 0.7,
      verbosity: 0.6,
      assertiveness: 0.6,
      empathy: 0.5,
      technicalDepth: 0.8,
      riskTolerance: 0.5,
      proactivity: 0.7
    },
    icon: <TrendingUp className="w-5 h-5" />,
    color: '#F59E0B'
  },
  {
    id: 'hco-llm',
    name: 'Human Capital Optimization',
    type: 'HCO',
    status: 'active',
    performance: {
      accuracy: 0.91,
      responseTime: 200,
      throughput: 1000,
      errorRate: 0.02
    },
    personality: {
      creativity: 0.8,
      formality: 0.4,
      verbosity: 0.6,
      assertiveness: 0.5,
      empathy: 0.9,
      technicalDepth: 0.6,
      riskTolerance: 0.7,
      proactivity: 0.8
    },
    icon: <Users className="w-5 h-5" />,
    color: '#EC4899'
  }
];

// Personality templates
const personalityTemplates: PersonalityTemplate[] = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'Formal, precise, and technical',
    profile: {
      creativity: 0.3,
      formality: 0.9,
      verbosity: 0.5,
      assertiveness: 0.7,
      empathy: 0.4,
      technicalDepth: 0.8,
      riskTolerance: 0.3,
      proactivity: 0.6
    }
  },
  {
    id: 'innovative',
    name: 'Innovative',
    description: 'Creative, proactive, and bold',
    profile: {
      creativity: 0.9,
      formality: 0.4,
      verbosity: 0.6,
      assertiveness: 0.8,
      empathy: 0.6,
      technicalDepth: 0.7,
      riskTolerance: 0.8,
      proactivity: 0.9
    }
  },
  {
    id: 'balanced',
    name: 'Balanced',
    description: 'Well-rounded approach',
    profile: {
      creativity: 0.6,
      formality: 0.6,
      verbosity: 0.5,
      assertiveness: 0.6,
      empathy: 0.6,
      technicalDepth: 0.7,
      riskTolerance: 0.5,
      proactivity: 0.7
    }
  },
  {
    id: 'empathetic',
    name: 'Empathetic',
    description: 'User-focused and understanding',
    profile: {
      creativity: 0.7,
      formality: 0.4,
      verbosity: 0.7,
      assertiveness: 0.4,
      empathy: 0.9,
      technicalDepth: 0.5,
      riskTolerance: 0.6,
      proactivity: 0.8
    }
  }
];

export const SpecialistLLMDashboard: React.FC = () => {
  const [selectedLLM, setSelectedLLM] = useState<SpecialistLLM>(specialistLLMs[0]);
  const [personalityProfile, setPersonalityProfile] = useState<PersonalityProfile>(selectedLLM.personality);
  const [previewText, setPreviewText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [testPrompt, setTestPrompt] = useState('Explain the latest compliance requirements for data privacy.');
  const [performanceData, setPerformanceData] = useState<any[]>([]);

  // Load performance data
  useEffect(() => {
    // Simulate real-time performance data
    const interval = setInterval(() => {
      setPerformanceData(prev => {
        const newData = [...prev, {
          time: new Date().toLocaleTimeString(),
          accuracy: selectedLLM.performance.accuracy + (Math.random() - 0.5) * 0.05,
          responseTime: selectedLLM.performance.responseTime + (Math.random() - 0.5) * 20,
          throughput: selectedLLM.performance.throughput + (Math.random() - 0.5) * 100
        }].slice(-20);
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedLLM]);

  // Update personality when LLM changes
  useEffect(() => {
    setPersonalityProfile(selectedLLM.personality);
  }, [selectedLLM]);

  // Handle personality trait change
  const handleTraitChange = (trait: keyof PersonalityProfile, value: number) => {
    setPersonalityProfile(prev => ({
      ...prev,
      [trait]: value
    }));
  };

  // Apply personality template
  const applyTemplate = (template: PersonalityTemplate) => {
    setPersonalityProfile(template.profile);
  };

  // Save personality changes
  const savePersonality = async () => {
    setIsLoading(true);
    try {
      // API call to save personality
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to save personality:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate preview based on personality
  const generatePreview = async () => {
    setIsLoading(true);
    try {
      // Simulate API call to generate preview
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate different responses based on personality
      const responses: { [key: string]: string } = {
        professional: `Based on current regulatory requirements, organizations must implement comprehensive data privacy measures including: 1) Explicit consent mechanisms, 2) Data minimization practices, 3) Regular privacy impact assessments. Compliance deadline: Q2 2024.`,
        creative: `Think of data privacy like protecting your digital home! 🏠 The latest rules are all about giving users the keys to their own data castle. We need smart consent flows, minimal data collection (less is more!), and regular check-ups on our privacy health.`,
        balanced: `The latest data privacy requirements focus on three key areas: First, obtaining clear user consent. Second, collecting only necessary data. Third, conducting regular assessments. These changes aim to enhance user trust while maintaining operational efficiency.`,
        empathetic: `I understand privacy compliance can feel overwhelming. The new requirements are designed to protect users, which ultimately benefits everyone. Let's break it down together: we need better consent processes, thoughtful data collection, and regular reviews. How can I help make this easier for your team?`
      };
      
      // Select response based on personality traits
      let responseStyle = 'balanced';
      if (personalityProfile.formality > 0.7 && personalityProfile.technicalDepth > 0.7) {
        responseStyle = 'professional';
      } else if (personalityProfile.creativity > 0.7 && personalityProfile.empathy < 0.5) {
        responseStyle = 'creative';
      } else if (personalityProfile.empathy > 0.7) {
        responseStyle = 'empathetic';
      }
      
      setPreviewText(responses[responseStyle]);
    } catch (error) {
      console.error('Failed to generate preview:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset to defaults
  const resetToDefaults = () => {
    const defaultLLM = specialistLLMs.find(llm => llm.id === selectedLLM.id);
    if (defaultLLM) {
      setPersonalityProfile(defaultLLM.personality);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Specialist LLM Dashboard</h1>
          <p className="text-muted-foreground mt-1">Configure and monitor AI specialist personalities</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="px-3 py-1">
            <Zap className="w-4 h-4 mr-1" />
            5 Active LLMs
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Global Settings
          </Button>
        </div>
      </div>

      {/* Success Alert */}
      {showSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-green-800">Personality profile updated successfully!</span>
          </div>
        </div>
      )}

      {/* LLM Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Select Specialist LLM</CardTitle>
          <CardDescription>Choose an LLM to configure its personality</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {specialistLLMs.map(llm => (
              <button
                key={llm.id}
                onClick={() => setSelectedLLM(llm)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedLLM.id === llm.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-border hover:border-border/80'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`p-3 rounded-full`} style={{ backgroundColor: `${llm.color}20` }}>
                    <div style={{ color: llm.color }}>{llm.icon}</div>
                  </div>
                  <span className="text-sm font-medium">{llm.type}</span>
                  <Badge 
                    variant={llm.status === 'active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {llm.status}
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personality Configuration */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div style={{ color: selectedLLM.color }}>{selectedLLM.icon}</div>
                {selectedLLM.name} Personality
              </CardTitle>
              <CardDescription>
                Adjust personality traits to customize behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personality Templates */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Quick Templates</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {personalityTemplates.map(template => (
                    <Button
                      key={template.id}
                      variant="outline"
                      size="sm"
                      onClick={() => applyTemplate(template)}
                      className="text-xs"
                    >
                      {template.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Personality Sliders */}
              <div className="space-y-4">
                {Object.entries(personalityProfile).map(([trait, value]) => (
                  <div key={trait} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium capitalize">
                        {trait.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <span className="text-sm text-muted-foreground">
                        {Math.round(value * 100)}%
                      </span>
                    </div>
                    <Slider
                      value={[value]}
                      onValueChange={(values) => handleTraitChange(trait as keyof PersonalityProfile, values[0])}
                      min={0}
                      max={1}
                      step={0.1}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={resetToDefaults}
                  disabled={isLoading}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset to Defaults
                </Button>
                <Button
                  onClick={savePersonality}
                  disabled={isLoading}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Personality Preview</CardTitle>
              <CardDescription>
                Test how the LLM responds with current personality settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Test Prompt</label>
                <Textarea
                  value={testPrompt}
                  onChange={(e) => setTestPrompt(e.target.value)}
                  placeholder="Enter a test prompt..."
                  className="min-h-[80px]"
                />
              </div>
              
              <Button
                onClick={generatePreview}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Generating...' : 'Generate Preview'}
              </Button>

              {previewText && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium mb-2">Response Preview:</p>
                  <p className="text-sm text-muted-foreground">{previewText}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Real-time LLM performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                  <p className="text-2xl font-bold">
                    {(selectedLLM.performance.accuracy * 100).toFixed(1)}%
                  </p>
                  <Progress value={selectedLLM.performance.accuracy * 100} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="text-2xl font-bold">
                    {selectedLLM.performance.responseTime}ms
                  </p>
                  <Progress value={100 - (selectedLLM.performance.responseTime / 500) * 100} />
                </div>
              </div>

              {/* Performance Chart */}
              <div className="h-48 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="time" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="accuracy" 
                      stroke={selectedLLM.color}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Additional Metrics */}
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Throughput</span>
                  <span className="text-sm font-medium">
                    {selectedLLM.performance.throughput} req/min
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Error Rate</span>
                  <span className="text-sm font-medium">
                    {(selectedLLM.performance.errorRate * 100).toFixed(2)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personality Radar Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Personality Profile</CardTitle>
              <CardDescription>Visual representation of traits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(personalityProfile).map(([trait, value]) => (
                  <div key={trait} className="flex items-center gap-2">
                    <span className="text-sm w-24 capitalize">
                      {trait.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${value * 100}%`,
                          backgroundColor: selectedLLM.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Copy className="w-4 h-4 mr-2" />
                Export Configuration
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart className="w-4 h-4 mr-2" />
                View Detailed Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="w-4 h-4 mr-2" />
                Run A/B Test
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpecialistLLMDashboard;
