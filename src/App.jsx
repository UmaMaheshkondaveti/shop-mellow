
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
import Products from '@/components/Products';
import Cart from '@/components/Cart';
import { CartProvider } from '@/contexts/CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
