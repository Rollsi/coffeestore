import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, ArrowLeft, ShoppingCart, ShoppingBag } from 'lucide-react';
import { Product, CartItem } from './types';

const products: Product[] = [
  {
    id: 1,
    name: 'Yirgacheffe Reserve',
    description: 'Floral and bright with notes of bergamot and citrus',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80',
    origin: 'Yirgacheffe Region',
    roast: 'Light-Medium',
  },
  {
    id: 2,
    name: 'Sidamo Gold',
    description: 'Full-bodied with wine-like complexity and berry notes',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=800&q=80',
    origin: 'Sidamo Region',
    roast: 'Medium',
  },
  {
    id: 3,
    name: 'Harrar Wild',
    description: 'Bold and exotic with hints of blueberry and dark chocolate',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    origin: 'Harrar Region',
    roast: 'Medium-Dark',
  },
  {
    id: 4,
    name: 'Limu Altitude',
    description: 'Balanced and smooth with caramel and spice notes',
    price: 23.99,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
    origin: 'Limu Region',
    roast: 'Medium',
  },
  {
    id: 5,
    name: 'Guji Highland',
    description: 'Complex and aromatic with jasmine and honey notes',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    origin: 'Guji Zone',
    roast: 'Light',
  },
  {
    id: 6,
    name: 'Forest Blend',
    description: 'Rich and earthy with dark chocolate and spice notes',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=800&q=80',
    origin: 'Mixed Regions',
    roast: 'Dark',
  },
];

interface ProductsProps {
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
  onViewCart: () => void;
  cartItemCount: number;
}

function Products({ onBack, onAddToCart, onViewCart, cartItemCount }: ProductsProps) {
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
              <span>Back to Home</span>
            </motion.button>
            <div className="flex items-center space-x-2">
              <Coffee className="w-8 h-8 text-amber-800" />
              <h1 className="text-2xl font-bold text-amber-800 font-serif">Abyssinia</h1>
            </div>
            <motion.button
              onClick={onViewCart}
              className="flex items-center space-x-2 text-amber-900 hover:text-amber-700 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-amber-900 to-amber-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          >
            Our Premium Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-amber-100 text-lg max-w-2xl mx-auto"
          >
            Discover our carefully curated selection of Ethiopia's finest coffee beans,
            each telling a unique story of heritage and excellence.
          </motion.p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
                    <p className="text-amber-700 text-sm mb-2">{product.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-amber-800">${product.price}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-amber-600 mb-4">
                  <span>{product.origin}</span>
                  <span>{product.roast} Roast</span>
                </div>
                <motion.button
                  onClick={() => onAddToCart(product)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-amber-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-amber-800 transition-colors duration-300"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;