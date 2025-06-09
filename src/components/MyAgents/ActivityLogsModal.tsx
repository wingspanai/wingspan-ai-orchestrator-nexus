
import React from "react";
import { X, Copy, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ActivityLogsModalProps {
  agent: any;
  show: boolean;
  onClose: () => void;
}

export function ActivityLogsModal({ agent, show, onClose }: ActivityLogsModalProps) {
  if (!agent) return null;

  // Mock log data
  const logs = [
    {
      id: '1',
      timestamp: new Date(),
      type: 'action',
      message: 'Successfully processed 23 deals in sales pipeline',
      metadata: { deals: 23, value: '$280K' }
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 300000),
      type: 'info',
      message: 'Generated weekly forecast report',
      metadata: { report_id: 'WF_2024_06_09' }
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 600000),
      type: 'warning',
      message: 'API rate limit approaching for Salesforce integration',
      metadata: { usage: '85%', limit: '2000/hour' }
    },
    {
      id: '4',
      timestamp: new Date(Date.now() - 900000),
      type: 'action',
      message: 'Updated lead scores for 156 prospects',
      metadata: { prospects: 156, avg_score_change: '+12%' }
    }
  ];

  const formatTimestamp = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getLogTypeColor = (type: string) => {
    switch (type) {
      case 'action': return 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300';
      case 'warning': return 'bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300';
      case 'error': return 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300';
      case 'info': return 'bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300';
      default: return 'bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg ai-gradient">
                <span className="text-white text-xs">AI</span>
              </div>
              <div>
                <DialogTitle>Agent Activity Logs</DialogTitle>
                <p className="text-sm text-muted-foreground">{agent.name}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Log Filters */}
        <div className="flex items-center gap-4 py-4 border-b border-border">
          <Input placeholder="Search logs..." className="max-w-sm" />
          <div className="flex items-center gap-2">
            <Badge variant="outline">All</Badge>
            <Badge variant="outline">Actions</Badge>
            <Badge variant="outline">Errors</Badge>
            <Badge variant="outline">Warnings</Badge>
          </div>
        </div>

        {/* Logs Container */}
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted/50">
              <div className="text-xs text-muted-foreground min-w-fit">
                {formatTimestamp(log.timestamp)}
              </div>
              
              <Badge className={getLogTypeColor(log.type)} variant="outline">
                {log.type}
              </Badge>
              
              <div className="flex-1">
                <p className="text-sm">{log.message}</p>
                {log.metadata && (
                  <div className="mt-2 space-y-1">
                    {Object.entries(log.metadata).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-medium">{key}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm">
                  <Copy className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Eye className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export Logs
          </Button>
          <p className="text-sm text-muted-foreground">
            Showing {logs.length} of {logs.length} logs
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
