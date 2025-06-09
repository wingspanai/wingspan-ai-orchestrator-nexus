
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Database, Zap } from "lucide-react";

interface DataSourceModalProps {
  show: boolean;
  onClose: () => void;
}

export const DataSourceModal = ({
  show,
  onClose
}: DataSourceModalProps) => {
  const [selectedType, setSelectedType] = useState("database");
  const [connectionString, setConnectionString] = useState("");
  const [testingConnection, setTestingConnection] = useState(false);

  const testConnection = async () => {
    setTestingConnection(true);
    // Simulate connection test
    await new Promise(resolve => setTimeout(resolve, 2000));
    setTestingConnection(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-background rounded-lg shadow-lg w-[600px] max-h-[80vh] overflow-auto">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold">Configure Data Source</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Data Source Type</h3>
            <div className="grid grid-cols-2 gap-3">
              <div
                className={`p-4 border rounded-lg cursor-pointer text-center ${
                  selectedType === 'database' ? 'border-primary bg-primary/5' : ''
                }`}
                onClick={() => setSelectedType('database')}
              >
                <Database className="h-8 w-8 mx-auto mb-2" />
                <div className="font-medium">Database</div>
                <div className="text-xs text-muted-foreground">Connect to SQL databases</div>
              </div>
              <div
                className={`p-4 border rounded-lg cursor-pointer text-center ${
                  selectedType === 'api' ? 'border-primary bg-primary/5' : ''
                }`}
                onClick={() => setSelectedType('api')}
              >
                <Zap className="h-8 w-8 mx-auto mb-2" />
                <div className="font-medium">API</div>
                <div className="text-xs text-muted-foreground">Connect to REST APIs</div>
              </div>
            </div>
          </div>

          {selectedType === 'database' && (
            <div className="space-y-4">
              <div>
                <Label>Database Type</Label>
                <select className="w-full p-2 border rounded">
                  <option value="postgresql">PostgreSQL</option>
                  <option value="mysql">MySQL</option>
                  <option value="mongodb">MongoDB</option>
                </select>
              </div>
              
              <div>
                <Label>Connection String</Label>
                <Input
                  type="password"
                  value={connectionString}
                  onChange={(e) => setConnectionString(e.target.value)}
                  placeholder="postgres://user:pass@host:port/db"
                />
              </div>
              
              <Button
                onClick={testConnection}
                disabled={!connectionString || testingConnection}
                variant="outline"
                className="w-full"
              >
                {testingConnection ? "Testing..." : "Test Connection"}
              </Button>
            </div>
          )}

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button className="flex-1">
              Save Data Source
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
