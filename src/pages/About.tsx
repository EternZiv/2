import { Target, Eye, Award, Users, Zap, Shield, Leaf, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import logo from "figma:asset/77747af3103ef2d86e83f2259cd8a89b07a206af.png";

export default function About() {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously advancing energy storage technology to meet tomorrow's challenges today."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Building trust through consistent performance and unwavering product quality."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to creating eco-friendly solutions that protect our planet."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Putting our customers first with exceptional service and support."
    }
  ];

  const stats = [
    { number: "99.9%", label: "Company Reliability" },
    { number: "A-Grade", label: "High-End Quality of Cells" },
    { number: "Advanced", label: "High-End Quality of BMS" },
    { number: "5 Years", label: "Warranty" }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Company Founded",
      description: "Launched with a mission to deliver reliable, forward-thinking energy solutions."
    },
    {
      year: "2024",
      title: "First Deployments",
      description: "Successfully completed our initial energy projects for residential and commercial clients."
    },
    {
      year: "2025",
      title: "Growth & Expansion",
      description: "Expanded our operations and built a growing presence across multiple regions."
    },
    {
      year: "2026",
      title: "Scaling Impact",
      description: "Continuing to scale installations and innovate to support the future of sustainable power."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex items-center gap-4">
            About 
            <img src={logo} alt="Power2Go" className="h-16 md:h-20 ml-[-12px] object-contain" />
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl">
            Leading the future of energy storage with innovative, reliable, and sustainable solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower individuals and businesses with cutting-edge energy storage solutions that enable energy independence, reduce costs, and contribute to a sustainable future for generations to come.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border border-cyan-200">
              <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the global leader in energy storage technology, creating a world where clean, reliable, and affordable energy is accessible to all, driving the transition to renewable energy worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Power2Go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Companies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Parent Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Power2Go is backed by industry-leading organizations with decades of expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Multinet</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Multinet Pakistan is one of Pakistan’s leading enterprise telecom and technology infrastructure companies, providing nationwide fiber connectivity, cloud, data center, cybersecurity, and managed IT solutions to businesses, banks, telecom operators, and large institutions. With an extensive optical fiber network covering more than 120 cities, the company specializes in enterprise-grade connectivity and digital infrastructure rather than consumer mobile services. Headquartered in Karachi, Multinet has expanded into Tier-3 data centers, cloud platforms, and digital transformation services, making it an important infrastructure player for industries requiring reliable connectivity, energy monitoring, and mission-critical systems.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border border-cyan-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Orient Power Pvt Ltd</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Orient Power Company Limited and its subsidiaries are among the country’s leading independent power producers (IPPs), with a diversified portfolio supplying energy to both the national and K-Electric grid through OPCL and OurSun. In addition, Shams Power, under PPAs, delivers energy solutions for commercial and industrial clients. OPCL is accelerating its transition toward renewable energy generation to address environmental concerns while meeting the growing energy demands of its customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to transform energy storage.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-8">
                  {/* Year badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                      {milestone.year.slice(2)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-sm text-blue-600 font-semibold mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-lg text-blue-50 mb-8">
            Discover how Power2Go can transform your energy experience with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}