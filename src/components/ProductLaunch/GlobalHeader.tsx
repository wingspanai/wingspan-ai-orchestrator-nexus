
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Brain, Bell, User } from 'lucide-react';
import { Lightbulb, GitBranch, Target, Rocket, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface GlobalHeaderProps {
  onCreateProduct: () => void;
  onToggleAI: () => void;
  showAIAssistant: boolean;
}

export function GlobalHeader({ onCreateProduct, onToggleAI, showAIAssistant }: GlobalHeaderProps) {
  const location = useLocation();
  const unreadNotifications = 3;

  const navigationItems = [
    { icon: Lightbulb, label: 'Ideation', route: '/product-launch/ideation' },
    { icon: GitBranch, label: 'Development', route: '/product-launch/development' },
    { icon: Target, label: 'Go-to-Market', route: '/product-launch/go-to-market' },
    { icon: Rocket, label: 'Launch', route: '/product-launch/launch' },
    { icon: TrendingUp, label: 'Performance', route: '/product-launch/performance' },
  ];

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/product-launch" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Rocket className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">LaunchPad</span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center space-x-1 ml-8">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.route;
            
            return (
              <Link
                key={item.route}
                to={item.route}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Global Actions */}
        <div className="flex items-center space-x-3">
          {/* Quick Launch Button */}
          <Button onClick={onCreateProduct} className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Product</span>
          </Button>

          {/* AI Assistant Toggle */}
          <Button
            variant={showAIAssistant ? 'default' : 'outline'}
            size="sm"
            onClick={onToggleAI}
            className="flex items-center space-x-2"
          >
            <Brain className="h-4 w-4" />
            <span>AI Assistant</span>
          </Button>

          {/* Notification Center */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            {unreadNotifications > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {unreadNotifications}
              </Badge>
            )}
          </Button>

          {/* User Menu */}
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
