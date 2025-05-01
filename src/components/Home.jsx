
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold leading-tight text-primary md:text-6xl">
                Discover Your Style
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Explore our curated collection of modern and stylish products.
                Quality meets design in every piece.
              </p>
              <Button
                asChild
                className="mt-8"
                size="lg"
              >
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] w-full"
            >
              <img 
                className="absolute inset-0 h-full w-full rounded-lg object-cover shadow-2xl"
                alt="Hero image showcasing featured products"
               src="https://images.unsplash.com/photo-1621699909142-1ac24af3f8ba" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary">Featured Categories</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Electronics category"
               src="https://images.unsplash.com/photo-1537452881174-ffd33c48c682" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end">
                <h3 className="text-2xl font-bold text-white">Electronics</h3>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Fashion category"
               src="https://images.unsplash.com/photo-1580137009935-79e9440005f2" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end">
                <h3 className="text-2xl font-bold text-white">Fashion</h3>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Home & Living category"
               src="https://images.unsplash.com/photo-1687075196974-ea71a55cc9f8" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end">
                <h3 className="text-2xl font-bold text-white">Home & Living</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
