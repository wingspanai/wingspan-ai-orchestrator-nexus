
import { useState } from 'react';
import { FileText, Users, Clock, AlertCircle, Plus, Search, Filter, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { useLegalStore } from '@/store/legalStore';

export function PolicyManagementSection() {
  const {
    policies,
    totalPolicies,
    publishedPolicies,
    draftPolicies,
    acknowledgedRate,
    overdueReviews
  } = useLegalStore();

  const [searchQuery, setSearchQuery] = useState('');

  const policyCategories = [
    {
      id: 'privacy',
      name: 'Privacy & Data Protection',
      icon: '🔒',
      color: 'bg-blue-100 border-blue-200',
      policyCount: 8,
      complianceRate: 95
    },
    {
      id: 'hr',
      name: 'Human Resources',
      icon: '👥',
      color: 'bg-green-100 border-green-200',
      policyCount: 12,
      complianceRate: 88
    },
    {
      id: 'security',
      name: 'Information Security',
      icon: '🛡️',
      color: 'bg-purple-100 border-purple-200',
      policyCount: 6,
      complianceRate: 92
    },
    {
      id: 'ethics',
      name: 'Ethics & Conduct',
      icon: '⚖️',
      color: 'bg-amber-100 border-amber-200',
      policyCount: 4,
      complianceRate: 85
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'under-review': return 'bg-blue-100 text-blue-800';
      case 'archived': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Policy Management</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search policies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Policy
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPolicies}</div>
            <div className="space-y-1 mt-2">
              <div className="text-xs text-muted-foreground">
                {publishedPolicies} published
              </div>
              <div className="text-xs text-muted-foreground">
                {draftPolicies} drafts
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acknowledgment Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{acknowledgedRate}%</div>
            <div className="text-xs text-muted-foreground mt-2">
              285/300 employees
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Review Cycle</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <div className="text-xs text-muted-foreground mt-2">months</div>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-amber-800">Overdue Reviews</CardTitle>
            <AlertCircle className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-800">{overdueReviews}</div>
            <button className="text-xs text-amber-600 hover:underline mt-2">
              View All →
            </button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Policy Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {policyCategories.map((category) => (
              <div key={category.id} className={`p-4 rounded-lg border ${category.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{category.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {category.policyCount} policies
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={category.complianceRate} className="h-2" />
                  <div className="text-sm text-muted-foreground">
                    {category.complianceRate}% compliant
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="mt-3 w-full">
                  View Policies →
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Policy Updates</CardTitle>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {policies.map((policy) => (
              <div key={policy.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    📋
                  </div>
                  <div>
                    <div className="font-medium">{policy.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {policy.category} • v{policy.version} • 
                      Updated {policy.lastUpdated.toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <Badge className={getStatusColor(policy.status)}>
                      {policy.status}
                    </Badge>
                    {policy.needsReview && (
                      <Badge variant="outline" className="ml-2">Needs Review</Badge>
                    )}
                  </div>
                  <div className="text-center min-w-32">
                    <Progress value={policy.acknowledgmentRate} className="h-2 mb-1" />
                    <div className="text-xs text-muted-foreground">
                      {policy.acknowledgmentRate}% ({policy.acknowledgedCount}/{policy.targetAudience})
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button size="sm" variant="outline">View</Button>
                    <Button size="sm" variant="ghost">Edit</Button>
                    <Button size="sm" variant="ghost">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
