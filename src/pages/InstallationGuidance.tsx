import { Wrench, AlertTriangle, CheckCircle, Settings, Shield, FileText, PlayCircle, Users } from "lucide-react";
import { Button } from "../components/ui/button";

export default function InstallationGuidance() {
  const installationSteps = [
    {
      step: "1",
      title: "Pre-Installation Assessment",
      description: "Evaluate your site and energy requirements",
      items: [
        "Assess available installation space and structural capacity",
        "Determine energy storage capacity requirements",
        "Review electrical infrastructure and compatibility",
        "Obtain necessary permits and approvals"
      ]
    },
    {
      step: "2",
      title: "Safety Preparation",
      description: "Ensure safe installation environment",
      items: [
        "Verify all electrical circuits are properly labeled",
        "Ensure adequate ventilation in installation area",
        "Check for proper grounding infrastructure",
        "Prepare emergency shutdown procedures"
      ]
    },
    {
      step: "3",
      title: "Mounting & Positioning",
      description: "Secure physical installation",
      items: [
        "Install mounting brackets using provided hardware",
        "Position battery modules ensuring proper clearances",
        "Verify level installation using spirit level",
        "Secure all units according to manufacturer specifications"
      ]
    },
    {
      step: "4",
      title: "Electrical Connections",
      description: "Connect system components safely",
      items: [
        "Connect battery modules in series/parallel configuration",
        "Wire inverter to battery management system",
        "Connect to main electrical panel with proper breakers",
        "Install monitoring and communication cables"
      ]
    },
    {
      step: "5",
      title: "System Configuration",
      description: "Configure and test the system",
      items: [
        "Power on the system following startup sequence",
        "Configure BMS parameters via control panel",
        "Set up monitoring app and network connectivity",
        "Verify all safety mechanisms are functioning"
      ]
    },
    {
      step: "6",
      title: "Testing & Commissioning",
      description: "Final verification and handover",
      items: [
        "Perform load testing and charge/discharge cycles",
        "Verify monitoring data accuracy",
        "Document all installation parameters",
        "Provide customer training on system operation"
      ]
    }
  ];

  const safetyRequirements = [
    {
      icon: Shield,
      title: "Certified Installer Required",
      description: "Installation must be performed by certified electricians with battery system experience."
    },
    {
      icon: AlertTriangle,
      title: "Safety Equipment",
      description: "Use proper PPE including insulated gloves, safety glasses, and non-conductive tools."
    },
    {
      icon: FileText,
      title: "Follow Local Codes",
      description: "Comply with all local electrical codes, building regulations, and safety standards."
    },
    {
      icon: Users,
      title: "Two-Person Installation",
      description: "Always have at least two qualified persons present during installation."
    }
  ];

  const tools = [
    "Torque wrench (calibrated)",
    "Digital multimeter",
    "Wire strippers and crimpers",
    "Spirit level",
    "Drill with appropriate bits",
    "Cable ties and management tools",
    "Insulated hand tools",
    "Safety equipment (PPE)"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <Wrench className="w-12 h-12 md:w-16 md:h-16" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Installation Guidance</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl">
            Professional installation guidelines for Power2Go energy storage systems
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="bg-orange-50 border-l-4 border-orange-500 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Professional Installation Required</h3>
              <p className="text-gray-700">
                Power2Go energy storage systems must be installed by certified professionals. Improper installation may void warranty and create safety hazards. This guide is for reference only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Safety Requirements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyRequirements.map((req, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <req.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{req.title}</h3>
                <p className="text-gray-600">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <Settings className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Required Tools & Equipment</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Installation Process
          </h2>
          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorial CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Watch Installation Videos
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Access our comprehensive video library with step-by-step installation tutorials for all Power2Go systems.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                <PlayCircle className="w-5 h-5 mr-2" />
                View Video Tutorials
              </Button>
            </div>
            <div className="w-full md:w-auto">
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <PlayCircle className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                <p className="text-center text-gray-300">15+ Professional Installation Videos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Installation Support?
          </h2>
          <p className="text-lg text-blue-50 mb-8">
            Our certified installation partners are available to help with your Power2Go system installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Find Certified Installer
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}