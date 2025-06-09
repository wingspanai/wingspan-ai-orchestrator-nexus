
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useHRStore } from '@/store/hrStore';
import { 
  GitBranch, Users, Grid3x3, Eye, MessageSquare, Calendar, 
  Maximize, Minimize, Download, Plus 
} from 'lucide-react';

export function OrganizationSection() {
  const { employees, teams } = useHRStore();
  const [orgView, setOrgView] = useState<'chart' | 'teams' | 'matrix'>('teams');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Organization Structure</h2>
        <div className="flex items-center gap-4">
          <div className="flex rounded-lg border">
            <button
              onClick={() => setOrgView('chart')}
              className={`flex items-center gap-2 px-3 py-2 text-sm ${
                orgView === 'chart' ? 'bg-primary text-primary-foreground' : 'hover:bg-gray-50'
              }`}
            >
              <GitBranch className="h-4 w-4" />
              Org Chart
            </button>
            <button
              onClick={() => setOrgView('teams')}
              className={`flex items-center gap-2 px-3 py-2 text-sm border-x ${
                orgView === 'teams' ? 'bg-primary text-primary-foreground' : 'hover:bg-gray-50'
              }`}
            >
              <Users className="h-4 w-4" />
              Teams
            </button>
            <button
              onClick={() => setOrgView('matrix')}
              className={`flex items-center gap-2 px-3 py-2 text-sm ${
                orgView === 'matrix' ? 'bg-primary text-primary-foreground' : 'hover:bg-gray-50'
              }`}
            >
              <Grid3x3 className="h-4 w-4" />
              Matrix
            </button>
          </div>
          <Input
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
          />
        </div>
      </div>

      {/* Teams View */}
      {orgView === 'teams' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((team) => (
              <Card key={team.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-medium"
                        style={{ backgroundColor: team.color }}
                      >
                        {team.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{team.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Avatar className="w-5 h-5">
                            <AvatarImage src={team.lead.avatar} />
                            <AvatarFallback className="text-xs">
                              {team.lead.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          {team.lead.name}
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">{team.memberCount}</div>
                      <div className="text-xs text-muted-foreground">members</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Engagement</span>
                        <span className="font-medium">{team.engagementScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${team.engagementScore}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Performance</span>
                        <span className="font-medium">{team.performanceScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                          style={{ width: `${team.performanceScore}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Retention</span>
                      <span className="font-medium">
                        {team.retentionRate}%
                        <span className={`ml-1 ${team.retentionTrend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {team.retentionTrend > 0 ? '↑' : '↓'} {Math.abs(team.retentionTrend)}%
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex -space-x-2">
                      {team.members.slice(0, 5).map((member, index) => (
                        <Avatar key={member.id} className="w-8 h-8 border-2 border-white">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="text-xs">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {team.members.length > 5 && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                          +{team.members.length - 5}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Team
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Employee List */}
          <Card>
            <CardHeader>
              <CardTitle>All Employees ({filteredEmployees.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredEmployees.map((employee) => (
                  <div key={employee.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={employee.avatar} />
                        <AvatarFallback>
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {employee.title} • {employee.department}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chart View Placeholder */}
      {orgView === 'chart' && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Organization Chart</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Maximize className="h-4 w-4 mr-2" />
                  Expand All
                </Button>
                <Button variant="outline" size="sm">
                  <Minimize className="h-4 w-4 mr-2" />
                  Collapse All
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center space-y-2">
                <GitBranch className="h-12 w-12 text-muted-foreground mx-auto" />
                <div className="text-lg font-medium">Interactive Org Chart</div>
                <div className="text-sm text-muted-foreground">
                  Organizational chart visualization would be rendered here
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Matrix View Placeholder */}
      {orgView === 'matrix' && (
        <Card>
          <CardHeader>
            <CardTitle>Team Matrix View</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center space-y-2">
                <Grid3x3 className="h-12 w-12 text-muted-foreground mx-auto" />
                <div className="text-lg font-medium">Matrix Organization View</div>
                <div className="text-sm text-muted-foreground">
                  Matrix view showing cross-functional relationships
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
