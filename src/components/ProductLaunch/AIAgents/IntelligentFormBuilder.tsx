
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Plus, 
  FileText, 
  Rocket, 
  Users, 
  Star, 
  List, 
  MessageSquare, 
  Grid,
  X,
  Sparkles,
  CheckCircle
} from 'lucide-react';

export function IntelligentFormBuilder() {
  const [selectedForm, setSelectedForm] = useState('launch-questionnaire');
  const [surveyQuestions, setSurveyQuestions] = useState([
    {
      id: 1,
      type: 'multiple-choice',
      text: 'How would you rate the product concept?',
      options: [
        { id: 1, text: 'Excellent' },
        { id: 2, text: 'Good' },
        { id: 3, text: 'Fair' },
        { id: 4, text: 'Poor' }
      ],
      required: true,
      conditionalLogic: false
    }
  ]);

  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    description: '',
    targetAudience: [],
    launchType: '',
    launchDate: '',
    budget: 0
  });

  const [formAnalytics] = useState({
    responses: 156,
    responseRate: 68,
    avgCompletionTime: 8.5,
    dropOffRate: 12,
    dropOffQuestion: 4
  });

  const productCategories = ['SaaS', 'Hardware', 'Mobile App', 'Platform', 'Service'];
  const audienceSegments = ['Enterprise', 'SMB', 'Consumer', 'Developer', 'Startup'];

  const addQuestion = (type: string) => {
    const newQuestion = {
      id: Date.now(),
      type,
      text: '',
      options: type === 'multiple-choice' ? [{ id: 1, text: '' }] : [],
      required: false,
      conditionalLogic: false
    };
    setSurveyQuestions([...surveyQuestions, newQuestion]);
  };

  const removeQuestion = (id: number) => {
    setSurveyQuestions(surveyQuestions.filter(q => q.id !== id));
  };

  const updateQuestion = (id: number, field: string, value: any) => {
    setSurveyQuestions(questions => 
      questions.map(q => q.id === id ? { ...q, [field]: value } : q)
    );
  };

  const addOption = (questionId: number) => {
    setSurveyQuestions(questions =>
      questions.map(q => 
        q.id === questionId 
          ? { ...q, options: [...q.options, { id: Date.now(), text: '' }] }
          : q
      )
    );
  };

  const removeOption = (questionId: number, optionId: number) => {
    setSurveyQuestions(questions =>
      questions.map(q => 
        q.id === questionId 
          ? { ...q, options: q.options.filter(o => o.id !== optionId) }
          : q
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Smart Product Launch Forms</h2>
          <p className="text-muted-foreground">AI-powered form building with intelligent insights</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Form
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Templates
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Form Templates */}
        <div className="col-span-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Product Launch Questionnaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Product Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Information</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Product Name *</Label>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Enter product name"
                          value={formData.productName}
                          onChange={(e) => setFormData(prev => ({ ...prev, productName: e.target.value }))}
                        />
                        <Button size="sm" variant="outline">
                          <Sparkles className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label>Product Category</Label>
                      <Select value={formData.productCategory} onValueChange={(value) => setFormData(prev => ({ ...prev, productCategory: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {productCategories.map(category => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Product Description</Label>
                    <Textarea 
                      placeholder="Describe your product..."
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className="min-h-[100px]"
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      AI Enhancement available • Character count: {formData.description.length}/500
                    </div>
                  </div>
                </div>

                {/* Target Market Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Target Market</h3>
                  
                  <div>
                    <Label>Target Audience</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {audienceSegments.map(segment => (
                        <div key={segment} className="flex items-center space-x-2">
                          <Checkbox 
                            id={segment}
                            checked={formData.targetAudience.includes(segment)}
                            onCheckedChange={(checked) => {
                              setFormData(prev => ({
                                ...prev,
                                targetAudience: checked 
                                  ? [...prev.targetAudience, segment]
                                  : prev.targetAudience.filter(a => a !== segment)
                              }));
                            }}
                          />
                          <Label htmlFor={segment} className="text-sm">{segment}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Market Size Estimation</Label>
                    <Input 
                      type="number"
                      placeholder="TAM in millions"
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({ ...prev, budget: Number(e.target.value) }))}
                    />
                    <div className="text-xs text-blue-600 mt-1">
                      💡 Based on your inputs, estimated TAM is $45M-$60M
                    </div>
                  </div>
                </div>

                {/* Launch Strategy Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Launch Strategy</h3>
                  
                  <div>
                    <Label>Launch Type</Label>
                    <RadioGroup 
                      value={formData.launchType} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, launchType: value }))}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="soft" id="soft" />
                        <Label htmlFor="soft">Soft Launch</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beta" id="beta" />
                        <Label htmlFor="beta">Beta Launch</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full" id="full" />
                        <Label htmlFor="full">Full Launch</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.launchType === 'beta' && (
                    <div className="p-4 border rounded-lg bg-blue-50">
                      <h4 className="font-medium mb-2">Beta Launch Configuration</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Beta Duration</Label>
                          <Input type="date" />
                        </div>
                        <div>
                          <Label>Beta User Limit</Label>
                          <Input type="number" placeholder="e.g., 100" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Form Actions */}
                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline">Save Draft</Button>
                  <Button variant="outline">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Validate
                  </Button>
                  <Button>Submit for Review</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Survey Builder */}
          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Stakeholder Feedback Survey
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Question Types */}
                <div>
                  <Label>Add Question Type</Label>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    <Button variant="outline" size="sm" onClick={() => addQuestion('rating')}>
                      <Star className="w-4 h-4 mr-2" />
                      Rating
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => addQuestion('multiple-choice')}>
                      <List className="w-4 h-4 mr-2" />
                      Multiple Choice
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => addQuestion('open-ended')}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Open Ended
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => addQuestion('matrix')}>
                      <Grid className="w-4 h-4 mr-2" />
                      Matrix
                    </Button>
                  </div>
                </div>

                {/* Survey Questions */}
                <div className="space-y-4">
                  {surveyQuestions.map((question, index) => (
                    <Card key={question.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">Q{index + 1}</Badge>
                            <Badge>{question.type}</Badge>
                          </div>
                          <Button size="sm" variant="ghost" onClick={() => removeQuestion(question.id)}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="space-y-3">
                          <Input
                            placeholder="Enter your question"
                            value={question.text}
                            onChange={(e) => updateQuestion(question.id, 'text', e.target.value)}
                          />

                          {question.type === 'multiple-choice' && (
                            <div className="space-y-2">
                              <Label>Answer Options</Label>
                              {question.options.map((option, optIndex) => (
                                <div key={option.id} className="flex items-center gap-2">
                                  <Input
                                    placeholder={`Option ${optIndex + 1}`}
                                    value={option.text}
                                    onChange={(e) => {
                                      const newOptions = [...question.options];
                                      newOptions[optIndex].text = e.target.value;
                                      updateQuestion(question.id, 'options', newOptions);
                                    }}
                                  />
                                  <Button 
                                    size="sm" 
                                    variant="ghost"
                                    onClick={() => removeOption(question.id, option.id)}
                                  >
                                    <X className="w-3 h-3" />
                                  </Button>
                                </div>
                              ))}
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => addOption(question.id)}
                              >
                                <Plus className="w-3 h-3 mr-1" />
                                Add Option
                              </Button>
                            </div>
                          )}

                          <div className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                checked={question.required}
                                onCheckedChange={(checked) => updateQuestion(question.id, 'required', checked)}
                              />
                              <Label>Required</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                checked={question.conditionalLogic}
                                onCheckedChange={(checked) => updateQuestion(question.id, 'conditionalLogic', checked)}
                              />
                              <Label>Conditional Logic</Label>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form Analytics Sidebar */}
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Form Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{formAnalytics.responses}</div>
                    <div className="text-sm text-muted-foreground">Responses</div>
                    <div className="text-xs text-green-600">{formAnalytics.responseRate}% rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{formAnalytics.avgCompletionTime}m</div>
                    <div className="text-sm text-muted-foreground">Avg Time</div>
                    <div className="text-xs text-blue-600">-2m vs avg</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{formAnalytics.dropOffRate}%</div>
                  <div className="text-sm text-muted-foreground">Drop-off Rate</div>
                  <div className="text-xs text-muted-foreground">Most at Q{formAnalytics.dropOffQuestion}</div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-medium">AI-Generated Insights</h4>
                  
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <div className="text-sm">
                        75% of respondents prefer Feature A over Feature B, suggesting prioritization adjustment
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 text-yellow-600 mt-0.5" />
                      <div className="text-sm">
                        Low confidence in Q3 launch date - consider additional validation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
