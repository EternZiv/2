import { Book, Download, FileText, Video, Code, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { jsPDF } from "jspdf";
import { useState } from "react";

export default function Documentation() {
  const [showResidentialOptions, setShowResidentialOptions] = useState(false);

  const handleDownload = (fileName: string, fileFormat: string) => {
    if (fileFormat === 'PDF') {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text(fileName, 20, 30);
      doc.setFontSize(11);
      const lines = [
        "",
        "Document Contents:",
        "- Product Overview",
        "- Technical Specifications",
        "- Installation Instructions",
        "- Safety Guidelines",
        "- Maintenance Procedures",
        "- Troubleshooting Guide",
        "- Warranty Information",
        "",
        "For more information, visit www.power2go.energy",
        "Contact: support@power2go.energy",
        `© ${new Date().getFullYear()} Power2Go. All rights reserved.`,
      ];
      let y = 50;
      lines.forEach((line) => { doc.text(line, 20, y); y += 8; });
      doc.save(`${fileName.replace(/\s+/g, '_')}.pdf`);
    } else if (fileFormat === 'ZIP') {
      const blob = new Blob(['This would be a ZIP file with SDK documentation and examples.'], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName.replace(/\s+/g, '_')}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } else if (fileFormat === 'Video') {
      alert(`Video "${fileName}" would be downloaded in production.`);
    }
  };

  const documentSections = [
    {
      icon: Book,
      title: "User Manuals",
      description: "Comprehensive guides for all Power2Go products",
      documents: [
        { name: "Residential System User Manual", size: "2.4 MB", format: "PDF" },
        { name: "Commercial System User Manual", size: "3.1 MB", format: "PDF" },
        { name: "Industrial System User Manual", size: "4.2 MB", format: "PDF" },
        { name: "Portable System User Manual", size: "1.8 MB", format: "PDF" },
      ]
    },
    {
      icon: FileText,
      title: "Technical Specifications",
      description: "Detailed technical documentation and datasheets",
      documents: [
        { name: "Battery Specifications", size: "1.2 MB", format: "PDF" },
        { name: "Inverter Technical Specs", size: "1.5 MB", format: "PDF" },
        { name: "BMS Technical Documentation", size: "2.1 MB", format: "PDF" },
        { name: "System Architecture Guide", size: "3.4 MB", format: "PDF" },
      ]
    },
    {
      icon: Code,
      title: "API Documentation",
      description: "Integration guides for developers",
      documents: [
        { name: "REST API Reference", size: "890 KB", format: "PDF" },
        { name: "Monitoring API Guide", size: "1.1 MB", format: "PDF" },
        { name: "Mobile App SDK", size: "2.7 MB", format: "ZIP" },
        { name: "Integration Examples", size: "540 KB", format: "PDF" },
      ]
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      documents: [
        { name: "System Setup Tutorial", size: "45 min", format: "Video" },
        { name: "Mobile App Walkthrough", size: "18 min", format: "Video" },
        { name: "Maintenance Procedures", size: "32 min", format: "Video" },
        { name: "Troubleshooting Guide", size: "25 min", format: "Video" },
      ]
    },
  ];

  const quickLinks = [
    { title: "Getting Started Guide", category: "Beginner" },
    { title: "Safety Guidelines", category: "Important" },
    { title: "Software Updates", category: "Updates" },
    { title: "Certification Documents", category: "Compliance" },
    { title: "Product Comparisons", category: "Reference" },
    { title: "Release Notes", category: "Updates" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <Book className="w-12 h-12 md:w-16 md:h-16" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Documentation</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl">
            Everything you need to know about Power2Go energy storage systems
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
                <div
                  key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
              >
                  <div className="text-xs text-blue-600 font-semibold mb-1">{link.category}</div>
                  <div className="text-sm font-medium text-gray-900">{link.title}</div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {documentSections.map((section, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {section.documents.map((doc, docIndex) => (
                    <div
                      key={docIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">{doc.name}</div>
                          <div className="text-sm text-gray-500">
                            {doc.format} • {doc.size}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => {
                          if (doc.name === "Residential System User Manual") {
                            setShowResidentialOptions(true);
                          } else {
                            handleDownload(doc.name, doc.format);
                          }
                        }}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Additional Help?
          </h2>
          <p className="text-lg text-blue-50 mb-8">
            Our support team is ready to assist you with any questions about our products and documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Contact Support
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Live Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Residential System Options Dialog */}
      <Dialog open={showResidentialOptions} onOpenChange={setShowResidentialOptions}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select System Capacity</DialogTitle>
            <DialogDescription>
              Choose the capacity for your residential system user manual
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Button
              className="w-full h-20 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              onClick={() => {
                handleDownload("Residential System User Manual - 5kWh", "PDF");
                setShowResidentialOptions(false);
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="font-bold">5kWh</span>
                <span className="text-sm text-blue-50">Residential System Manual</span>
              </div>
            </Button>
            <Button
              className="w-full h-20 text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
              onClick={() => {
                handleDownload("Residential System User Manual - 25kWh", "PDF");
                setShowResidentialOptions(false);
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="font-bold">25kWh</span>
                <span className="text-sm text-blue-50">Residential System Manual</span>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}