
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TaskDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Sales & CRM</span>
              <span className="text-sm font-medium">45%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Customer Service</span>
              <span className="text-sm font-medium">32%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Finance</span>
              <span className="text-sm font-medium">23%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '23%' }}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
