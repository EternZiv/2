import { useMemo, useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { products, FEATURED_DISPLAY_ORDER } from "../data/products";
import { supabase } from "../lib/supabase";
import type { Product } from "../lib/types";
import { Loader2 } from "lucide-react";

interface ProductGridProps {
  filters: {
    category: string;
    capacity: string;
    sortBy: string;
    search?: string;
  };
}

export function ProductGrid({ filters }: ProductGridProps) {
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadDbProducts() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("is_active", true)
          .order("sort_order", { ascending: true });

        if (!error && data && data.length > 0) {
          const mapped: Product[] = data.map((db: any) => ({
            id: db.product_id,
            name: db.name,
            model: db.model,
            category: db.category,
            image: db.image_data ? [db.image_data] : (db.image_url ? [db.image_url] : []),
            capacity: Number(db.capacity),
            capacityLabel: db.capacity_label,
            power: db.power,
            voltage: db.voltage,
            warranty: db.warranty,
            badge: db.badge,
            features: db.features || [],
            animationInterval: 5000,
            description: db.description,
            specifications: db.specifications,
            keyFeatures: db.detailed_key_features,
            applications: db.applications,
            what_included: db.what_included,
            warranty_support: db.warranty_support,
          }));
          setDbProducts(mapped);
        }
      } catch (err) {
        console.error("Failed to load products from database:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadDbProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    // Hybrid data layer: use database products if loaded, fallback to static products
    const activeProducts = dbProducts.length > 0 ? dbProducts : products;
    let result = [...activeProducts];

    // For static products, preserve the exact FEATURED_DISPLAY_ORDER design layout
    if (dbProducts.length === 0) {
      result = FEATURED_DISPLAY_ORDER.map(id => products.find(p => p.id === id)).filter(Boolean) as Product[];
    }

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

    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.model.toLowerCase().includes(query) ||
          (p.description && p.description.toLowerCase().includes(query))
      );
    }

    if (filters.sortBy === "capacity") {
      result.sort((a, b) => b.capacity - a.capacity);
    }

    return result;
  }, [filters, dbProducts]);

  if (isLoading && dbProducts.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-500 font-medium">Loading products...</span>
      </div>
    );
  }

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
          <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
