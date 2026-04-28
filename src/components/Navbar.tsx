import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const { cart, toggleCart } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary-500 text-white p-1.5 rounded-xl group-hover:bg-primary-600 transition-colors">
              <Leaf size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              AppCore <span className="text-primary-600 font-semibold">Foods</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  isActive ? "text-primary-600" : "text-slate-600"
                )}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-slate-600 hover:text-primary-600 transition-colors"
              aria-label="Toggle cart"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-accent-500 rounded-full border-2 border-white translate-x-1/4 -translate-y-1/4">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => cn(
                    "text-lg font-medium p-2 rounded-lg transition-colors",
                    isActive ? "bg-primary-50 text-primary-600" : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
