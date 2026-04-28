import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, ShieldCheck, CreditCard, Leaf } from 'lucide-react';
import { products, categories } from '../lib/data';
import { useStore } from '../store/useStore';

export function Home() {
  const { addToCart } = useStore();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000" 
            alt="Fresh Organic Food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm">
                <Leaf size={16} />
                <span>100% Organic & Natural</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Pure Food,<br />Delivered Fresh<br />to Your Door.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
                Discover our curated selection of premium organic honey, nuts, and natural oils sourced directly from nature.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/shop" 
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-all hover:shadow-lg hover:shadow-primary-500/30 group"
                >
                  Shop Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about" 
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Explore Our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-slate-500">100% organic, hand-picked ingredients guaranteed fresh.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-slate-500">Free delivery on orders over $50. Quick & reliable.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
              <p className="text-slate-500">100% secure payments with buyer protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Spotlight */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Explore our wide range of premium organic products tailored for a healthier lifestyle.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {['Honey', 'Nuts', 'Oils', 'Grains'].map((cat, i) => (
              <Link key={cat} to={`/shop?category=${cat}`} className="group relative rounded-3xl overflow-hidden aspect-square flex items-end">
                <img 
                  src={
                    i === 0 ? "https://images.unsplash.com/photo-1587049352851-8d4e89134780?auto=format&fit=crop&q=80&w=600" :
                    i === 1 ? "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=600" :
                    i === 2 ? "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600" :
                    "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=600"
                  } 
                  alt={cat} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="relative p-6 w-full flex justify-between items-center group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-white text-xl font-semibold">{cat}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Sellers</h2>
              <p className="text-slate-600">Our most loved natural products.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -8 }}
                className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <Link to={`/product/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.isOrganic && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      Organic
                    </div>
                  )}
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    {product.category}
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-primary-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mb-4">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                    <span className="text-sm text-slate-400">({product.reviews})</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 md:hidden flex justify-center">
             <Link to="/shop" className="inline-flex justify-center items-center gap-2 px-6 py-3 border border-slate-200 rounded-full font-medium hover:bg-slate-50 w-full text-center">
                View All Products
             </Link>
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-accent-600">
             <img 
                src="https://images.unsplash.com/photo-1615486171448-4df15cb17582?auto=format&fit=crop&q=80&w=2000" 
                alt="Discount" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
              />
              <div className="relative p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="text-center md:text-left text-white max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Get 20% Off Your First Order</h2>
                    <p className="text-lg md:text-xl text-white/90 mb-8 opacity-90">Use code <strong className="bg-white/20 px-2 py-1 rounded">FRESH20</strong> at checkout and enjoy nature's finest.</p>
                    <Link 
                      to="/shop" 
                      className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-accent-600 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg"
                    >
                      Claim Offer
                    </Link>
                 </div>
              </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <Leaf size={48} className="mx-auto text-primary-500 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the AppCore Community</h2>
          <p className="text-slate-600 mb-8">Subscribe to get updates on new products, special offers, and healthy living tips.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-full border-0 shadow-sm focus:ring-2 focus:ring-primary-500 outline-none text-slate-700"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
