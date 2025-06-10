
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Building, MapPin, Phone, Globe, Camera } from 'lucide-react';

export function AccountSettingsPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline" className="border-slate-600 text-slate-300">
                <Camera className="w-4 h-4 mr-2" />
                Change Photo
              </Button>
              <p className="text-sm text-slate-400">JPG, PNG up to 10MB</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-300">First Name</Label>
              <Input 
                defaultValue="John" 
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Last Name</Label>
              <Input 
                defaultValue="Doe" 
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-300">Email Address</Label>
            <div className="flex items-center gap-2">
              <Input 
                defaultValue="john.doe@company.com" 
                className="bg-slate-700 border-slate-600 text-white"
              />
              <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
                Verified
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-300">Job Title</Label>
            <Input 
              defaultValue="Chief Executive Officer" 
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-slate-300">Bio</Label>
            <Textarea 
              defaultValue="Experienced executive focused on data-driven decision making and AI-powered business intelligence."
              className="bg-slate-700 border-slate-600 text-white resize-none"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Building className="h-5 w-5" />
              Company Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300">Company Name</Label>
              <Input 
                defaultValue="Acme Corporation" 
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">Industry</Label>
              <Select defaultValue="technology">
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">Company Size</Label>
              <Select defaultValue="medium">
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="startup">1-10 employees</SelectItem>
                  <SelectItem value="small">11-50 employees</SelectItem>
                  <SelectItem value="medium">51-200 employees</SelectItem>
                  <SelectItem value="large">201-1000 employees</SelectItem>
                  <SelectItem value="enterprise">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300">Phone Number</Label>
              <Input 
                defaultValue="+1 (555) 123-4567" 
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">Time Zone</Label>
              <Select defaultValue="est">
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="pst">Pacific (PST)</SelectItem>
                  <SelectItem value="mst">Mountain (MST)</SelectItem>
                  <SelectItem value="cst">Central (CST)</SelectItem>
                  <SelectItem value="est">Eastern (EST)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2 flex justify-end gap-4">
        <Button variant="outline" className="border-slate-600 text-slate-300">
          Cancel
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
