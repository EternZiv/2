import { motion } from "motion/react";
import { Wrench, Shield, Zap, HeadphonesIcon, CheckCircle2, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Link } from "react-router";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Installation & Setup",
      description: "Professional installation services by certified technicians to ensure optimal performance and safety.",
      features: [
        "Site inspection and assessment",
        "Professional installation",
        "System configuration",
        "Safety compliance check"
      ]
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Regular maintenance and 24/7 technical support to keep your energy storage system running smoothly.",
      features: [
        "Scheduled maintenance visits",
        "Performance monitoring",
        "Firmware updates",
        "Emergency support"
      ]
    },
    {
      icon: Zap,
      title: "System Optimization",
      description: "Maximize your energy savings with our expert system optimization and efficiency audits.",
      features: [
        "Energy usage analysis",
        "Performance optimization",
        "Cost savings report",
        "Upgrade recommendations"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Consultation Services",
      description: "Expert guidance to help you choose the right energy storage solution for your needs.",
      features: [
        "Free initial consultation",
        "Custom solution design",
        "ROI calculation",
        "Financing options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto">
              Comprehensive support for your energy storage journey from consultation to maintenance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warranty & Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our products come with comprehensive warranty coverage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 text-center h-full">
                <div className="text-4xl font-bold text-blue-600 mb-2">5 Years</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Product Warranty</h3>
                <p className="text-gray-600">
                  Comprehensive coverage on all components and parts
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-8 text-center h-full">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support Access</h3>
                <p className="text-gray-600">
                  Round-the-clock technical assistance when you need it
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 text-center h-full">
                <div className="text-4xl font-bold text-blue-600 mb-2">Free</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Installation</h3>
                <p className="text-gray-600">
                  Professional setup included with every purchase
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing a Service?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Our experts are ready to assist you with any questions about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/support">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Visit Support Center
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
