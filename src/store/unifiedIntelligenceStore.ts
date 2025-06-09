
import { create } from 'zustand';
import { 
  ExecutiveMetric, 
  CategoryPerformance, 
  CriticalAlert, 
  StrategicOpportunity,
  PendingDecision,
  LiveMetric,
  PerformanceDimension,
  InsightShare,
  CompetitorMove,
  MarketTrend
} from '@/types/unifiedIntelligence';
import { DollarSign, Activity, Heart, Users, Trophy, Shield } from 'lucide-react';

interface UnifiedIntelligenceState {
  companyHealthScore: number;
  activeAgentsCount: number;
  insightsGenerated: string;
  executiveMetrics: ExecutiveMetric[];
  categoryPerformances: CategoryPerformance[];
  criticalAlerts: CriticalAlert[];
  strategicOpportunities: StrategicOpportunity[];
  pendingDecisions: PendingDecision[];
  liveMetrics: LiveMetric[];
  performanceDimensions: PerformanceDimension[];
  insightSharing: InsightShare[];
  competitorMoves: CompetitorMove[];
  marketTrends: MarketTrend[];
}

export const useUnifiedIntelligenceStore = create<UnifiedIntelligenceState>(() => ({
  companyHealthScore: 87.3,
  activeAgentsCount: 147,
  insightsGenerated: "1,247",
  
  executiveMetrics: [
    {
      title: "Revenue Performance",
      value: "$12.4M",
      target: "$11.8M",
      achievement: "105%",
      trend: "+18% YoY",
      icon: DollarSign,
      aiInsight: "3 upsell opportunities worth $1.2M identified"
    },
    {
      title: "Operational Efficiency",
      value: "94.2%",
      benchmark: "Industry: 78%",
      savings: "$2.3M/year",
      trend: "+12% QoQ",
      icon: Activity,
      aiInsight: "17 processes optimized by AI agents"
    },
    {
      title: "Customer Satisfaction",
      value: "92",
      percentile: "95th",
      trend: "+8 points",
      icon: Heart,
      aiInsight: "Churn risk decreased by 23%"
    },
    {
      title: "Employee Engagement",
      value: "8.7/10",
      benchmark: "Top quartile",
      retention: "94%",
      trend: "+0.5",
      icon: Users,
      aiInsight: "3 departments need attention"
    },
    {
      title: "Market Position",
      value: "#2",
      movement: "↑1",
      marketShare: "27%",
      trend: "+3% share",
      icon: Trophy,
      aiInsight: "Opportunity to capture #1 in Q2"
    },
    {
      title: "Risk Score",
      value: "Low",
      score: "23/100",
      issues: "3 medium",
      trend: "-15%",
      icon: Shield,
      aiInsight: "Supply chain risk emerging"
    }
  ],

  categoryPerformances: [
    {
      name: "Sales & CRM",
      agents: 24,
      insights: 342,
      topInsights: [
        "15% increase in qualified leads detected",
        "3 deals at risk - intervention recommended"
      ],
      activeAgents: [
        { name: "Lead Scorer", status: "active", impact: "high" },
        { name: "Deal Predictor", status: "active", impact: "critical" },
        { name: "Customer Sentiment", status: "active", impact: "high" }
      ]
    },
    {
      name: "Marketing",
      agents: 18,
      insights: 287,
      topInsights: [
        "Campaign ROI improved by 34%",
        "Content engagement up 47%"
      ],
      activeAgents: [
        { name: "Campaign Optimizer", status: "active", impact: "high" },
        { name: "SEO Analyzer", status: "active", impact: "medium" },
        { name: "Social Listener", status: "active", impact: "high" }
      ]
    },
    {
      name: "Operations",
      agents: 32,
      insights: 456,
      topInsights: [
        "Supply chain disruption predicted in 14 days",
        "Inventory optimization saved $340K"
      ],
      activeAgents: [
        { name: "Supply Chain Monitor", status: "alert", impact: "critical" },
        { name: "Quality Predictor", status: "active", impact: "high" },
        { name: "Capacity Planner", status: "active", impact: "medium" }
      ]
    },
    {
      name: "Finance",
      agents: 28,
      insights: 378,
      topInsights: [
        "Cash flow optimization improved by 18%",
        "3 cost reduction opportunities found"
      ],
      activeAgents: [
        { name: "Cash Flow Predictor", status: "active", impact: "critical" },
        { name: "Expense Analyzer", status: "active", impact: "high" },
        { name: "Revenue Forecaster", status: "active", impact: "critical" }
      ]
    },
    {
      name: "HR",
      agents: 21,
      insights: 198,
      topInsights: [
        "2 high-performers at flight risk",
        "Skills gap identified in engineering"
      ],
      activeAgents: [
        { name: "Retention Predictor", status: "alert", impact: "high" },
        { name: "Performance Analyzer", status: "active", impact: "medium" },
        { name: "Talent Scout", status: "active", impact: "medium" }
      ]
    }
  ],

  criticalAlerts: [
    {
      id: "1",
      agent: "Supply Chain Monitor",
      message: "70% probability of semiconductor shortage in next 14 days",
      severity: "critical",
      time: "2 min ago"
    },
    {
      id: "2",
      agent: "Retention Predictor",
      message: "Senior engineer showing 85% flight risk - immediate action needed",
      severity: "high",
      time: "5 min ago"
    },
    {
      id: "3",
      agent: "Market Analyzer",
      message: "Competitor price reduction detected - revenue impact estimated at $340K",
      severity: "high",
      time: "12 min ago"
    }
  ],

  strategicOpportunities: [
    {
      id: "1",
      title: "Enterprise Market Expansion",
      description: "Competitor weakness identified in enterprise segment with high switching probability",
      value: "$2.4M",
      impact: "high",
      agents: ["Market Analyzer", "Sales Predictor", "Customer Intelligence"],
      successFactors: [
        { name: "Product Feature Parity", achieved: true },
        { name: "Sales Team Training", achieved: false },
        { name: "Marketing Campaign", achieved: false }
      ],
      discovered: "2024-01-15",
      validated: "2024-01-18",
      decisionDue: "2024-01-25"
    },
    {
      id: "2",
      title: "Process Automation Initiative",
      description: "17 manual processes identified for automation with high ROI potential",
      value: "$1.8M",
      impact: "medium",
      agents: ["Process Optimizer", "Cost Analyzer", "Efficiency Monitor"],
      successFactors: [
        { name: "Technical Feasibility", achieved: true },
        { name: "Change Management", achieved: false },
        { name: "Budget Approval", achieved: true }
      ],
      discovered: "2024-01-12",
      validated: "2024-01-16",
      decisionDue: "2024-01-30"
    }
  ],

  pendingDecisions: [
    {
      id: "1",
      title: "Supply Chain Diversification Strategy",
      context: "Current supplier concentration poses risk. Multiple agents recommend diversification.",
      deadline: "2024-01-20",
      priority: "critical",
      stakeholders: [
        { name: "Operations", impact: "high" },
        { name: "Finance", impact: "medium" },
        { name: "Risk Management", impact: "high" }
      ],
      options: [
        {
          id: "1",
          name: "Aggressive Diversification",
          pros: ["Reduces risk significantly", "Better negotiating position"],
          cons: ["Higher short-term costs", "Complex management"],
          aiRecommendation: "Recommended - Risk reduction outweighs costs",
          recommendationStrength: "strong",
          supportingAgents: [
            { name: "Supply Chain Monitor", opinion: "Critical for risk mitigation" },
            { name: "Cost Analyzer", opinion: "Long-term savings justify investment" }
          ]
        }
      ]
    }
  ],

  liveMetrics: [
    {
      title: "Revenue Today",
      value: "$487,293",
      target: "$450,000",
      sparkline: [450, 465, 470, 485, 487],
      pace: "108% of target"
    },
    {
      title: "Active Users",
      value: "12,847",
      change: "+1,247",
      sparkline: [11600, 11800, 12200, 12600, 12847],
      peak: "14,232"
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      change: "+0.3%",
      sparkline: [3.2, 3.4, 3.5, 3.7, 3.8],
      benchmark: "Industry: 2.9%"
    },
    {
      title: "Support Tickets",
      value: "47",
      change: "-12",
      sparkline: [65, 59, 54, 51, 47],
      resolution: "Avg: 1.2hrs"
    }
  ],

  performanceDimensions: [
    { name: "Revenue Growth", score: 87, target: 85 },
    { name: "Profitability", score: 82, target: 80 },
    { name: "Customer Satisfaction", score: 92, target: 90 },
    { name: "Market Share", score: 78, target: 85 },
    { name: "Innovation", score: 85, target: 80 },
    { name: "Operational Efficiency", score: 94, target: 85 },
    { name: "Employee Engagement", score: 87, target: 85 },
    { name: "Risk Management", score: 89, target: 90 }
  ],

  insightSharing: [
    {
      id: "1",
      from: "Sales",
      to: "Marketing",
      insight: "Customer feedback indicates need for security features",
      impact: "High"
    },
    {
      id: "2",
      from: "Operations",
      to: "Finance",
      insight: "Process automation will reduce costs by 23%",
      impact: "Medium"
    }
  ],

  competitorMoves: [
    {
      id: "1",
      competitor: "TechCorp",
      action: "New product launch in enterprise segment",
      probability: 87,
      impact: "high"
    },
    {
      id: "2",
      competitor: "InnovateCo",
      action: "Price reduction on core offering",
      probability: 72,
      impact: "medium"
    }
  ],

  marketTrends: [
    {
      id: "1",
      name: "AI-Powered Automation",
      strength: 89,
      timeToMainstream: "6-12 months",
      opportunity: 94
    },
    {
      id: "2",
      name: "Remote-First Operations",
      strength: 76,
      timeToMainstream: "Already mainstream",
      opportunity: 67
    }
  ]
}));
