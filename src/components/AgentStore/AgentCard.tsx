
import React from "react";
import { TrendingUp, Users, DollarSign, CheckCircle, Star, Clock, Zap, Heart, Loader } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Agent {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
  deployments: string;
  rating: number;
  setupTime: string;
  integrations: string[];
  gradient: string;
}

interface AgentCardProps {
  agent: Agent;
  viewMode: "grid" | "list";
  isDeploying: boolean;
  onDeploy: () => void;
}

export function AgentCard({ agent, viewMode, isDeploying, onDeploy }: AgentCardProps) {
  const getIcon = (iconName: string) => {
    const icons = {
      TrendingUp,
      Users,
      DollarSign
    };
    return icons[iconName as keyof typeof icons] || TrendingUp;
  };

  const IconComponent = getIcon(agent.icon);

  return (
    <Card className={`group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
      viewMode === "list" ? "flex" : ""
    } ${isDeploying ? "ring-2 ring-purple-500 shadow-lg" : ""}`}>
      {/* Card Header */}
      <CardHeader className={viewMode === "list" ? "flex-shrink-0 w-20" : ""}>
        <div className="flex items-start justify-between">
          <div className={`flex items-center gap-3 ${viewMode === "list" ? "flex-col" : ""}`}>
            <div className={`p-3 rounded-xl bg-gradient-to-br ${agent.gradient} group-hover:scale-110 transition-transform`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            {viewMode === "grid" && (
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-purple-600 transition-colors">
                  {agent.name}
                </h3>
                <Badge variant="outline" className="text-xs mt-1">
                  {agent.category}
                </Badge>
              </div>
            )}
          </div>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      {/* Card Content */}
      <CardContent className={`flex-1 ${viewMode === "list" ? "py-6" : ""}`}>
        {viewMode === "list" && (
          <div className="mb-3">
            <h3 className="font-semibold text-text-primary group-hover:text-purple-600 transition-colors">
              {agent.name}
            </h3>
            <Badge variant="outline" className="text-xs mt-1">
              {agent.category}
            </Badge>
          </div>
        )}

        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {agent.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {agent.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-4 mb-4 ${viewMode === "list" ? "w-64" : ""}`}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users className="w-3 h-3 text-gray-400" />
              <span className="text-xs font-medium text-text-primary">
                {agent.deployments}
              </span>
            </div>
            <span className="text-xs text-text-secondary">Deployments</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-medium text-text-primary">
                {agent.rating}
              </span>
            </div>
            <span className="text-xs text-text-secondary">Rating</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-xs font-medium text-text-primary">
                {agent.setupTime}
              </span>
            </div>
            <span className="text-xs text-text-secondary">Setup</span>
          </div>
        </div>

        {/* Required Integrations */}
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.integrations.map((integration, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {integration}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className={`space-y-2 ${viewMode === "list" ? "flex-shrink-0 w-48 flex-col" : ""}`}>
        <Button
          onClick={onDeploy}
          disabled={isDeploying}
          className={`w-full ai-gradient text-white hover:ai-gradient-hover ${
            isDeploying ? "opacity-75" : ""
          }`}
        >
          {isDeploying ? (
            <>
              <Loader className="w-4 h-4 mr-2 animate-spin" />
              Deploying...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              Deploy Now
            </>
          )}
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
