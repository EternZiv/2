import { Zap, Shield, Leaf, Smartphone, Award, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Advanced lithium-ion technology delivering superior energy density and efficiency",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Multiple protection systems including BMS, thermal management, and fire prevention",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable energy solutions reducing carbon footprint and energy costs",
  },
  {
    icon: Smartphone,
    title: "Smart Monitoring",
    description: "Real-time monitoring and control through mobile app and web interface",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "International certifications including CE, UL, and IEC standards",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Modular design allows easy expansion as your energy needs grow",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Power2Go
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading technology and innovation for reliable energy storage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}