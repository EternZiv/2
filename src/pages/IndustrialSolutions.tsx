import { useState } from "react";
import { ProductFilters } from "../components/ProductFilters";
import { ProductGrid } from "../components/ProductGrid";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";

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
        <div className="flex justify-end items-center mb-8">
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </Button>
        </div>

        {/* Mobile Filters Overlay */}
        {showFilters && (
          <div
            className="fixed inset-0 bg-black/50 z-[100] lg:hidden"
            onClick={() => setShowFilters(false)}
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          />
        )}

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
            <ProductGrid filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}