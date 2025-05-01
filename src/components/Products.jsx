
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import ProductFilters from '@/components/ProductFilters';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = ['All', 'Clothing', 'Electronics', 'Jewelry', 'Accessories'];
  const types = ['All', 'Topwear', 'Bottomwear', 'Footwear', 'Accessories'];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      let data = await response.json();
      
      // Enhance products with additional properties
      data = data.map(product => ({
        ...product,
        gender: assignGender(product),
        type: assignType(product),
      }));

      // Add more products with different categories
      const additionalProducts = generateAdditionalProducts();
      data = [...data, ...additionalProducts];

      setProducts(data);
      setLoading(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch products. Please try again later.',
        variant: 'destructive',
      });
      setLoading(false);
    }
  };

  const assignGender = (product) => {
    const title = product.title.toLowerCase();
    if (title.includes('men')) return 'Men';
    if (title.includes('women')) return 'Women';
    return 'Unisex';
  };

  const assignType = (product) => {
    const title = product.title.toLowerCase();
    if (title.includes('jacket') || title.includes('shirt') || title.includes('t-shirt')) return 'Topwear';
    if (title.includes('pants') || title.includes('jeans') || title.includes('shorts')) return 'Bottomwear';
    if (title.includes('shoes') || title.includes('sneakers')) return 'Footwear';
    return 'Accessories';
  };

  const generateAdditionalProducts = () => {
    return [
      {
        id: 21,
        title: "Men's Premium Denim Jacket",
        price: 89.99,
        description: "Stylish denim jacket for men",
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef",
        gender: "Men",
        type: "Topwear"
      },
      {
        id: 22,
        title: "Women's Yoga Pants",
        price: 49.99,
        description: "Comfortable yoga pants for women",
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8",
        gender: "Women",
        type: "Bottomwear"
      },
      {
        id: 23,
        title: "Unisex Running Shoes",
        price: 79.99,
        description: "Professional running shoes",
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        gender: "Unisex",
        type: "Footwear"
      },
      // Add more products as needed
    ];
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesGender = selectedGender === 'All' || product.gender === selectedGender;
    const matchesType = selectedType === 'All' || product.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesGender && matchesType;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <h1 className="text-3xl font-bold text-primary">Our Products</h1>
            <div className="flex w-full gap-4 sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </Button>
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg border bg-white p-6 shadow-sm"
            >
              <ProductFilters
                selectedCategory={selectedCategory}
                selectedGender={selectedGender}
                selectedType={selectedType}
                onCategoryChange={setSelectedCategory}
                onGenderChange={setSelectedGender}
                onTypeChange={setSelectedType}
                categories={categories}
                types={types}
              />
            </motion.div>
          )}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="product-card group"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {product.gender}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {product.type}
                  </span>
                </div>
                <h3 className="line-clamp-2 font-semibold">{product.title}</h3>
                <p className="text-lg font-bold text-primary">
                  ${product.price.toFixed(2)}
                </p>
                <Button
                  onClick={() => addToCart(product)}
                  className="mt-2 w-full"
                >
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
