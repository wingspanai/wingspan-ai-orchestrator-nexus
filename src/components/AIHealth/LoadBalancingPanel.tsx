
import { Grid3x3 } from "lucide-react";

export function LoadBalancingPanel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Load Balancing</h3>
        <select className="text-sm border rounded px-2 py-1">
          <option>Round Robin</option>
          <option>Least Connections</option>
          <option>Weighted</option>
          <option>AI Optimized</option>
        </select>
      </div>
      
      <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center">
          <Grid3x3 className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">Load distribution visualization</p>
        </div>
      </div>
    </div>
  );
}
