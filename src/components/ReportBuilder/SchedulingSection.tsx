
import React, { useState } from "react";
import { Clock, CheckCircle, Plus, X, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SchedulingSection() {
  const [isScheduled, setIsScheduled] = useState(false);
  const [frequency, setFrequency] = useState("once");
  const [scheduleTime, setScheduleTime] = useState("09:00");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [cronExpression, setCronExpression] = useState("");
  const [recipients, setRecipients] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", avatar: "" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "" }
  ]);
  const [deliveryOptions, setDeliveryOptions] = useState({
    email: true,
    slack: false,
    teams: false,
    drive: false
  });

  const daysOfWeek = [
    { value: "mon", label: "Mon" },
    { value: "tue", label: "Tue" },
    { value: "wed", label: "Wed" },
    { value: "thu", label: "Thu" },
    { value: "fri", label: "Fri" },
    { value: "sat", label: "Sat" },
    { value: "sun", label: "Sun" }
  ];

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const removeRecipient = (id: number) => {
    setRecipients(prev => prev.filter(r => r.id !== id));
  };

  const updateDeliveryOption = (option: string, checked: boolean) => {
    setDeliveryOptions(prev => ({ ...prev, [option]: checked }));
  };

  const getNextRunTime = (cron: string) => {
    if (!cron) return "Invalid expression";
    return "Tomorrow at 9:00 AM"; // Placeholder
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            Schedule & Distribution
          </CardTitle>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
            isScheduled 
              ? "bg-green-100 text-green-700" 
              : "bg-gray-100 text-gray-700"
          }`}>
            {isScheduled ? (
              <>
                <CheckCircle className="h-4 w-4" />
                Scheduled
              </>
            ) : (
              <>
                <Clock className="h-4 w-4" />
                Not Scheduled
              </>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Frequency Selection */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Frequency</Label>
          <RadioGroup value={frequency} onValueChange={setFrequency}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { value: "once", label: "Once" },
                { value: "daily", label: "Daily" },
                { value: "weekly", label: "Weekly" },
                { value: "monthly", label: "Monthly" },
                { value: "custom", label: "Custom" }
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Timing Configuration */}
        {frequency !== "once" && (
          <div className="space-y-4">
            {frequency === "daily" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            )}

            {frequency === "weekly" && (
              <div className="space-y-4">
                <div>
                  <Label>Day of Week</Label>
                  <div className="flex gap-2 mt-2">
                    {daysOfWeek.map((day) => (
                      <Button
                        key={day.value}
                        variant={selectedDays.includes(day.value) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleDay(day.value)}
                        className="w-12"
                      >
                        {day.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="weeklyTime">Time</Label>
                    <Input
                      id="weeklyTime"
                      type="time"
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {frequency === "custom" && (
              <div className="space-y-2">
                <Label htmlFor="cron">Cron Expression</Label>
                <Input
                  id="cron"
                  value={cronExpression}
                  onChange={(e) => setCronExpression(e.target.value)}
                  placeholder="0 0 * * *"
                  className="mt-1"
                />
                <p className="text-sm text-gray-500">
                  Next run: {getNextRunTime(cronExpression)}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Recipients */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-medium">Recipients</Label>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Recipients
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {recipients.map((recipient) => (
              <div
                key={recipient.id}
                className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2"
              >
                <Avatar className="h-6 w-6">
                  <AvatarImage src={recipient.avatar} />
                  <AvatarFallback className="text-xs">
                    {recipient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div className="font-medium">{recipient.name}</div>
                  <div className="text-gray-500 text-xs">{recipient.email}</div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeRecipient(recipient.id)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Options */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Delivery Options</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { key: "email", label: "Email", description: "Send as PDF attachment" },
              { key: "slack", label: "Slack", description: "Post to channel" },
              { key: "teams", label: "Teams", description: "Share in Teams channel" },
              { key: "drive", label: "Cloud Storage", description: "Save to Google Drive/Dropbox" }
            ].map((option) => (
              <div key={option.key} className="flex items-start space-x-3 p-3 border rounded-lg">
                <Checkbox
                  id={option.key}
                  checked={deliveryOptions[option.key as keyof typeof deliveryOptions]}
                  onCheckedChange={(checked) => updateDeliveryOption(option.key, checked as boolean)}
                />
                <div className="flex-1">
                  <label htmlFor={option.key} className="text-sm font-medium cursor-pointer">
                    {option.label}
                  </label>
                  <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between pt-4 border-t">
          <Button variant="ghost">
            <Send className="h-4 w-4 mr-2" />
            Send Test Report
          </Button>
          <Button onClick={() => setIsScheduled(!isScheduled)}>
            <Calendar className="h-4 w-4 mr-2" />
            {isScheduled ? 'Update Schedule' : 'Create Schedule'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
