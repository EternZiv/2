import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";

interface ProductFiltersProps {
  filters: {
    category: string;
    capacity: string;
    sortBy: string;
  };
  setFilters: (filters: { category: string; capacity: string; sortBy: string }) => void;
}

export function ProductFilters({ filters, setFilters }: ProductFiltersProps) {
  const updateFilter = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <Card className="p-4 sm:p-6 lg:sticky lg:top-24 border-0 lg:border">
      <h2 className="text-xl font-bold text-gray-900 mb-6 hidden lg:block">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
        <RadioGroup value={filters.category} onValueChange={(val) => updateFilter("category", val)}>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="all" id="cat-all" />
            <Label htmlFor="cat-all" className="cursor-pointer">All Products</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="residential" id="cat-residential" />
            <Label htmlFor="cat-residential" className="cursor-pointer">Residential</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="commercial" id="cat-commercial" />
            <Label htmlFor="cat-commercial" className="cursor-pointer">Commercial</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="portable" id="cat-portable" />
            <Label htmlFor="cat-portable" className="cursor-pointer">Portable</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator className="my-6" />

      {/* Capacity Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Capacity</h3>
        <RadioGroup value={filters.capacity} onValueChange={(val) => updateFilter("capacity", val)}>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="all" id="cap-all" />
            <Label htmlFor="cap-all" className="cursor-pointer">All Capacities</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="small" id="cap-small" />
            <Label htmlFor="cap-small" className="cursor-pointer">Under 5 kWh</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="medium" id="cap-medium" />
            <Label htmlFor="cap-medium" className="cursor-pointer">5-10 kWh</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="large" id="cap-large" />
            <Label htmlFor="cap-large" className="cursor-pointer">10-20 kWh</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="xlarge" id="cap-xlarge" />
            <Label htmlFor="cap-xlarge" className="cursor-pointer">Over 20 kWh</Label>
          </div>
        </RadioGroup>
      </div>



      <Separator className="my-6" />

      {/* Sort By */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
        <RadioGroup value={filters.sortBy} onValueChange={(val) => updateFilter("sortBy", val)}>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="featured" id="sort-featured" />
            <Label htmlFor="sort-featured" className="cursor-pointer">Featured</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="capacity" id="sort-capacity" />
            <Label htmlFor="sort-capacity" className="cursor-pointer">Capacity</Label>
          </div>
        </RadioGroup>
      </div>
    </Card>
  );
}