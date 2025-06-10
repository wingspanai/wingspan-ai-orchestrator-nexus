
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useGeniusStore } from '@/store/geniusStore';

export function AccuracyVisualization() {
  const { predictionEngines, accuracyTrend, confidenceTrend } = useGeniusStore();

  const trendData = accuracyTrend.map((accuracy, index) => ({
    day: `Day ${index + 1}`,
    accuracy,
    confidence: confidenceTrend[index]
  }));

  const radarData = predictionEngines.map(engine => ({
    name: engine.name.replace(' 2.0', ''),
    accuracy: engine.accuracy,
    confidence: engine.confidenceLevel,
    predictions: Math.min(engine.predictionsToday / 50, 100) // Normalize for radar
  }));

  const performanceData = predictionEngines.map(engine => ({
    name: engine.name.replace(' 2.0', '').replace('Predictor', '').replace('Engine', '').trim(),
    accuracy: engine.accuracy,
    target: (engine.targetAccuracy[0] + engine.targetAccuracy[1]) / 2,
    predictions: engine.predictionsToday
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Overall Accuracy Trend */}
      <Card className="lg:col-span-2 bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">System-Wide Accuracy & Confidence Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              accuracy: { label: "Accuracy", color: "#8B5CF6" },
              confidence: { label: "Confidence", color: "#06B6D4" }
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="day" />
                <YAxis domain={[85, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="accuracy"
                  stackId="1"
                  stroke="var(--color-accuracy)"
                  fill="var(--color-accuracy)"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="confidence"
                  stackId="2"
                  stroke="var(--color-confidence)"
                  fill="var(--color-confidence)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Performance Radar */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Multi-Dimensional Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              accuracy: { label: "Accuracy", color: "#8B5CF6" },
              confidence: { label: "Confidence", color: "#06B6D4" },
              predictions: { label: "Prediction Volume", color: "#10B981" }
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData.slice(0, 6)}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <PolarRadiusAxis domain={[80, 100]} tick={{ fontSize: 8, fill: '#94a3b8' }} />
                <Radar
                  name="Accuracy"
                  dataKey="accuracy"
                  stroke="var(--color-accuracy)"
                  fill="var(--color-accuracy)"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Confidence"
                  dataKey="confidence"
                  stroke="var(--color-confidence)"
                  fill="var(--color-confidence)"
                  fillOpacity={0.3}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Engine Performance Comparison */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Accuracy vs Target Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              accuracy: { label: "Current", color: "#8B5CF6" },
              target: { label: "Target", color: "#06B6D4" }
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData.slice(0, 8)} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis type="number" domain={[85, 100]} />
                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="target" fill="var(--color-target)" opacity={0.5} />
                <Bar dataKey="accuracy" fill="var(--color-accuracy)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
