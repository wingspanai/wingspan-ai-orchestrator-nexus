
import React from "react";
import { Search, Zap, Star, TrendingUp, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface StoreHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function StoreHeader({ searchQuery, onSearchChange }: StoreHeaderProps) {
  const stats = [
    { value: "150+", label: "Pre-built Agents" },
    { value: "48,293", label: "Deployments" },
    { value: "$2.4M", label: "Monthly Savings" },
    { value: "< 60s", label: "Avg Deploy Time" }
  ];

  const quickFilters = [
    { icon: Zap, label: "Quick Deploy" },
    { icon: Star, label: "Most Popular" },
    { icon: TrendingUp, label: "High ROI" },
    { icon: Clock, label: "New This Week" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30" />
      
      <div className="relative px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 animate-fade-in">
            Deploy Enterprise AI in{" "}
            <span className="text-gradient">60 Seconds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            150+ pre-built agents ready to augment your teams.<br />
            No coding. No configuration. Just results.
          </p>
          
          {/* Search Container */}
          <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search agents or describe what you need to automate..."
                className="pl-12 pr-20 py-4 text-lg bg-background/90 backdrop-blur-sm border-2 border-border/50 rounded-xl focus:border-purple-500/50 focus:ring-purple-500/25"
              />
              <Badge className="absolute right-2 top-1/2 transform -translate-y-1/2 ai-gradient text-white">
                AI-Powered
              </Badge>
            </div>
          </div>
          
          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {quickFilters.map((filter, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 bg-background/50 backdrop-blur-sm border-border/50 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.label}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Store Stats */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 animate-fade-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
