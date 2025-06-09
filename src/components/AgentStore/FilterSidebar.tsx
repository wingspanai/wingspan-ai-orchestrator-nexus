
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function FilterSidebar() {
  const departments = [
    { id: "sales", label: "Sales & CRM", count: 25 },
    { id: "hr", label: "HR & Talent", count: 18 },
    { id: "finance", label: "Finance", count: 22 },
    { id: "operations", label: "Operations", count: 28 },
    { id: "customer", label: "Customer Service", count: 19 }
  ];

  const integrations = [
    { id: "salesforce", label: "Salesforce", count: 15 },
    { id: "hubspot", label: "HubSpot", count: 12 },
    { id: "slack", label: "Slack", count: 34 },
    { id: "microsoft", label: "Microsoft 365", count: 28 },
    { id: "google", label: "Google Workspace", count: 26 }
  ];

  const complexityLevels = [
    { id: "oneclick", label: "One-Click Deploy", count: 89 },
    { id: "minimal", label: "Minimal Config", count: 43 },
    { id: "moderate", label: "Moderate Setup", count: 18 }
  ];

  return (
    <div className="space-y-6">
      {/* Department Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Department</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {departments.map((dept) => (
            <div key={dept.id} className="flex items-center space-x-2">
              <Checkbox id={dept.id} />
              <Label 
                htmlFor={dept.id} 
                className="text-sm text-text-secondary cursor-pointer flex-1"
              >
                {dept.label}
              </Label>
              <span className="text-xs text-text-muted">
                {dept.count}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Integration Required */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Integration Required</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {integrations.map((integration) => (
            <div key={integration.id} className="flex items-center space-x-2">
              <Checkbox id={integration.id} />
              <Label 
                htmlFor={integration.id} 
                className="text-sm text-text-secondary cursor-pointer flex-1"
              >
                {integration.label}
              </Label>
              <span className="text-xs text-text-muted">
                {integration.count}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Time to Value */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Time to Value</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {["< 1 hour", "< 1 day", "< 1 week", "< 1 month"].map((timeframe, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                id={`time-${index}`}
                name="timeToValue"
                className="w-4 h-4 text-purple-600"
              />
              <Label 
                htmlFor={`time-${index}`} 
                className="text-sm text-text-secondary cursor-pointer"
              >
                {timeframe}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Deployment Complexity */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Deployment Complexity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {complexityLevels.map((level) => (
            <div key={level.id} className="flex items-center space-x-2">
              <Checkbox id={level.id} />
              <Label 
                htmlFor={level.id} 
                className="text-sm text-text-secondary cursor-pointer flex-1"
              >
                {level.label}
              </Label>
              <span className="text-xs text-text-muted">
                {level.count}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
