import { useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { products, FEATURED_DISPLAY_ORDER } from "../data/products";

interface ProductGridProps {
  filters: {
    category: string;
    capacity: string;
    sortBy: string;
  };
}

export function ProductGrid({ filters }: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    const displayOrder = FEATURED_DISPLAY_ORDER;
    let result = displayOrder.map(id => products.find(p => p.id === id)).filter(Boolean);

    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.capacity !== "all") {
      result = result.filter((p) => {
        if (filters.capacity === "small") return p.capacity < 5;
        if (filters.capacity === "medium") return p.capacity >= 5 && p.capacity < 10;
        if (filters.capacity === "large") return p.capacity >= 10 && p.capacity <= 20;
        if (filters.capacity === "xlarge") return p.capacity > 20;
        return true;
      });
    }

    if (filters.sortBy === "capacity") {
      result.sort((a, b) => b.capacity - a.capacity);
    }

    return result;
  }, [filters]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No products found matching your filters.</p>
          <p className="text-gray-400 mt-2">Try adjusting your filter criteria.</p>
        </div>
      )}
    </div>
  );
}
