import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coffee, Leaf, Star, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Products from './Products';
import Cart from './Cart';
import { CartItem } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  if (currentPage === 'products') {
    return <Products onBack={() => setCurrentPage('home')} onAddToCart={addToCart} onViewCart={() => setCurrentPage('cart')} cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />;
  }

  if (currentPage === 'cart') {
    return <Cart onBack={() => setCurrentPage('products')} cart={cart} updateQuantity={updateQuantity} />;
  }

  return (
    <div className="relative overflow-x-hidden">
      {/* Cursor Follower */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <Coffee className="text-amber-700" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed w-full z-40 bg-white/90 backdrop-blur-sm border-b border-amber-100"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Coffee className="w-8 h-8 text-amber-800" />
            <h1 className="text-3xl font-bold text-amber-800 font-serif">Abyssinia</h1>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Menu', 'Our Story', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-amber-900 hover:text-amber-600 relative group"
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2000&q=80"
              alt="Coffee beans background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mb-8"
            >
              <Coffee className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
              Ancient Ethiopian
              <br />
              Coffee Excellence
            </h1>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Journey through centuries of coffee heritage, from the mystical highlands 
              of ancient Abyssinia to your cup
            </p>
            <motion.button
              onClick={() => setCurrentPage('products')}
              className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Our Collection</span>
              <span className="absolute inset-0 bg-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Coffee className="w-12 h-12" />, stat: '30+', text: 'Unique Blends', desc: 'Carefully crafted coffee varieties' },
              { icon: <Leaf className="w-12 h-12" />, stat: '100%', text: 'Organic', desc: 'Pure Ethiopian highland coffee' },
              { icon: <Star className="w-12 h-12" />, stat: '1200+', text: 'Years', desc: 'Of coffee cultivation heritage' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="text-amber-700 mb-4 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-4xl font-bold text-amber-900 mb-2">{item.stat}</h3>
                <p className="text-xl font-semibold text-amber-800 mb-2">{item.text}</p>
                <p className="text-amber-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <motion.section
        ref={ref}
        className="py-24 bg-white"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-amber-900 mb-6 font-serif">Our Heritage</h2>
                <p className="text-amber-700 mb-6 leading-relaxed">
                  In the ancient lands of Abyssinia, now Ethiopia, our story begins with a legacy that spans over a millennium. 
                  From the mystical discovery of coffee by dancing goats to our modern-day artisanal roasting techniques, 
                  we carry forward the rich traditions of Ethiopian coffee cultivation.
                </p>
                <p className="text-amber-700 mb-8 leading-relaxed">
                  Each bean we select tells a story of our highland terroir, careful cultivation, 
                  and generations of expertise in bringing you the finest coffee experience.
                </p>
                <motion.button
                  className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Discover Our Story</span>
                  <span className="absolute inset-0 bg-amber-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.button>
              </motion.div>
            </div>
            <motion.div
              className="relative h-[500px] group"
              style={{ perspective: "1000px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1000&q=80"
                alt="Ethiopian coffee farm"
                className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <motion.div 
                className="flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Coffee className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold font-serif">Abyssinia</h3>
              </motion.div>
              <p className="text-amber-200 leading-relaxed">
                Bringing the ancient coffee traditions of Ethiopia to the modern world, 
                one carefully crafted cup at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-amber-200">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Our Coffee', 'Visit Us', 'Blog'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-amber-300 hover:text-white flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                    >
                      <Coffee className="w-4 h-4" />
                      <span>{item}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-amber-200">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                  <p className="text-amber-300">
                    Historic Coffee District<br />
                    Addis Ababa, Ethiopia
                  </p>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <p className="text-amber-300">+251 (123) 456-7890</p>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <p className="text-amber-300">hello@abyssinia.coffee</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-amber-200">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram className="w-6 h-6" />, label: 'Instagram' },
                  { icon: <Facebook className="w-6 h-6" />, label: 'Facebook' },
                  { icon: <Twitter className="w-6 h-6" />, label: 'Twitter' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="bg-amber-800/30 p-3 rounded-full text-amber-300 hover:text-amber-400 hover:bg-amber-800/50 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="mt-6 text-amber-400/80 text-sm">
                Subscribe to our newsletter for updates on new harvests and special offers.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-amber-800/30 text-center text-amber-400/60">
            <p>© {new Date().getFullYear()} Abyssinia Coffee House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;