
import { useState } from 'react';
import { Eye, Edit, RefreshCw, Filter, Search, Calendar, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useLegalStore } from '@/store/legalStore';

export function ContractManagementSection() {
  const { contracts } = useLegalStore();
  const [contractSearch, setContractSearch] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'expiring': return 'bg-yellow-100 text-yellow-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'review': return 'bg-blue-100 text-blue-800';
      case 'negotiation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredContracts = contracts.filter(contract => {
    if (filterStatus !== 'all' && contract.status !== filterStatus) return false;
    if (contractSearch && !contract.name.toLowerCase().includes(contractSearch.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Contract Management</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">All Contracts</Button>
          <Button variant="ghost" size="sm">Active</Button>
          <Button variant="ghost" size="sm">Expiring Soon</Button>
          <Button variant="ghost" size="sm">Under Negotiation</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Contract Pipeline</CardTitle>
              <Select value="current-quarter">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-quarter">Current Quarter</SelectItem>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { stage: 'Draft', count: 12, avgTime: '3 days' },
                  { stage: 'Review', count: 8, avgTime: '7 days' },
                  { stage: 'Negotiation', count: 5, avgTime: '14 days' },
                  { stage: 'Executed', count: 23, avgTime: '21 days' }
                ].map((stage, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold">{stage.count}</div>
                    <div className="text-sm font-medium">{stage.stage}</div>
                    <div className="text-xs text-muted-foreground">{stage.avgTime} avg</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contract Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: 'expiring',
                  title: 'Microsoft License Expiring',
                  description: 'Contract expires in 30 days',
                  severity: 'high'
                },
                {
                  type: 'review',
                  title: 'AWS Agreement Review',
                  description: 'Annual review due this month',
                  severity: 'medium'
                }
              ].map((alert, index) => (
                <div key={index} className="p-3 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{alert.title}</div>
                    <div className="text-xs text-muted-foreground">{alert.description}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">View Contract</Button>
                    <Button size="sm" variant="ghost">Dismiss</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Contracts</CardTitle>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search contracts..."
                  value={contractSearch}
                  onChange={(e) => setContractSearch(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="value">Value</SelectItem>
                  <SelectItem value="expiry">Expiry</SelectItem>
                  <SelectItem value="party">Counterparty</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract</TableHead>
                <TableHead>Counterparty</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        📄
                      </div>
                      <div>
                        <div className="font-medium">{contract.name}</div>
                        <div className="text-sm text-muted-foreground">{contract.type}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      <span>{contract.counterparty.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">${contract.value.toLocaleString()}K</div>
                      {contract.recurring && (
                        <Badge variant="outline" className="text-xs">Recurring</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(contract.status)}>
                      {contract.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className={contract.daysUntilExpiry < 30 ? 'text-red-600 font-medium' : ''}>
                        {formatDate(contract.expiryDate)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {contract.daysUntilExpiry}d remaining
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
