
import React, { useState } from "react";
import { AgentCard } from "./AgentCard";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface AgentGridProps {
  viewMode: "grid" | "list";
  searchQuery: string;
  selectedCategory: string;
  sortBy: string;
}

export function AgentGrid({ viewMode, searchQuery, selectedCategory, sortBy }: AgentGridProps) {
  const [deployingAgents, setDeployingAgents] = useState<Set<string>>(new Set());

  // Mock agent data
  const agents = [
    {
      id: "1",
      name: "Sales Pipeline Optimizer",
      category: "Sales & CRM",
      description: "Analyzes your sales pipeline to identify bottlenecks, predict deal outcomes, and recommend actions to increase win rates.",
      icon: "TrendingUp",
      features: [
        "Predictive deal scoring",
        "Pipeline bottleneck detection",
        "Automated follow-up recommendations"
      ],
      deployments: "2,847",
      rating: 4.8,
      setupTime: "< 5 min",
      integrations: ["Salesforce", "HubSpot"],
      gradient: "from-purple-500 to-blue-500"
    },
    {
      id: "2",
      name: "Customer Support AI",
      category: "Customer Service",
      description: "Provides instant responses to customer inquiries, escalates complex issues, and maintains high satisfaction scores.",
      icon: "Users",
      features: [
        "24/7 instant responses",
        "Smart issue routing",
        "Sentiment analysis"
      ],
      deployments: "1,923",
      rating: 4.9,
      setupTime: "< 2 min",
      integrations: ["Zendesk", "Intercom"],
      gradient: "from-blue-500 to-teal-500"
    },
    {
      id: "3",
      name: "Invoice Processing Bot",
      category: "Finance",
      description: "Automatically processes invoices, extracts key data, validates information, and routes for approval.",
      icon: "DollarSign",
      features: [
        "OCR data extraction",
        "Automated validation",
        "Approval workflow"
      ],
      deployments: "1,654",
      rating: 4.7,
      setupTime: "< 10 min",
      integrations: ["QuickBooks", "SAP"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: "4",
      name: "HR Onboarding Assistant",
      category: "HR & Talent",
      description: "Streamlines employee onboarding with automated document collection, training schedules, and progress tracking.",
      icon: "Users",
      features: [
        "Document automation",
        "Training coordination",
        "Progress tracking"
      ],
      deployments: "987",
      rating: 4.6,
      setupTime: "< 15 min",
      integrations: ["Workday", "BambooHR"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const handleDeploy = async (agentId: string) => {
    setDeployingAgents(prev => new Set(prev).add(agentId));
    
    // Simulate deployment
    setTimeout(() => {
      setDeployingAgents(prev => {
        const newSet = new Set(prev);
        newSet.delete(agentId);
        return newSet;
      });
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Agent Grid */}
      <div className={`grid gap-6 ${
        viewMode === "grid" 
          ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
          : "grid-cols-1"
      }`}>
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            viewMode={viewMode}
            isDeploying={deployingAgents.has(agent.id)}
            onDeploy={() => handleDeploy(agent.id)}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="px-8">
          Load More Agents
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
