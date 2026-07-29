import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";
import heroImage from "figma:asset/27fbf51dd3bdeacfac524e1f7ee0368fab893f48.png";

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
      </div>

      <div 
        className="relative w-full px-4 sm:px-6 lg:px-8 h-full flex items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 40%' }}
      >
        {/* Semi-transparent overlay to ensure text readability */}
        
        
        <div className="max-w-2xl relative z-10 mx-auto lg:mx-0 lg:ml-[calc((100vw-1280px)/2)]">
          <motion.div
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advanced Energy Storage Solutions
          </motion.div>
          <motion.h1
            className="font-bold mb-3 text-[#ffffff] text-[36px] md:text-[64px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Power Your Future with Clean Energy
          </motion.h1>
          <motion.p
            className="text-xl mb-8 leading-relaxed text-[#ffffff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Discover cutting-edge battery storage systems designed for residential, commercial, and industrial applications. Maximize your energy independence with Power2Go.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">Explore Products<ArrowRight className="ml-2 h-5 w-5" /></Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}