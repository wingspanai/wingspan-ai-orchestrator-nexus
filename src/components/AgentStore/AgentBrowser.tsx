
import React, { useState } from "react";
import { Grid3x3, List, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgentGrid } from "./AgentGrid";
import { FilterSidebar } from "./FilterSidebar";

interface AgentBrowserProps {
  searchQuery: string;
  selectedCategory: string;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function AgentBrowser({
  searchQuery,
  selectedCategory,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange
}: AgentBrowserProps) {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          {showFilters && (
            <div className="w-64 flex-shrink-0 hidden lg:block">
              <FilterSidebar />
            </div>
          )}
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Browser Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-text-primary">
                  Showing 48 agents
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                {/* View Toggle */}
                <div className="flex items-center border border-border rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => onViewModeChange("grid")}
                    className="px-3"
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => onViewModeChange("list")}
                    className="px-3"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/25"
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                  <option value="roi">Highest ROI</option>
                  <option value="fastest">Fastest Deploy</option>
                  <option value="rated">Best Rated</option>
                </select>
              </div>
            </div>
            
            {/* Agent Grid */}
            <AgentGrid 
              viewMode={viewMode}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
