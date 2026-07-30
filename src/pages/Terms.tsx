import { FileText, Book, Shield, AlertTriangle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <Book className="w-12 h-12 md:w-16 md:h-16 text-blue-100 animate-pulse" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl">
            Governing rules and warranty terms of use
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h2>
            <p className="leading-relaxed">
              These Terms of Service govern your use of the Power2Go.Energy website and outline the contractual warranty rules under which Power2Go Energy Private Limited BESS units are registered and serviced.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Warranty Activation Rules
            </h2>
            <p className="leading-relaxed mb-4">
              All Power2Go residential, commercial, and portable products carry a comprehensive manufacturer warranty, subject to these activation requirements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Timely Registration:</strong> Warranty must be registered through this website within thirty (30) days of the purchase date.</li>
              <li><strong>Accurate Details:</strong> The serial number, purchase date, and dealer details submitted must match the official sales invoice.</li>
              <li><strong>Certified Installation:</strong> Residential and commercial systems must be installed by a Power2Go certified installer. Self-installation of high-voltage systems voids all warranty protections.</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
              Warranty Exclusions
            </h2>
            <p className="leading-relaxed mb-4">
              The warranty covers only hardware manufacturing defects under normal operating conditions. It does not cover damage resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Grid fluctuations, lightning strikes, flooding, or other acts of god.</li>
              <li>Incorrect configuration, overloading, or integration with incompatible third-party BESS components.</li>
              <li>Attempted repairs, changes, or services performed by unauthorized personnel.</li>
              <li>Normal wear-and-tear or battery degradation exceeding normal cycles specified in the datasheet.</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-600" />
              Use of Platform
            </h2>
            <p className="leading-relaxed">
              You agree to use this platform only for lawful purposes, such as checking your warranty, managing your customer profile, or contacting our team. Any attempt to scrape warranty data, brute-force admin routes, or submit fraudulent claims is strictly prohibited and will result in permanent service suspension.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Legal Jurisdiction</h3>
            <p className="text-blue-800 text-sm">
              These terms are governed by and construed in accordance with the corporate laws of the Islamic Republic of Pakistan. Any dispute arising from warranty claims shall be resolved in Lahore or Karachi courts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
