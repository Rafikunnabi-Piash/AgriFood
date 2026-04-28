import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart } = useStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-100">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <ShoppingBag className="text-primary-600" />
                Your Cart
              </h2>
              <button 
                onClick={toggleCart}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-slate-500">
                  <ShoppingBag size={48} className="text-slate-300" />
                  <p>Your cart is empty.</p>
                  <button 
                    onClick={toggleCart}
                    className="mt-4 px-6 py-2 bg-primary-50 text-primary-600 font-medium rounded-full hover:bg-primary-100 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-medium text-slate-900 leading-snug">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-slate-400 hover:text-red-500 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <p className="text-primary-600 font-semibold mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-slate-200 rounded-lg">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 px-2 text-slate-500 hover:bg-slate-50 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                               onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 px-2 text-slate-500 hover:bg-slate-50 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-slate-100 p-4 md:p-6 bg-slate-50/50">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-slate-900 pt-3 border-t border-slate-200">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <Link 
                  to="/checkout"
                  onClick={toggleCart}
                  className="w-full block text-center bg-primary-600 text-white font-medium py-3.5 rounded-xl hover:bg-primary-700 shadow-lg shadow-primary-500/20 transition-all hover:-translate-y-0.5"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
