
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Brain, Zap, TrendingUp, Target } from 'lucide-react';

export function AIEngineSettingsPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI Engine Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Customer Value Predictor</h4>
                <p className="text-sm text-slate-400">CLV-Prophet 2.0 Engine</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                  93.5% Accuracy
                </Badge>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-300">Prediction Sensitivity</label>
              <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-slate-400">
                <span>Conservative</span>
                <span>Aggressive</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-600 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Churn Prediction Engine</h4>
                <p className="text-sm text-slate-400">Quantum Churn Predictor</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                  95.8% Accuracy
                </Badge>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-300">Early Warning Threshold</label>
              <Slider defaultValue={[30]} max={90} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-slate-400">
                <span>7 days</span>
                <span>90 days</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performance Optimization
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Auto-scaling</h4>
                <p className="text-sm text-slate-400">Automatically adjust compute resources</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Real-time Processing</h4>
                <p className="text-sm text-slate-400">Process predictions in real-time</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Batch Processing</h4>
                <p className="text-sm text-slate-400">Schedule large data processing jobs</p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="space-y-2 border-t border-slate-600 pt-4">
            <label className="text-sm text-slate-300">Model Update Frequency</label>
            <select className="w-full p-2 rounded bg-slate-700 border border-slate-600 text-white">
              <option>Real-time (Continuous)</option>
              <option>Hourly</option>
              <option>Daily</option>
              <option>Weekly</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="h-5 w-5" />
            AI Engine Performance Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-slate-700/30">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">94.2%</div>
              <div className="text-sm text-slate-400">Overall Accuracy</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-700/30">
              <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1.2M</div>
              <div className="text-sm text-slate-400">Predictions Today</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-700/30">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">0.3s</div>
              <div className="text-sm text-slate-400">Avg Response Time</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-700/30">
              <Target className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">99.7%</div>
              <div className="text-sm text-slate-400">Uptime</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
