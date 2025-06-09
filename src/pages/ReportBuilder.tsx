
import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { ReportBuilderHeader } from "@/components/ReportBuilder/ReportBuilderHeader";
import { ReportCanvas } from "@/components/ReportBuilder/ReportCanvas";
import { TemplateGallery } from "@/components/ReportBuilder/TemplateGallery";
import { AIReportGenerator } from "@/components/ReportBuilder/AIReportGenerator";
import { DataSourceModal } from "@/components/ReportBuilder/DataSourceModal";

const ReportBuilder = () => {
  const [activeReport, setActiveReport] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [configuringDataSource, setConfiguringDataSource] = useState(false);

  const createNewReport = () => {
    const newReport = {
      id: Date.now(),
      title: "Untitled Report",
      sections: [],
      createdAt: new Date(),
    };
    setActiveReport(newReport);
  };

  const openTemplateGallery = () => setShowTemplates(true);
  const closeTemplateGallery = () => setShowTemplates(false);
  
  const openAIGenerator = () => setShowAIGenerator(true);
  const closeAIGenerator = () => setShowAIGenerator(false);

  const openDataSourceModal = () => setConfiguringDataSource(true);
  const closeDataSourceModal = () => setConfiguringDataSource(false);

  return (
    <MainLayout>
      <div className="h-full flex flex-col">
        <ReportBuilderHeader
          onCreateNew={createNewReport}
          onOpenTemplates={openTemplateGallery}
          onOpenAI={openAIGenerator}
        />
        
        {activeReport ? (
          <ReportCanvas
            report={activeReport}
            onUpdateReport={setActiveReport}
            onConfigureDataSource={openDataSourceModal}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-muted/20">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-muted-foreground">
                No Report Selected
              </h2>
              <p className="text-muted-foreground">
                Create a new report or select from templates to get started
              </p>
            </div>
          </div>
        )}

        <TemplateGallery
          show={showTemplates}
          onClose={closeTemplateGallery}
          onUseTemplate={(template) => {
            setActiveReport(template);
            closeTemplateGallery();
          }}
        />

        <AIReportGenerator
          show={showAIGenerator}
          onClose={closeAIGenerator}
          onGenerateReport={(report) => {
            setActiveReport(report);
            closeAIGenerator();
          }}
        />

        <DataSourceModal
          show={configuringDataSource}
          onClose={closeDataSourceModal}
        />
      </div>
    </MainLayout>
  );
};

export default ReportBuilder;
