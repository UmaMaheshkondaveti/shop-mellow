
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const MiniCart = ({ onClose }) => {
  const { cart, removeFromCart, getCartTotal } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="cart-dropdown"
    >
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {cart.length === 0 ? (
        <div className="py-8 text-center text-gray-500">
          Your cart is empty
        </div>
      ) : (
        <>
          <div className="max-h-96 overflow-auto py-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="line-clamp-1 font-medium">{item.title}</h3>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-medium">Subtotal:</span>
              <span className="text-lg font-bold">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex gap-4">
              <Button
                asChild
                className="flex-1"
                onClick={onClose}
              >
                <Link to="/cart">View Cart</Link>
              </Button>
              <Button
                className="flex-1"
                onClick={onClose}
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default MiniCart;
