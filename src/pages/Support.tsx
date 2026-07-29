import { Book, Download, MessageCircle, Phone, Mail, Clock, Search, FileText, Video, HelpCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link } from "react-router";
import { useState } from "react";

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Talk to our expert team",
      detail: "+92-300-1234567",
      availability: "Mon-Fri, 9 AM - 6 PM PKT"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed assistance",
      detail: "support@power2go.energy",
      availability: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help online",
      detail: "Start Chat",
      availability: "Mon-Sat, 9 AM - 8 PM PKT"
    }
  ];

  const resources = [
    {
      icon: Book,
      title: "User Manuals",
      description: "Comprehensive guides for all our products with installation and operation instructions.",
      action: "Download Manuals"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides covering installation, setup, and troubleshooting.",
      action: "Watch Videos"
    },
    {
      icon: FileText,
      title: "Technical Specs",
      description: "Detailed technical specifications and datasheets for all product models.",
      action: "View Specs"
    },
    {
      icon: Download,
      title: "Software & Firmware",
      description: "Latest software updates, mobile apps, and firmware for your energy systems.",
      action: "Download Now"
    }
  ];

  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Professional installation typically takes 4-8 hours depending on the system size and complexity. Our certified installers will work efficiently to minimize disruption."
    },
    {
      question: "What warranty coverage do you offer?",
      answer: "All Power2Go systems come with a comprehensive 10-year warranty covering defects and performance. Extended warranty options are available up to 15 years."
    },
    {
      question: "Can I expand my system later?",
      answer: "Yes! Our modular systems are designed for easy expansion. You can add additional battery modules as your energy needs grow."
    },
    {
      question: "What maintenance is required?",
      answer: "Power2Go systems require minimal maintenance. We recommend an annual inspection by a certified technician and regular monitoring through our mobile app."
    },
    {
      question: "How do I monitor my system?",
      answer: "Use the Power2Go mobile app (iOS and Android) to monitor your system in real-time, view energy usage, and receive alerts."
    },
    {
      question: "What happens during a power outage?",
      answer: "Your Power2Go system automatically switches to battery power within milliseconds, keeping your essential appliances running seamlessly."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Support Center
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mb-8">
            We're here to help with installation, troubleshooting, and everything in between.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-12 pr-4 py-6 text-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to reach our support team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <channel.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {channel.description}
                </p>
                <div className="text-lg font-semibold text-blue-600 mb-2">
                  {channel.detail}
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {channel.availability}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Downloads
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access manuals, videos, and technical documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {resource.description}
                </p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  {resource.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Need Help?
          </h2>
          <p className="text-lg text-blue-50 mb-8">
            Our support team is ready to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Contact Support
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
