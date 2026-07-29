import { useState, useMemo } from "react";
import { ProductFilters } from "../components/ProductFilters";
import { ProductCard } from "../components/ProductCard";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";
import { products } from "../data/products";

export default function IndustrialSolutions() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: "industrial",
    capacity: "all",
    sortBy: "featured",
  });

  const handleFilterChange = (newFilters: typeof filters) => {
    // Keep category locked to industrial
    setFilters({ ...newFilters, category: "industrial" });
    // Auto-close filters on mobile after selection
    if (window.innerWidth < 1024) {
      setShowFilters(false);
    }
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (product) => product.category === "industrial"
    );

    // Apply capacity filter
    if (filters.capacity !== "all") {
      result = result.filter((product) => product.capacityLabel === filters.capacity);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "capacity":
        result.sort((a, b) => b.capacity - a.capacity);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white h-[375px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Industrial Solutions
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-3xl">
            Ultra-high capacity energy storage systems for industrial facilities, data centers, and grid-scale applications
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-600">
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block lg:w-64 flex-shrink-0`}
          >
            <ProductFilters
              filters={filters}
              setFilters={handleFilterChange}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria.
                </p>
                <p className="text-gray-400 mt-2">
                  Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}