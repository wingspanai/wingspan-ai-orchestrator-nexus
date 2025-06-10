
import { create } from 'zustand';

export interface PredictionEngine {
  id: string;
  name: string;
  accuracy: number;
  targetAccuracy: [number, number];
  deviation: number;
  status: 'active' | 'optimizing' | 'learning' | 'maintenance';
  lastPrediction: string;
  confidenceLevel: number;
  predictionsToday: number;
  businessImpact: string;
  recommendedAction: string;
  actionPriority: 'critical' | 'high' | 'medium' | 'low';
  howItWorks: string;
  keyFactors: string[];
  businessValue: string;
  realTimeData: number[];
}

export interface ExpertFramework {
  expert: string;
  framework: string;
  integrationStatus: 'active' | 'optimizing' | 'inactive';
  contributionScore: number;
  businessApplication: string;
}

export interface ActionableInsight {
  title: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  impact: string;
  action: string;
  timeframe: string;
  confidence: number;
  source: string;
  potentialRevenue: string;
}

interface GeniusState {
  overallAccuracy: number;
  totalPredictions: string;
  activeEngines: number;
  systemHealth: number;
  predictionEngines: PredictionEngine[];
  expertFrameworks: ExpertFramework[];
  accuracyTrend: number[];
  confidenceTrend: number[];
  actionableInsights: ActionableInsight[];
  dailyRevenuImpact: string;
  riskMitigated: string;
  opportunitiesIdentified: number;
}

