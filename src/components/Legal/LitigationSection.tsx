
import { useState } from 'react';
import { Briefcase, DollarSign, Shield, TrendingUp, Plus, Calendar, Eye, Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLegalStore } from '@/store/legalStore';

export function LitigationSection() {
  const {
    legalMatters,
    activeLegalMatters,
    totalExposure,
    totalReserves,
    winRate
  } = useLegalStore();

  const [filterStatus, setFilterStatus] = useState('all');

  const upcomingDeadlines = [
    {
      id: '1',
      date: new Date('2024-12-20'),
      title: 'Discovery Response Due',
      matter: 'Patent Infringement Claim',
      type: 'Filing Deadline',
      daysUntil: 15,
      responsibleParty: 'Jane Smith, Esq.'
    },
    {
      id: '2',
      date: new Date('2024-12-28'),
      title: 'Mediation Session',
      matter: 'Contract Dispute - TechCorp',
      type: 'Hearing',
      daysUntil: 23,
      responsibleParty: 'Legal Team'
    }
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStageProgress = (stage: string) => {
    switch (stage) {
      case 'filed': return 25;
      case 'discovery': return 50;
      case 'trial': return 75;
      case 'resolution': return 100;
      default: return 0;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Legal Matters & Litigation</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">All Matters</Button>
          <Button variant="ghost" size="sm">Active Litigation</Button>
          <Button variant="ghost" size="sm">Investigations</Button>
          <Button variant="ghost" size="sm">Claims</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Legal Matters</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeLegalMatters}</div>
            <div className="space-y-1 mt-2">
              <div className="text-xs text-muted-foreground">3 litigation</div>
              <div className="text-xs text-muted-foreground">2 investigations</div>
              <div className="text-xs text-muted-foreground">2 claims</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Exposure</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalExposure}M</div>
            <div className="text-xs text-muted-foreground mt-2">
              Estimated: $3.2M - $7.8M
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reserved</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">54%</div>
            <div className="text-xs text-muted-foreground mt-2">
              ${totalReserves}M in reserves
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{winRate}%</div>
            <div className="space-y-1 mt-2">
              <div className="text-xs text-muted-foreground">Won: 14</div>
              <div className="text-xs text-muted-foreground">Lost: 3</div>
              <div className="text-xs text-muted-foreground">Settled: 8</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Legal Matters</CardTitle>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Matter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {legalMatters.map((matter) => (
                <div key={matter.id} className="p-4 border rounded-lg space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{matter.type}</Badge>
                        <span className="text-sm text-muted-foreground">#{matter.caseNumber}</span>
                        <Badge className={getPriorityColor(matter.priority)}>
                          {matter.priority} Priority
                        </Badge>
                      </div>
                      <h4 className="font-medium">{matter.title}</h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Opposing Party:</span>
                      <div className="font-medium">{matter.opposingParty}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Lead Counsel:</span>
                      <div className="font-medium">{matter.leadCounsel}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Case Progress</span>
                      <span className="font-medium">{matter.stage}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${getStageProgress(matter.stage)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Filed</span>
                      <span>Discovery</span>
                      <span>Trial</span>
                      <span>Resolution</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Exposure</span>
                      <div className="font-medium">${matter.exposure}M</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Costs to Date</span>
                      <div className="font-medium">${matter.costsToDate}K</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Reserve</span>
                      <div className="font-medium">${matter.reserve}M</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4 mr-2" />
                      Update
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Legal Deadlines</CardTitle>
              <Button size="sm" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Full Calendar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div key={deadline.id} className={`p-4 border rounded-lg ${deadline.daysUntil <= 7 ? 'border-red-200 bg-red-50' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center min-w-16">
                      <div className="text-lg font-bold">{deadline.date.getDate()}</div>
                      <div className="text-xs text-muted-foreground">
                        {deadline.date.toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {deadline.date.getFullYear()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{deadline.title}</div>
                      <div className="text-sm text-muted-foreground">{deadline.matter}</div>
                      <div className="text-xs text-muted-foreground mt-1">{deadline.type}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${deadline.daysUntil <= 3 ? 'text-red-600' : 'text-muted-foreground'}`}>
                        {deadline.daysUntil} days
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {deadline.responsibleParty}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
