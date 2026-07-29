import { Battery, Building2, Factory, Home as HomeIcon, Zap, Shield, TrendingUp, Leaf } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function Solutions() {
  const solutions = [
    {
      icon: HomeIcon,
      title: "Residential Solutions",
      description: "Power your home with clean, reliable energy storage systems designed for everyday living.",
      features: [
        "Backup power during outages",
        "Solar integration",
        "Energy cost savings",
        "Smart home compatibility"
      ],
    },
    {
      icon: Building2,
      title: "Commercial Solutions",
      description: "Keep your business running smoothly with scalable energy storage for offices and retail spaces.",
      features: [
        "Demand charge reduction",
        "Peak shaving capabilities",
        "Uninterrupted operations",
        "Energy management systems"
      ]
    },
    {
      icon: Factory,
      title: "Industrial Solutions",
      description: "Heavy-duty energy storage systems engineered for manufacturing and industrial facilities.",
      features: [
        "High-capacity storage",
        "Load balancing",
        "Grid independence",
        "24/7 monitoring"
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Energy Independence",
      description: "Reduce reliance on the grid and take control of your energy usage."
    },
    {
      icon: Shield,
      title: "Reliable Backup",
      description: "Stay powered during outages with seamless battery backup systems."
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      description: "Lower your energy bills through smart storage and usage optimization."
    },
    {
      icon: Leaf,
      title: "Sustainable Future",
      description: "Reduce your carbon footprint with clean energy storage solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Energy Solutions for Every Need
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl">From homes to industrial facilities, we provide cutting-edge BESS energy storage solutions tailored to your requirements.</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy storage solutions designed for residential, commercial, and industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <solution.icon className="w-24 h-24 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Battery className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/products">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View Products
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Power2Go
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of modern energy storage technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our product range or contact our team to find the perfect energy solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
                Browse Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}