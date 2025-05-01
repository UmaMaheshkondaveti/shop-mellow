
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ProductFilters = ({ 
  selectedCategory,
  selectedGender,
  selectedType,
  onCategoryChange,
  onGenderChange,
  onTypeChange,
  categories,
  types
}) => {
  return (
    <div className="space-y-6">
      {/* Gender Filter */}
      <div>
        <h3 className="mb-3 font-semibold">Gender</h3>
        <div className="flex flex-wrap gap-2">
          {['All', 'Men', 'Women', 'Unisex'].map((gender) => (
            <Button
              key={gender}
              variant={selectedGender === gender ? "default" : "outline"}
              size="sm"
              onClick={() => onGenderChange(gender)}
              className="capitalize"
            >
              {gender}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="mb-3 font-semibold">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div>
        <h3 className="mb-3 font-semibold">Type</h3>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              size="sm"
              onClick={() => onTypeChange(type)}
              className="capitalize"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
