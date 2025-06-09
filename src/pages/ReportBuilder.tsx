
import React, { useState, useEffect } from "react";
import { ReportBuilderHeader } from "@/components/ReportBuilder/ReportBuilderHeader";
import { ReportCanvas } from "@/components/ReportBuilder/ReportCanvas";
import { TemplateGallery } from "@/components/ReportBuilder/TemplateGallery";
import { DataSourceModal } from "@/components/ReportBuilder/DataSourceModal";
import { AIReportGenerator } from "@/components/ReportBuilder/AIReportGenerator";
import { SchedulingSection } from "@/components/ReportBuilder/SchedulingSection";

export default function ReportBuilder() {
  const [activeReport, setActiveReport] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [configuringDataSource, setConfiguringDataSource] = useState(false);
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [recentReports, setRecentReports] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const createNewReport = () => {
    const newReport = {
      id: Date.now(),
      name: "Untitled Report",
      sections: [],
      createdAt: new Date()
    };
    setActiveReport(newReport);
  };

  const openTemplateGallery = () => {
    setShowTemplates(true);
  };

  const generateWithAI = (prompt) => {
    setShowAIGenerator(true);
  };

  const openReportLibrary = () => {
    // Implementation for report library
    console.log("Opening report library");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ReportBuilderHeader
        onCreateNew={createNewReport}
        onOpenTemplates={openTemplateGallery}
        onOpenLibrary={openReportLibrary}
        onGenerateWithAI={generateWithAI}
        recentReports={recentReports}
      />
      
      {activeReport && (
        <ReportCanvas
          report={activeReport}
          selectedComponent={selectedComponent}
          onSelectComponent={setSelectedComponent}
          onConfigureDataSource={() => setConfiguringDataSource(true)}
        />
      )}
      
      <TemplateGallery
        show={showTemplates}
        onClose={() => setShowTemplates(false)}
        onUseTemplate={(template) => {
          setActiveReport(template);
          setShowTemplates(false);
        }}
      />
      
      <DataSourceModal
        show={configuringDataSource}
        onClose={() => setConfiguringDataSource(false)}
        onSave={(dataSource) => {
          console.log("Data source configured:", dataSource);
          setConfiguringDataSource(false);
        }}
      />
      
      <AIReportGenerator
        show={showAIGenerator}
        onClose={() => setShowAIGenerator(false)}
        onGenerate={(config) => {
          console.log("Generating AI report:", config);
          setShowAIGenerator(false);
        }}
      />
    </div>
  );
}
