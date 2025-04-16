import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coffee, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from './types';

interface CartProps {
  onBack: () => void;
  cart: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
}

function Cart({ onBack, cart, updateQuantity }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={onBack}
              className="flex items-center space-x-2 text-amber-900 hover:text-amber-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Products</span>
            </motion.button>
            <div className="flex items-center space-x-2">
              <Coffee className="w-8 h-8 text-amber-800" />
              <h1 className="text-2xl font-bold text-amber-800 font-serif">Abyssinia</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-amber-900 mb-8 font-serif"
        >
          Your Cart
        </motion.h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-amber-700 text-xl mb-8">Your cart is empty</p>
            <motion.button
              onClick={onBack}
              className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="flex items-center p-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                        <p className="text-amber-700 text-sm mt-1">{item.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-4">
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {item.quantity === 1 ? <Trash2 className="w-5 h-5" /> : <Minus className="w-5 h-5" />}
                            </motion.button>
                            <span className="text-amber-900 font-semibold">{item.quantity}</span>
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Plus className="w-5 h-5" />
                            </motion.button>
                          </div>
                          <span className="text-xl font-bold text-amber-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-md p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold text-amber-900 mb-6">Order Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-amber-700">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-amber-700">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-amber-100 pt-4">
                    <div className="flex justify-between text-xl font-bold text-amber-900">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <motion.button
                    className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold mt-6"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Proceed to Checkout
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;