
export interface PluginManifest {
  id: string;
  name: string;
  version: string;
  description: string;
  author: string;
  category: 'data-pipeline' | 'ai-engine' | 'workflow' | 'notification' | 'integration' | 'analytics';
  permissions: string[];
  dependencies: string[];
  hooks: string[];
  endpoints?: PluginEndpoint[];
}

export interface PluginEndpoint {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  handler: string;
  permissions?: string[];
}

export interface PluginHook {
  name: string;
  type: 'lifecycle' | 'data' | 'ui';
  callback: (context: PluginContext) => Promise<any>;
}

export interface PluginContext {
  productId?: string;
  userId: string;
  data?: any;
  metadata?: Record<string, any>;
}

export interface Plugin {
  manifest: PluginManifest;
  hooks: PluginHook[];
  isActive: boolean;
  configuration: Record<string, any>;
  sandboxed: boolean;
}

export interface DataTransformer {
  id: string;
  name: string;
  input: any;
  output: any;
  transform: (data: any) => any;
}

export interface WorkflowTrigger {
  id: string;
  type: 'schedule' | 'event' | 'webhook' | 'manual';
  condition: any;
  config: Record<string, any>;
}

export interface WorkflowAction {
  id: string;
  type: 'notification' | 'data-update' | 'api-call' | 'email' | 'webhook';
  config: Record<string, any>;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  trigger: WorkflowTrigger;
  conditions: any[];
  actions: WorkflowAction[];
  isActive: boolean;
  schedule?: string;
  history: Array<{
    executedAt: Date;
    status: 'success' | 'failed' | 'partial';
    results: any;
  }>;
}
