
import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { KnowledgeHeader } from "@/components/Knowledge/KnowledgeHeader";
import { KnowledgeCategoriesSection } from "@/components/Knowledge/KnowledgeCategoriesSection";
import { AIKnowledgeDiscovery } from "@/components/Knowledge/AIKnowledgeDiscovery";
import { ContentDiscoverySection } from "@/components/Knowledge/ContentDiscoverySection";
import { ContributionSection } from "@/components/Knowledge/ContributionSection";
import { KnowledgeAnalytics } from "@/components/Knowledge/KnowledgeAnalytics";

const KnowledgeManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("categories");
  const [question, setQuestion] = useState("");

  return (
    <MainLayout>
      <div className="space-y-8">
        <KnowledgeHeader 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <KnowledgeCategoriesSection 
          view={view}
          onViewChange={setView}
        />
        
        <AIKnowledgeDiscovery
          question={question}
          onQuestionChange={setQuestion}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContentDiscoverySection />
          <ContributionSection />
        </div>
        
        <KnowledgeAnalytics />
      </div>
    </MainLayout>
  );
};

export default KnowledgeManagement;
