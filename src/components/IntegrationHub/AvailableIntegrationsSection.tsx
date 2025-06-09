
import { useState } from "react";
import { CheckCircle, Users, Clock, Shield, Star, Key, Code, Webhook, Plug } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AvailableIntegrationsSectionProps {
  onConnect: (integration: any) => void;
}

export function AvailableIntegrationsSection({ onConnect }: AvailableIntegrationsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "All Categories",
    "CRM",
    "Finance", 
    "Marketing",
    "HR",
    "Analytics",
    "Communication",
    "Storage"
  ];

  const availableIntegrations = [
    {
      id: 1,
      name: "QuickBooks",
      category: "Finance",
      description: "Connect your accounting and financial data for comprehensive business insights.",
      logo: "/integrations/quickbooks.svg",
      popular: true,
      feature1: "Real-time financial sync",
      feature2: "Automated invoice processing",
      feature3: "Tax compliance tracking",
      activeUsers: "2.1M",
      setupTime: "5 min",
      security: "SOC 2 Type II",
      connectionTypes: ["oauth", "api"]
    },
    {
      id: 2,
      name: "Shopify",
      category: "E-commerce",
      description: "Integrate your online store data to track sales, inventory, and customer behavior.",
      logo: "/integrations/shopify.svg",
      popular: true,
      feature1: "Order & inventory sync",
      feature2: "Customer data integration",
      feature3: "Revenue analytics",
      activeUsers: "1.8M",
      setupTime: "3 min",
      security: "PCI DSS",
      connectionTypes: ["oauth", "webhook"]
    },
    {
      id: 3,
      name: "Google Analytics",
      category: "Analytics",
      description: "Import web analytics data to understand user behavior and website performance.",
      logo: "/integrations/google-analytics.svg",
      popular: false,
      feature1: "Traffic analytics",
      feature2: "Conversion tracking",
      feature3: "Audience insights",
      activeUsers: "950K",
      setupTime: "2 min",
      security: "ISO 27001",
      connectionTypes: ["oauth"]
    },
    {
      id: 4,
      name: "Stripe",
      category: "Finance",
      description: "Sync payment processing data for comprehensive financial tracking and analysis.",
      logo: "/integrations/stripe.svg",
      popular: true,
      feature1: "Payment processing sync",
      feature2: "Subscription analytics",
      feature3: "Fraud detection data",
      activeUsers: "1.2M",
      setupTime: "4 min",
      security: "PCI Level 1",
      connectionTypes: ["api", "webhook"]
    },
    {
      id: 5,
      name: "Microsoft Office 365",
      category: "Communication",
      description: "Integrate email, calendar, and productivity data for enhanced business insights.",
      logo: "/integrations/office365.svg",
      popular: false,
      feature1: "Email & calendar sync",
      feature2: "Document collaboration",
      feature3: "Team productivity metrics",
      activeUsers: "800K",
      setupTime: "6 min",
      security: "SOC 2",
      connectionTypes: ["oauth"]
    },
    {
      id: 6,
      name: "Zoom",
      category: "Communication",
      description: "Connect video conferencing data to track meeting efficiency and team collaboration.",
      logo: "/integrations/zoom.svg",
      popular: false,
      feature1: "Meeting analytics",
      feature2: "Participant insights",
      feature3: "Usage reporting",
      activeUsers: "650K",
      setupTime: "3 min",
      security: "FedRAMP",
      connectionTypes: ["oauth", "webhook"]
    }
  ];

  const getConnectionIcon = (type: string) => {
    switch (type) {
      case 'oauth': return <Key className="h-3 w-3" />;
      case 'api': return <Code className="h-3 w-3" />;
      case 'webhook': return <Webhook className="h-3 w-3" />;
      default: return <Plug className="h-3 w-3" />;
    }
  };

  const filteredIntegrations = selectedCategory === "all" 
    ? availableIntegrations 
    : availableIntegrations.filter(integration => 
        integration.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-text-primary">Available Integrations</h2>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category.toLowerCase().replace(" categories", "all") ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.toLowerCase().replace(" categories", "all"))}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Integration Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <Card key={integration.id} className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{integration.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {integration.category}
                    </Badge>
                  </div>
                </div>
                {integration.popular && (
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-text-secondary">{integration.description}</p>

              {/* Feature List */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{integration.feature1}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{integration.feature2}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{integration.feature3}</span>
                </div>
              </div>

              {/* Integration Stats */}
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Users className="h-3 w-3 text-text-secondary" />
                  </div>
                  <p className="font-medium">{integration.activeUsers}</p>
                  <p className="text-xs text-text-secondary">users</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Clock className="h-3 w-3 text-text-secondary" />
                  </div>
                  <p className="font-medium">{integration.setupTime}</p>
                  <p className="text-xs text-text-secondary">setup</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Shield className="h-3 w-3 text-text-secondary" />
                  </div>
                  <p className="font-medium text-xs">{integration.security}</p>
                  <p className="text-xs text-text-secondary">security</p>
                </div>
              </div>

              {/* Connection Types */}
              <div className="flex gap-2">
                {integration.connectionTypes.map((type) => (
                  <Badge key={type} variant="outline" className="text-xs">
                    {getConnectionIcon(type)}
                    <span className="ml-1 capitalize">{type}</span>
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button 
                  className="flex-1" 
                  onClick={() => onConnect(integration)}
                >
                  <Plug className="h-4 w-4 mr-2" />
                  Connect
                </Button>
                <Button variant="ghost" className="flex-1">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Section */}
      <div className="text-center py-6">
        <Button variant="outline" size="lg">
          Show More Integrations
        </Button>
      </div>
    </div>
  );
}
