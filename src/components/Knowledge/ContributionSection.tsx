
import { FileText, MessageSquare, Upload, Video, Monitor, Camera, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ContributionSection() {
  const topContributors = [
    { id: 1, name: "Alice Johnson", avatar: "/placeholder.svg", contributions: 45, rank: 1 },
    { id: 2, name: "Bob Smith", avatar: "/placeholder.svg", contributions: 38, rank: 2 },
    { id: 3, name: "Carol Davis", avatar: "/placeholder.svg", contributions: 32, rank: 3 }
  ];

  const documentsBeingEdited = [
    {
      id: 1,
      title: "API Documentation v2.1",
      type: "documentation",
      editors: [
        { id: 1, name: "Alice", avatar: "/placeholder.svg" },
        { id: 2, name: "Bob", avatar: "/placeholder.svg" }
      ]
    },
    {
      id: 2,
      title: "Remote Work Guidelines",
      type: "policy",
      editors: [
        { id: 3, name: "Carol", avatar: "/placeholder.svg" }
      ]
    }
  ];

  const openQuestions = 12;
  const latestQuestion = {
    preview: "How do I set up the development environment on a new Mac"
  };

  const getDocIcon = (type: string) => {
    switch (type) {
      case 'documentation': return '📖';
      case 'policy': return '📋';
      default: return '📄';
    }
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Contribute Knowledge</h2>
        <div className="space-y-1">
          <p className="text-sm font-medium">Top Contributors</p>
          <div className="flex -space-x-1">
            {topContributors.map((contributor) => (
              <div key={contributor.id} className="relative">
                <Avatar className="h-8 w-8 border-2 border-background">
                  <AvatarImage src={contributor.avatar} />
                  <AvatarFallback className="text-xs">{contributor.name[0]}</AvatarFallback>
                </Avatar>
                {contributor.rank <= 3 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
                    {contributor.rank}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contribution Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Write Article */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold">Write Article</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Share your expertise in a detailed article
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="cursor-pointer">How-To Guide</Badge>
            <Badge variant="outline" className="cursor-pointer">Best Practices</Badge>
            <Badge variant="outline" className="cursor-pointer">Troubleshooting</Badge>
          </div>
          <Button className="w-full">Start Writing</Button>
        </div>

        {/* Answer Questions */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold">Answer Questions</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Help colleagues by answering open questions
          </p>
          <div className="space-y-2 mb-4">
            <p className="text-sm font-medium">{openQuestions} questions need answers</p>
            <p className="text-xs text-muted-foreground">"{latestQuestion.preview}..."</p>
          </div>
          <Button variant="outline" className="w-full">Browse Questions</Button>
        </div>

        {/* Upload Documents */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <div className="flex items-center gap-3 mb-3">
            <Upload className="h-5 w-5 text-purple-600" />
            <h3 className="font-semibold">Upload Documents</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Share presentations, guides, or resources
          </p>
          <div className="border-2 border-dashed border-muted rounded-lg p-4 text-center mb-4">
            <Upload className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-1">Drag files here or click to browse</p>
            <p className="text-xs text-muted-foreground">PDF, DOC, PPT, XLS, TXT, MD</p>
          </div>
        </div>

        {/* Record Tutorial */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <div className="flex items-center gap-3 mb-3">
            <Video className="h-5 w-5 text-orange-600" />
            <h3 className="font-semibold">Record Tutorial</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Create video tutorials and walkthroughs
          </p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              <Monitor className="h-4 w-4 mr-2" />
              Screen Recording
            </Button>
            <Button variant="outline" className="w-full">
              <Camera className="h-4 w-4 mr-2" />
              Webcam
            </Button>
          </div>
        </div>
      </div>

      {/* Collaborative Editing */}
      <div className="p-6 border border-border rounded-lg bg-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Documents Being Edited</h3>
          <Button variant="ghost" size="sm">View All →</Button>
        </div>
        <div className="space-y-3">
          {documentsBeingEdited.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-lg">{getDocIcon(doc.type)}</span>
                <div>
                  <h4 className="font-medium text-sm">{doc.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {doc.editors.length} editor{doc.editors.length !== 1 ? 's' : ''} active
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {doc.editors.map((editor) => (
                    <div key={editor.id} className="relative">
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarImage src={editor.avatar} />
                        <AvatarFallback className="text-xs">{editor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-0 -right-0 w-3 h-3 bg-green-500 rounded-full border border-background" />
                    </div>
                  ))}
                </div>
                <Button size="sm">Join Editing</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
