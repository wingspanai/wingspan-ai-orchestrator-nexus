
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Brain, Plus, X, Sparkles } from 'lucide-react';
import { useGTMStore } from '@/store/gtmStore';

export function PositioningStrategy() {
  const {
    valueProposition,
    primaryMessage,
    supportingMessages,
    personas,
    updateValueProposition,
    addSupportingMessage,
    removeSupportingMessage,
    generateAIPositioning,
  } = useGTMStore();

  const handleInputChange = (field: keyof typeof valueProposition, value: string) => {
    updateValueProposition({ [field]: value });
  };

  const handleAddSupportingMessage = () => {
    addSupportingMessage('New supporting message');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Product Positioning & Messaging Framework</CardTitle>
            <Button onClick={generateAIPositioning} className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Generate Positioning
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Value Proposition Builder */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Value Proposition</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">For (target customers)</label>
                <Input
                  value={valueProposition.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  placeholder="data-driven SaaS companies"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Who (have this need)</label>
                <Input
                  value={valueProposition.customerNeed}
                  onChange={(e) => handleInputChange('customerNeed', e.target.value)}
                  placeholder="need real-time analytics insights"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Our product is (category)</label>
                <Input
                  value={valueProposition.productCategory}
                  onChange={(e) => handleInputChange('productCategory', e.target.value)}
                  placeholder="an AI-powered analytics platform"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">That (provides this benefit)</label>
                <Input
                  value={valueProposition.keyBenefit}
                  onChange={(e) => handleInputChange('keyBenefit', e.target.value)}
                  placeholder="delivers actionable insights in seconds"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Unlike (competitors)</label>
                <Input
                  value={valueProposition.competitors}
                  onChange={(e) => handleInputChange('competitors', e.target.value)}
                  placeholder="traditional BI tools"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Our product (differentiator)</label>
                <Input
                  value={valueProposition.differentiator}
                  onChange={(e) => handleInputChange('differentiator', e.target.value)}
                  placeholder="requires zero setup and learns from your data"
                />
              </div>
            </div>

            {valueProposition.generatedProposition && (
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Generated Value Proposition</span>
                  {valueProposition.clarityScore && (
                    <Badge variant="secondary">
                      Clarity Score: {valueProposition.clarityScore}/10
                    </Badge>
                  )}
                </div>
                <p className="text-sm">{valueProposition.generatedProposition}</p>
              </div>
            )}
          </div>

          {/* Messaging Hierarchy */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Messaging Hierarchy</h3>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Primary Message</label>
                <span className="text-xs text-muted-foreground">{primaryMessage.length}/100</span>
              </div>
              <div className="flex gap-2">
                <Input
                  value={primaryMessage}
                  onChange={(e) => updateValueProposition({ primaryMessage: e.target.value })}
                  maxLength={100}
                  placeholder="Core message that captures the essence"
                  className="flex-1"
                />
                <Button size="sm" variant="outline">
                  <Sparkles className="w-4 h-4" />
                  Enhance
                </Button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Supporting Messages</label>
                <Button size="sm" onClick={handleAddSupportingMessage}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {supportingMessages.map((message, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => {
                        // Update supporting message logic would go here
                      }}
                      placeholder="Supporting point"
                      className="flex-1"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeSupportingMessage(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Persona-Specific Messaging */}
      <Card>
        <CardHeader>
          <CardTitle>Persona-Specific Messaging</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {personas.map((persona) => (
              <Card key={persona.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback>{persona.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h4 className="font-medium">{persona.name}</h4>
                        <p className="text-sm text-muted-foreground">{persona.role}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Pain Points</label>
                        <div className="flex flex-wrap gap-1">
                          {persona.painPoints.map((pain, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {pain}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Key Message</label>
                        <p className="text-sm bg-muted p-2 rounded">{persona.customMessage}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Preferred Channels</label>
                        <div className="flex flex-wrap gap-1">
                          {persona.preferredChannels.map((channel, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {channel}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline">Generate Content</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
