import { Zap, Shield, TrendingUp, Eye, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    model: string;
    category: string;
    image: string | string[];
    capacity: number;
    capacityLabel: string;
    power: string;
    voltage: string;
    warranty: string;
    badge?: string;
    features: string[];
    animationInterval?: number;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <ImageWithFallback
            src={Array.isArray(product.image) ? (product.image[1] || product.image[0]) : product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
          />
          {product.badge && (
            <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-blue-600 text-white text-xs">
              {product.badge}
            </Badge>
          )}

          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="secondary" className="h-8 w-8 sm:h-9 sm:w-9 bg-white/90 hover:bg-white">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <Link to={`/products/${product.id}`}>
          <div className="mb-3">
            <h3 className="font-bold text-gray-900 mb-1 hover:text-blue-600 transition text-[18px]">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">{product.model}</p>
          </div>
        </Link>

        {/* Specifications */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 pb-4 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Zap className="h-3 w-3 text-blue-600" />
              <span className="text-xs text-gray-500">Capacity</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">{product.capacityLabel}</p>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-xs text-gray-500">Power</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">
              {product.power.includes('kW') ? product.power : `${product.power}W`}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Shield className="h-3 w-3 text-purple-600" />
              <span className="text-xs text-gray-500">Warranty</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">{product.warranty}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {product.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3">
          <Link to="/contact" className="w-full">
            <Button className="bg-blue-600 hover:bg-blue-700 text-sm w-full">
              <span className="hidden sm:inline">Get in touch</span>
              <span className="sm:hidden">Get in touch</span>
              <ArrowRight className="h-4 w-4 ml-1 sm:ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
