
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, UserPlus, Crown, Shield, Eye, MoreHorizontal } from 'lucide-react';

export function TeamManagementPanel() {
  const teamMembers = [
    { name: 'John Doe', email: 'john@company.com', role: 'Admin', status: 'Active', lastActive: '2 min ago', avatar: 'JD' },
    { name: 'Sarah Johnson', email: 'sarah@company.com', role: 'Manager', status: 'Active', lastActive: '5 min ago', avatar: 'SJ' },
    { name: 'Mike Chen', email: 'mike@company.com', role: 'Analyst', status: 'Active', lastActive: '1 hour ago', avatar: 'MC' },
    { name: 'Emily Davis', email: 'emily@company.com', role: 'Viewer', status: 'Inactive', lastActive: '2 days ago', avatar: 'ED' },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Admin': return <Crown className="w-4 h-4 text-yellow-400" />;
      case 'Manager': return <Shield className="w-4 h-4 text-blue-400" />;
      case 'Analyst': return <Users className="w-4 h-4 text-green-400" />;
      case 'Viewer': return <Eye className="w-4 h-4 text-gray-400" />;
      default: return <Users className="w-4 h-4 text-gray-400" />;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-yellow-500/20 text-yellow-100 border-yellow-500/50';
      case 'Manager': return 'bg-blue-500/20 text-blue-100 border-blue-500/50';
      case 'Analyst': return 'bg-green-500/20 text-green-100 border-green-500/50';
      case 'Viewer': return 'bg-gray-500/20 text-gray-100 border-gray-500/50';
      default: return 'bg-gray-500/20 text-gray-100 border-gray-500/50';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Members
              <Badge className="bg-blue-500/20 text-blue-100 border-blue-500/50">
                {teamMembers.length} Members
              </Badge>
            </CardTitle>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <UserPlus className="w-4 h-4 mr-2" />
              Invite Member
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-white font-medium">{member.name}</h4>
                  <p className="text-sm text-slate-400">{member.email}</p>
                  <p className="text-xs text-slate-500">Last active: {member.lastActive}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={getRoleBadgeColor(member.role)}>
                  {getRoleIcon(member.role)}
                  {member.role}
                </Badge>
                <Badge className={member.status === 'Active' ? 'bg-green-500/20 text-green-100 border-green-500/50' : 'bg-red-500/20 text-red-100 border-red-500/50'}>
                  {member.status}
                </Badge>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Role Permissions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                <div className="flex items-center gap-3">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <div>
                    <h4 className="text-white font-medium">Admin</h4>
                    <p className="text-sm text-slate-400">Full system access</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  Edit
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <div>
                    <h4 className="text-white font-medium">Manager</h4>
                    <p className="text-sm text-slate-400">Team and project management</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  Edit
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-green-400" />
                  <div>
                    <h4 className="text-white font-medium">Analyst</h4>
                    <p className="text-sm text-slate-400">Data analysis and reports</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  Edit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <UserPlus className="h-5 w-5" />
              Invitation Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">alex@company.com</h4>
                    <p className="text-sm text-slate-400">Pending invitation • Analyst role</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                    Resend
                  </Button>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">lisa@company.com</h4>
                    <p className="text-sm text-slate-400">Pending invitation • Manager role</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <UserPlus className="w-4 h-4 mr-2" />
              Send New Invitation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
