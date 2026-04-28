import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../lib/data';
import { useStore } from '../store/useStore';
import { motion } from 'motion/react';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="text-primary-600 font-medium">Return to Shop</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
      <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
        {/* Images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100"
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.isOrganic && (
            <div className="absolute top-6 left-6 bg-green-500 text-white font-bold px-4 py-2 rounded-full shadow-lg">
              100% Organic
            </div>
          )}
        </motion.div>

        {/* Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-4 text-sm font-semibold tracking-wider text-primary-600 uppercase">
            {product.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"} 
                />
              ))}
            </div>
            <span className="text-slate-600 font-medium">{product.rating} Rating</span>
            <span className="text-slate-400">({product.reviews} reviews)</span>
          </div>

          <div className="text-3xl font-bold text-slate-900 mb-8">${product.price.toFixed(2)}</div>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center border-2 border-slate-200 rounded-2xl p-2 w-32 justify-between">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="font-semibold text-lg">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-primary-600 text-white py-4 px-8 rounded-2xl font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5"
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100 mb-8">
             <div className="flex items-center gap-3 text-slate-600">
                <div className="bg-primary-50 p-2 rounded-lg text-primary-600"><ShieldCheck size={20} /></div>
                <span className="font-medium text-sm">Quality Assured</span>
             </div>
             <div className="flex items-center gap-3 text-slate-600">
                <div className="bg-primary-50 p-2 rounded-lg text-primary-600"><Truck size={20} /></div>
                <span className="font-medium text-sm">Fast Shipping</span>
             </div>
          </div>

          {/* Nutrition Info */}
          {product.nutritionInfo && (
            <div>
              <h3 className="font-semibold text-lg mb-4">Nutrition Facts (per serving)</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 text-center">
                  <div className="text-sm border-b border-slate-200 pb-2 mb-2 text-slate-500">Calories</div>
                  <div className="font-bold text-slate-900">{product.nutritionInfo.calories}</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center">
                  <div className="text-sm border-b border-slate-200 pb-2 mb-2 text-slate-500">Fat</div>
                  <div className="font-bold text-slate-900">{product.nutritionInfo.fat}</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center">
                  <div className="text-sm border-b border-slate-200 pb-2 mb-2 text-slate-500">Carbs</div>
                  <div className="font-bold text-slate-900">{product.nutritionInfo.carbs}</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center">
                  <div className="text-sm border-b border-slate-200 pb-2 mb-2 text-slate-500">Protein</div>
                  <div className="font-bold text-slate-900">{product.nutritionInfo.protein}</div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-20 border-t border-slate-100">
          <h2 className="text-3xl font-bold mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <Link to={`/product/${p.id}`} className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </Link>
                <div className="p-6">
                  <Link to={`/product/${p.id}`}>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-primary-600 transition-colors">{p.name}</h3>
                  </Link>
                  <span className="text-lg font-bold text-slate-900">${p.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