export const useGeniusStore = create<GeniusState>(() => ({
  overallAccuracy: 94.2,
  totalPredictions: "1,247,583",
  activeEngines: 10,
  systemHealth: 98.7,
  dailyRevenuImpact: "$847K",
  riskMitigated: "$2.3M",
  opportunitiesIdentified: 23,
  
  predictionEngines: [
    {
      id: "clv-prophet",
      name: "Customer Value Predictor",
      accuracy: 93.5,
      targetAccuracy: [92, 95],
      deviation: 3,
      status: "active",
      lastPrediction: "$47,293 CLV",
      confidenceLevel: 94,
      predictionsToday: 1247,
      businessImpact: "Identifies high-value customers likely to generate $47K+ lifetime value",
      recommendedAction: "Focus sales efforts on 147 identified high-CLV prospects",
      actionPriority: "high",
      howItWorks: "Analyzes purchase patterns, engagement data, and behavioral psychology to predict long-term customer value",
      keyFactors: ["Purchase frequency", "Average order value", "Engagement level", "Support interactions"],
      businessValue: "Increase revenue efficiency by 34% through targeted customer acquisition",
      realTimeData: [91, 92, 93, 94, 93.5, 94, 93.5]
    },
    {
      id: "churn-predictor",
      name: "Customer Retention Predictor",
      accuracy: 95.8,
      targetAccuracy: [94, 97],
      deviation: 2,
      status: "active",
      lastPrediction: "3.2% Churn Risk",
      confidenceLevel: 97,
      predictionsToday: 2156,
      businessImpact: "234 customers at high risk of churning within 30 days",
      recommendedAction: "Launch targeted retention campaign for at-risk customers",
      actionPriority: "critical",
      howItWorks: "Monitors usage patterns, support tickets, billing behavior, and engagement to predict churn probability",
      keyFactors: ["Usage decline", "Support frequency", "Payment delays", "Feature adoption"],
      businessValue: "Prevent $890K in lost revenue through proactive retention",
      realTimeData: [94, 95, 96, 95.8, 96.1, 95.8, 95.8]
    },
    {
      id: "demand-forecaster",
      name: "Demand Forecaster",
      accuracy: 94.1,
      targetAccuracy: [92, 95],
      deviation: 3,
      status: "active",
      lastPrediction: "127K units",
      confidenceLevel: 95,
      predictionsToday: 1543,
      businessImpact: "Predict 27% increase in demand next month",
      recommendedAction: "Increase inventory by 127K units to avoid stockouts",
      actionPriority: "high",
      howItWorks: "Combines historical sales, market trends, seasonality, and external factors to forecast demand",
      keyFactors: ["Historical sales", "Market trends", "Seasonality", "Economic indicators"],
      businessValue: "Optimize inventory and prevent $1.2M in lost sales",
      realTimeData: [92, 93, 94, 94.1, 94.8, 94.1, 94.1]
    },
    {
      id: "sales-optimizer",
      name: "Sales Performance Optimizer",
      accuracy: 92.9,
      targetAccuracy: [91, 94],
      deviation: 4,
      status: "optimizing",
      lastPrediction: "+34% Velocity",
      confidenceLevel: 93,
      predictionsToday: 1876,
      businessImpact: "Sales velocity can increase by 34% with process optimization",
      recommendedAction: "Implement suggested sales process changes for 3 underperforming reps",
      actionPriority: "medium",
      howItWorks: "Analyzes sales rep performance, pipeline health, and conversion patterns to optimize sales velocity",
      keyFactors: ["Rep performance", "Pipeline health", "Conversion rates", "Deal size"],
      businessValue: "Accelerate revenue by $450K per quarter",
      realTimeData: [90, 91, 92, 92.9, 93.2, 92.9, 92.9]
    },
    {
      id: "market-sentiment",
      name: "Market Intelligence Engine",
      accuracy: 92.1,
      targetAccuracy: [91, 94],
      deviation: 4,
      status: "active",
      lastPrediction: "Bullish (+0.73)",
      confidenceLevel: 91,
      predictionsToday: 3421,
      businessImpact: "Market sentiment turning positive - opportunity window opening",
      recommendedAction: "Launch marketing campaign within 2 weeks to capitalize on positive sentiment",
      actionPriority: "high",
      howItWorks: "Monitors social media, news, and market signals to predict sentiment shifts and market opportunities",
      keyFactors: ["Social sentiment", "News coverage", "Market indicators", "Competitor activity"],
      businessValue: "Capture 15% more market share during positive sentiment window",
      realTimeData: [89, 91, 92, 91.5, 92.1, 93, 92.1]
    },
    {
      id: "pricing-optimizer",
      name: "Revenue Optimization Engine",
      accuracy: 95.2,
      targetAccuracy: [93, 96],
      deviation: 3,
      status: "active",
      lastPrediction: "$2.3M Optimized",
      confidenceLevel: 96,
      predictionsToday: 1234,
      businessImpact: "Price optimization can increase revenue by $2.3M annually",
      recommendedAction: "Implement dynamic pricing for Product Line A (8% price increase)",
      actionPriority: "high",
      howItWorks: "Uses behavioral economics and market analysis to find optimal pricing that maximizes revenue without hurting demand",
      keyFactors: ["Price elasticity", "Competitor pricing", "Customer segments", "Market positioning"],
      businessValue: "Increase profit margins by 12% through optimized pricing",
      realTimeData: [93, 94, 95, 95.2, 95.8, 95.2, 95.2]
    },
    {
      id: "competitive-intel",
      name: "Competitive Intelligence",
      accuracy: 91.4,
      targetAccuracy: [90, 93],
      deviation: 4,
      status: "active",
      lastPrediction: "Competitor Launch",
      confidenceLevel: 92,
      predictionsToday: 756,
      businessImpact: "Competitor launching similar product in 6 weeks",
      recommendedAction: "Accelerate product roadmap and launch competitive response",
      actionPriority: "critical",
      howItWorks: "Monitors competitor activities, patent filings, job postings, and market movements to predict competitive threats",
      keyFactors: ["Competitor activity", "Market positioning", "Product development", "Pricing moves"],
      businessValue: "Maintain market position and prevent 8% market share loss",
      realTimeData: [89, 90, 91, 91.4, 92.1, 91.4, 91.4]
    },
    {
      id: "product-fit",
      name: "Product-Market Fit Analyzer",
      accuracy: 94.7,
      targetAccuracy: [93, 96],
      deviation: 3,
      status: "active",
      lastPrediction: "87% PMF Score",
      confidenceLevel: 96,
      predictionsToday: 892,
      businessImpact: "Product-market fit at 87% - ready for growth investment",
      recommendedAction: "Increase marketing spend by 40% to capitalize on strong PMF",
      actionPriority: "high",
      howItWorks: "Measures customer satisfaction, retention, and growth metrics to determine if product meets market needs",
      keyFactors: ["Customer satisfaction", "Retention rates", "Growth metrics", "Market feedback"],
      businessValue: "Scale efficiently with confident 3x growth potential",
      realTimeData: [93, 94, 95, 94.7, 95.2, 94.7, 94.7]
    },
    {
      id: "behavior-analyzer",
      name: "Customer Behavior Insights",
      accuracy: 90.6,
      targetAccuracy: [89, 92],
      deviation: 5,
      status: "learning",
      lastPrediction: "7 Clusters Identified",
      confidenceLevel: 89,
      predictionsToday: 2847,
      businessImpact: "Identified 3 high-value customer segments for targeted campaigns",
      recommendedAction: "Create personalized campaigns for Premium, Family, and Enterprise segments",
      actionPriority: "medium",
      howItWorks: "Groups customers by behavior patterns and predicts what drives purchases and engagement",
      keyFactors: ["Purchase patterns", "Usage behavior", "Engagement preferences", "Demographics"],
      businessValue: "Increase conversion rates by 25% through personalization",
      realTimeData: [88, 89, 90, 90.6, 91.2, 90.6, 90.6]
    },
    {
      id: "scenario-planner",
      name: "Strategic Scenario Planner",
      accuracy: 93.3,
      targetAccuracy: [91, 94],
      deviation: 4,
      status: "active",
      lastPrediction: "23 Scenarios",
      confidenceLevel: 94,
      predictionsToday: 432,
      businessImpact: "Economic downturn scenario shows 15% revenue risk",
      recommendedAction: "Develop contingency plan for economic uncertainty",
      actionPriority: "medium",
      howItWorks: "Models various business scenarios to help plan for different market conditions and strategic decisions",
      keyFactors: ["Market conditions", "Economic indicators", "Competitive landscape", "Internal capabilities"],
      businessValue: "Reduce strategic risk and improve decision making confidence",
      realTimeData: [91, 92, 93, 93.3, 93.9, 93.3, 93.3]
    }
  ],

  expertFrameworks: [
    { 
      expert: "Eric Siegel", 
      framework: "Predictive Analytics", 
      integrationStatus: "active", 
      contributionScore: 94,
      businessApplication: "Core prediction methodology for all customer-focused engines"
    },
    { 
      expert: "Richard Thaler", 
      framework: "Behavioral Economics", 
      integrationStatus: "active", 
      contributionScore: 96,
      businessApplication: "Customer psychology insights for pricing and retention predictions"
    },
    { 
      expert: "Michael Porter", 
      framework: "Five Forces Analysis", 
      integrationStatus: "active", 
      contributionScore: 93,
      businessApplication: "Competitive intelligence and market positioning strategies"
    },
    { 
      expert: "Daniel Kahneman", 
      framework: "Prospect Theory", 
      integrationStatus: "optimizing", 
      contributionScore: 88,
      businessApplication: "Decision-making bias analysis for customer behavior prediction"
    },
    { 
      expert: "Alex Hormozi", 
      framework: "Value Equation", 
      integrationStatus: "active", 
      contributionScore: 97,
      businessApplication: "Product-market fit and pricing optimization methodologies"
    },
    { 
      expert: "Grant Cardone", 
      framework: "10X Methodology", 
      integrationStatus: "active", 
      contributionScore: 89,
      businessApplication: "Sales performance optimization and growth acceleration"
    },
    { 
      expert: "Dean Abbott", 
      framework: "Anomaly Detection", 
      integrationStatus: "active", 
      contributionScore: 91,
      businessApplication: "Early warning systems for churn and market shifts"
    }
  ],

  actionableInsights: [
    {
      title: "High Churn Risk Detected",
      priority: "critical",
      impact: "234 customers at risk - potential $890K revenue loss",
      action: "Launch immediate retention campaign with 25% discount offer",
      timeframe: "Next 7 days",
      confidence: 97,
      source: "Customer Retention Predictor",
      potentialRevenue: "$890K saved"
    },
    {
      title: "Inventory Shortage Predicted",
      priority: "high",
      impact: "27% demand increase will cause stockouts in 3 weeks",
      action: "Order 127K additional units immediately",
      timeframe: "This week",
      confidence: 95,
      source: "Demand Forecaster",
      potentialRevenue: "$1.2M protected"
    },
    {
      title: "Pricing Optimization Opportunity",
      priority: "high",
      impact: "8% price increase won't affect demand for Product Line A",
      action: "Implement dynamic pricing model",
      timeframe: "Next 2 weeks",
      confidence: 96,
      source: "Revenue Optimization Engine",
      potentialRevenue: "$2.3M annual increase"
    },
    {
      title: "Market Sentiment Window",
      priority: "high",
      impact: "Positive market sentiment provides growth opportunity",
      action: "Launch marketing campaign to capture 15% more market share",
      timeframe: "Next 14 days",
      confidence: 91,
      source: "Market Intelligence Engine",
      potentialRevenue: "$650K opportunity"
    },
    {
      title: "Competitive Threat",
      priority: "critical",
      impact: "Competitor launching similar product in 6 weeks",
      action: "Accelerate product roadmap and defensive positioning",
      timeframe: "Next 30 days",
      confidence: 92,
      source: "Competitive Intelligence",
      potentialRevenue: "$1.1M market share protection"
    }
  ],

  accuracyTrend: [89.1, 90.3, 91.7, 92.8, 93.4, 94.2, 94.2],
  confidenceTrend: [87, 89, 91, 92, 93, 94, 95]
}));
