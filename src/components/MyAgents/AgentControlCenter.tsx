
import React from "react";
import { Search, Grid3x3, List, BarChart3, Pause, Play, RefreshCw, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AgentControlCenterProps {
  selectedAgents: string[];
  view: string;
  onViewChange: (view: string) => void;
}

export function AgentControlCenter({ selectedAgents, view, onViewChange }: AgentControlCenterProps) {
  return (
    <div className="space-y-4">
      {/* Control Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search agents by name, type, or task..."
              className="pl-10 w-80"
            />
          </div>
          <select className="px-3 py-2 border border-input rounded-md bg-background text-sm">
            <option>All Agents</option>
            <option>Active Only</option>
            <option>Needs Attention</option>
            <option>High Performers</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border rounded-lg p-1">
            <Button
              variant={view === 'grid' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('grid')}
            >
              <Grid3x3 className="h-4 w-4" />
              Grid
            </Button>
            <Button
              variant={view === 'list' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('list')}
            >
              <List className="h-4 w-4" />
              List
            </Button>
            <Button
              variant={view === 'analytics' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('analytics')}
            >
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Button>
          </div>
          <select className="px-3 py-2 border border-input rounded-md bg-background text-sm">
            <option>Last Active</option>
            <option>Performance</option>
            <option>Tasks Completed</option>
            <option>ROI Generated</option>
          </select>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedAgents.length > 0 && (
        <div className="flex items-center justify-between p-4 bg-secondary/50 border border-border rounded-lg">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {selectedAgents.length} agents selected
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Pause className="h-4 w-4" />
              Pause
            </Button>
            <Button variant="ghost" size="sm">
              <Play className="h-4 w-4" />
              Resume
            </Button>
            <Button variant="ghost" size="sm">
              <RefreshCw className="h-4 w-4" />
              Restart
            </Button>
            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" />
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
