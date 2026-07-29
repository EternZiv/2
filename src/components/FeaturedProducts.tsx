import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { ProductCard } from "./ProductCard";
import { motion } from "motion/react";
import { products, FEATURED_DISPLAY_ORDER } from "../data/products";

export function FeaturedProducts() {
  const displayOrder = FEATURED_DISPLAY_ORDER;
  const sortedProducts = displayOrder.map(id => products.find(p => p.id === id)).filter(Boolean);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most advanced and reliable energy storage systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/products">
            <Button variant="outline" size="lg" className="px-8">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
