
import React from "react";
import { TrendingUp, Users, DollarSign, Package, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CategoryNavigationProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryNavigation({ selectedCategory, onCategoryChange }: CategoryNavigationProps) {
  const categories = [
    {
      id: "sales",
      name: "Sales & CRM",
      count: 25,
      icon: TrendingUp,
      gradient: "from-purple-500 to-blue-500",
      topAgents: ["Pipeline Optimizer", "Lead Scorer", "+23 more"],
      automationPercent: 68
    },
    {
      id: "hr",
      name: "HR & Talent",
      count: 18,
      icon: Users,
      gradient: "from-blue-500 to-teal-500",
      topAgents: ["Resume Screener", "Onboarding Bot", "+16 more"],
      automationPercent: 45
    },
    {
      id: "finance",
      name: "Finance",
      count: 22,
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-500",
      topAgents: ["Invoice Processor", "Expense Tracker", "+20 more"],
      automationPercent: 72
    },
    {
      id: "operations",
      name: "Operations",
      count: 28,
      icon: Package,
      gradient: "from-amber-500 to-orange-500",
      topAgents: ["Inventory Optimizer", "Quality Monitor", "+26 more"],
      automationPercent: 58
    },
    {
      id: "engineering",
      name: "IT & Engineering",
      count: 21,
      icon: Code,
      gradient: "from-indigo-500 to-purple-500",
      topAgents: ["Code Reviewer", "Deployment Bot", "+19 more"],
      automationPercent: 83
    }
  ];

  return (
    <div className="px-4 md:px-6 lg:px-8 py-12 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
          Browse by Department
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                selectedCategory === category.id
                  ? "ring-2 ring-purple-500 shadow-lg"
                  : ""
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <CardContent className="p-6">
                {/* Icon and Gradient Background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 mx-auto`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Category Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {category.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {category.count} agents
                  </Badge>
                </div>
                
                {/* Top Agents */}
                <div className="space-y-1 mb-4">
                  {category.topAgents.map((agent, index) => (
                    <div
                      key={index}
                      className={`text-xs px-2 py-1 rounded-md ${
                        index < 2
                          ? "bg-purple-100 text-purple-700"
                          : "text-text-secondary"
                      }`}
                    >
                      {agent}
                    </div>
                  ))}
                </div>
                
                {/* Automation Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-text-secondary">Automated</span>
                    <span className="font-medium text-text-primary">
                      {category.automationPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                      style={{ width: `${category.automationPercent}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
