
import React from "react";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface AgentConfigurationPanelProps {
  agent: any;
  show: boolean;
  onClose: () => void;
}

export function AgentConfigurationPanel({ agent, show, onClose }: AgentConfigurationPanelProps) {
  if (!agent) return null;

  return (
    <Sheet open={show} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onClose}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg ai-gradient">
                <span className="text-white text-xs">AI</span>
              </div>
              <div>
                <SheetTitle>{agent.name}</SheetTitle>
                <p className="text-sm text-muted-foreground">{agent.status}</p>
              </div>
            </div>
            <Button size="sm" className="ml-auto">
              <Save className="h-4 w-4" />
              Save
            </Button>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* General Settings */}
          <div className="space-y-4">
            <h3 className="font-medium">General Settings</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name">Agent Name</Label>
              <Input id="name" value={agent.name} />
              <p className="text-xs text-muted-foreground">Display name for this agent instance</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" rows={3} placeholder="Agent description..." />
            </div>

            <div className="space-y-3">
              <Label>Autonomy Level</Label>
              <Slider defaultValue={[3]} max={5} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Manual</span>
                <span>Assisted</span>
                <span>Supervised</span>
                <span>Autonomous</span>
                <span>Full Auto</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Level 3: Supervised - Agent acts autonomously but requires approval for critical actions
              </p>
            </div>
          </div>

          {/* Notifications */}
          <div className="space-y-4">
            <h3 className="font-medium">Notifications</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email notifications for errors</p>
                  <p className="text-sm text-muted-foreground">Get notified when errors occur</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Daily performance summary</p>
                  <p className="text-sm text-muted-foreground">Daily email with performance metrics</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Real-time alerts</p>
                  <p className="text-sm text-muted-foreground">Instant notifications for critical events</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          {/* Permissions */}
          <div className="space-y-4">
            <h3 className="font-medium">Data Access Permissions</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Read Customer Data</p>
                  <p className="text-sm text-muted-foreground">Access to customer records and history</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Modify Customer Data</p>
                  <p className="text-sm text-muted-foreground">Update customer information and records</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Send Emails</p>
                  <p className="text-sm text-muted-foreground">Send emails on behalf of users</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Create Tasks</p>
                  <p className="text-sm text-muted-foreground">Create and assign tasks to team members</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
