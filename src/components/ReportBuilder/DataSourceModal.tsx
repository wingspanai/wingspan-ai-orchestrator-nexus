
import React, { useState } from "react";
import { X, Database, Globe, FileText, Plug, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface DataSourceModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (dataSource: any) => void;
}

export function DataSourceModal({ show, onClose, onSave }: DataSourceModalProps) {
  const [selectedSourceType, setSelectedSourceType] = useState("");
  const [connectionString, setConnectionString] = useState("");
  const [dbType, setDbType] = useState("");
  const [connectionSuccess, setConnectionSuccess] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  const sourceTypes = [
    {
      id: "database",
      name: "Database",
      description: "Connect to SQL databases",
      icon: Database
    },
    {
      id: "api",
      name: "API",
      description: "Connect to REST APIs",
      icon: Globe
    },
    {
      id: "file",
      name: "File Upload",
      description: "CSV, Excel, JSON files",
      icon: FileText
    },
    {
      id: "integration",
      name: "Integration",
      description: "Connected systems",
      icon: Plug
    }
  ];

  const availableTables = ["customers", "orders", "products", "sales"];
  const tableFields = [
    { name: "id", type: "INTEGER" },
    { name: "name", type: "VARCHAR" },
    { name: "email", type: "VARCHAR" },
    { name: "created_at", type: "TIMESTAMP" },
    { name: "total_amount", type: "DECIMAL" }
  ];

  const testConnection = () => {
    // Simulate connection test
    setTimeout(() => {
      setConnectionSuccess(true);
    }, 1500);
  };

  const toggleField = (fieldName: string) => {
    setSelectedFields(prev => 
      prev.includes(fieldName) 
        ? prev.filter(f => f !== fieldName)
        : [...prev, fieldName]
    );
  };

  const handleSave = () => {
    const dataSource = {
      type: selectedSourceType,
      connection: connectionString,
      table: selectedTable,
      fields: selectedFields
    };
    onSave(dataSource);
  };

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Configure Data Source</DialogTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="absolute right-4 top-4">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Source Type Selection */}
          <div>
            <Label className="text-base font-medium">Select Data Source Type</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
              {sourceTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all ${
                    selectedSourceType === type.id
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedSourceType(type.id)}
                >
                  <CardContent className="p-4 text-center">
                    <type.icon className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                    <h3 className="font-medium text-sm">{type.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Database Configuration */}
          {selectedSourceType === "database" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dbType">Database Type</Label>
                  <Select value={dbType} onValueChange={setDbType}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select database type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="postgresql">PostgreSQL</SelectItem>
                      <SelectItem value="mysql">MySQL</SelectItem>
                      <SelectItem value="mongodb">MongoDB</SelectItem>
                      <SelectItem value="sqlserver">SQL Server</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="connectionString">Connection String</Label>
                  <Input
                    id="connectionString"
                    type="password"
                    value={connectionString}
                    onChange={(e) => setConnectionString(e.target.value)}
                    placeholder="postgres://user:pass@host:port/db"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <Button onClick={testConnection} disabled={!connectionString || !dbType}>
                <Zap className="h-4 w-4 mr-2" />
                Test Connection
              </Button>

              {connectionSuccess && (
                <div className="space-y-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Connection successful!
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="table">Select Table</Label>
                      <Select value={selectedTable} onValueChange={setSelectedTable}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choose a table" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableTables.map(table => (
                            <SelectItem key={table} value={table}>{table}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedTable && (
                      <div>
                        <Label>Select Fields</Label>
                        <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                          {tableFields.map(field => (
                            <div key={field.name} className="flex items-center space-x-2">
                              <Checkbox
                                id={field.name}
                                checked={selectedFields.includes(field.name)}
                                onCheckedChange={() => toggleField(field.name)}
                              />
                              <label htmlFor={field.name} className="text-sm font-medium flex-1">
                                {field.name}
                              </label>
                              <span className="text-xs text-gray-500">{field.type}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* API Configuration */}
          {selectedSourceType === "api" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="apiUrl">API Endpoint URL</Label>
                <Input
                  id="apiUrl"
                  placeholder="https://api.example.com/data"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="apiKey">API Key</Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="Enter your API key"
                  className="mt-1"
                />
              </div>
            </div>
          )}

          {/* File Upload Configuration */}
          {selectedSourceType === "file" && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drag and drop your file here, or click to browse</p>
                <p className="text-sm text-gray-500">Supports CSV, Excel, and JSON files up to 10MB</p>
                <Button variant="outline" className="mt-4">
                  Choose File
                </Button>
              </div>
            </div>
          )}

          {/* Data Preview */}
          {connectionSuccess && selectedFields.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Data Preview</Label>
                <Button size="sm" variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b">
                  <div className="grid grid-cols-4 gap-4 text-sm font-medium">
                    {selectedFields.slice(0, 4).map(field => (
                      <div key={field}>{field}</div>
                    ))}
                  </div>
                </div>
                <div className="divide-y">
                  {[1, 2, 3].map(row => (
                    <div key={row} className="px-4 py-2">
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>Sample data {row}</div>
                        <div>Value {row}</div>
                        <div>2024-01-{row}</div>
                        <div>$1,{row}00.00</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Total Rows: 1,247</span>
                <span>Columns: {selectedFields.length}</span>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button 
            onClick={handleSave} 
            disabled={!selectedSourceType || (selectedSourceType === "database" && (!connectionSuccess || selectedFields.length === 0))}
          >
            Save Data Source
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
