
import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DataFlowVisualization() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showLabels, setShowLabels] = useState(true);
  const [showMetrics, setShowMetrics] = useState(true);

  const integrationNodes = [
    { id: 1, name: "Salesforce", logo: "/integrations/salesforce.svg", connected: true, recordsToday: 234, flowDirection: "bidirectional" },
    { id: 2, name: "HubSpot", logo: "/integrations/hubspot.svg", connected: true, recordsToday: 156, flowDirection: "bidirectional" },
    { id: 3, name: "Slack", logo: "/integrations/slack.svg", connected: true, recordsToday: 89, flowDirection: "out" },
    { id: 4, name: "QuickBooks", logo: "/integrations/quickbooks.svg", connected: true, recordsToday: 67, flowDirection: "in" },
    { id: 5, name: "Shopify", logo: "/integrations/shopify.svg", connected: false, recordsToday: 0, flowDirection: "none" },
    { id: 6, name: "Google Analytics", logo: "/integrations/google-analytics.svg", connected: false, recordsToday: 0, flowDirection: "none" }
  ];

  const centerX = 400;
  const centerY = 300;
  const radius = 200;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-text-primary">Integration Data Flow</h2>
        <div className="flex items-center gap-4">
          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => setZoomLevel(Math.max(50, zoomLevel - 25))}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium w-12 text-center">{zoomLevel}%</span>
            <Button size="sm" variant="outline" onClick={() => setZoomLevel(Math.min(200, zoomLevel + 25))}>
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
          
          {/* View Options */}
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={showLabels ? "default" : "outline"}
              onClick={() => setShowLabels(!showLabels)}
            >
              Show Labels
            </Button>
            <Button
              size="sm"
              variant={showMetrics ? "default" : "outline"}
              onClick={() => setShowMetrics(!showMetrics)}
            >
              Show Metrics
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg overflow-hidden">
            <svg 
              width="800" 
              height="600" 
              viewBox="0 0 800 600"
              style={{ transform: `scale(${zoomLevel / 100})` }}
              className="transition-transform duration-300"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="5"
                  orient="auto"
                  fill="#8B5CF6"
                >
                  <polygon points="0 0, 10 5, 0 10" />
                </marker>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Central Hub */}
              <g transform={`translate(${centerX}, ${centerY})`}>
                <circle cx="0" cy="0" r="80" fill="#8B5CF6" opacity="0.1" />
                <circle cx="0" cy="0" r="60" fill="#8B5CF6" opacity="0.2" />
                <circle cx="0" cy="0" r="40" fill="#8B5CF6" opacity="0.3" />
                <circle cx="0" cy="0" r="30" fill="#8B5CF6" stroke="#8B5CF6" strokeWidth="2" />
                <text y="8" textAnchor="middle" fill="#8B5CF6" fontWeight="bold" fontSize="12">
                  WingSpan
                </text>
                {showLabels && (
                  <text y="60" textAnchor="middle" fill="#6B7280" fontSize="14" fontWeight="500">
                    Integration Hub
                  </text>
                )}
              </g>
              
              {/* Integration Nodes */}
              {integrationNodes.map((node, index) => {
                const angle = (index / integrationNodes.length) * 2 * Math.PI;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                
                return (
                  <g key={node.id} transform={`translate(${x}, ${y})`}>
                    <circle
                      cx="0"
                      cy="0"
                      r="35"
                      fill="white"
                      stroke={node.connected ? '#10B981' : '#E5E7EB'}
                      strokeWidth="3"
                      filter={node.connected ? "url(#glow)" : "none"}
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="25"
                      fill={node.connected ? '#F3F4F6' : '#F9FAFB'}
                    />
                    <text
                      x="0"
                      y="5"
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="bold"
                      fill={node.connected ? '#1F2937' : '#9CA3AF'}
                    >
                      {node.name.substring(0, 4)}
                    </text>
                    
                    {showLabels && (
                      <text y="55" textAnchor="middle" fontSize="12" fill="#6B7280">
                        {node.name}
                      </text>
                    )}
                    
                    {showMetrics && node.connected && (
                      <g transform="translate(25, -25)">
                        <circle cx="0" cy="0" r="12" fill="#3B82F6" />
                        <text
                          x="0"
                          y="4"
                          textAnchor="middle"
                          fill="white"
                          fontSize="10"
                          fontWeight="bold"
                        >
                          {node.recordsToday}
                        </text>
                      </g>
                    )}
                    
                    {/* Data Flow Lines */}
                    {node.connected && (
                      <>
                        {(node.flowDirection === 'bidirectional' || node.flowDirection === 'in') && (
                          <line
                            x1={-x * 0.3}
                            y1={-y * 0.3}
                            x2={-x * 0.1}
                            y2={-y * 0.1}
                            stroke="#8B5CF6"
                            strokeWidth="2"
                            markerEnd="url(#arrowhead)"
                            opacity="0.8"
                          />
                        )}
                        {(node.flowDirection === 'bidirectional' || node.flowDirection === 'out') && (
                          <line
                            x1={x * 0.1}
                            y1={y * 0.1}
                            x2={x * 0.3}
                            y2={y * 0.3}
                            stroke="#3B82F6"
                            strokeWidth="2"
                            markerEnd="url(#arrowhead)"
                            opacity="0.8"
                          />
                        )}
                      </>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle>Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-purple-500" />
              <span className="text-sm">Incoming Data</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-blue-500" />
              <span className="text-sm">Outgoing Data</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-green-500 rounded-full" />
              <span className="text-sm">Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
              <span className="text-sm">Available</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
