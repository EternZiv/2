import { useState } from "react";
import { ProductFilters } from "../components/ProductFilters";
import { ProductGrid } from "../components/ProductGrid";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";

export default function PortableSolutions() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: "portable",
    capacity: "all",
    sortBy: "featured",
  });

  const handleFilterChange = (newFilters: typeof filters) => {
    // Keep category locked to portable
    setFilters({ ...newFilters, category: "portable" });
    // Auto-close filters on mobile after selection
    if (window.innerWidth < 1024) {
      setShowFilters(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white h-[375px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Portable Power Solutions
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-3xl">
            Compact, portable battery storage for on-the-go power and outdoor
            adventures
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full justify-center"
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
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

        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Filters Sidebar */}
          <aside
            className={`
              lg:block lg:static lg:w-64 lg:flex-shrink-0 lg:z-auto
              ${showFilters ? "block" : "hidden"}
            `}
            style={
              showFilters
                ? {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "320px",
                    maxWidth: "85vw",
                    backgroundColor: "white",
                    zIndex: 101,
                    overflowY: "auto",
                  }
                : undefined
            }
          >
            {showFilters && (
              <div className="lg:hidden flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
                <h2 className="text-lg font-bold">Filters</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(false)}
                >
                  Close
                </Button>
              </div>
            )}
            <ProductFilters filters={filters} setFilters={handleFilterChange} />
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <ProductGrid filters={filters} />
          </main>
        </div>
      </div>
    </div>
  );
}
