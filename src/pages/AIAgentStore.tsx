
import React, { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { StoreHeader } from "@/components/AgentStore/StoreHeader";
import { QuickDeploySection } from "@/components/AgentStore/QuickDeploySection";
import { CategoryNavigation } from "@/components/AgentStore/CategoryNavigation";
import { AgentBrowser } from "@/components/AgentStore/AgentBrowser";

export default function AIAgentStore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");

  return (
    <MainLayout>
      <div className="min-h-screen bg-bg-primary">
        <StoreHeader 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <QuickDeploySection />
        
        <CategoryNavigation 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <AgentBrowser
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>
    </MainLayout>
  );
}
