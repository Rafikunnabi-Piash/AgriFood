import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../lib/data';
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const { addToCart } = useStore();

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('popular'); // popular, price-low, price-high

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (search) {
      result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, search, sortBy]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Shop Our Collection</h1>
          <p className="text-slate-600 max-w-xl">Find the best organic foods, carefully selected for quality and taste.</p>
        </div>
        <div className="flex gap-4">
           {/* Search */}
           <div className="relative">
             <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
             <input 
               type="text" 
               placeholder="Search products..." 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="pl-11 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full md:w-64"
             />
           </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 shrink-0 space-y-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Filter size={18} /> Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryClick(cat)}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-lg transition-colors",
                      activeCategory === cat 
                        ? "bg-primary-50 text-primary-700 font-medium" 
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold mb-4">Sort By</h3>
             <select 
               value={sortBy}
               onChange={(e) => setSortBy(e.target.value)}
               className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none bg-white"
             >
               <option value="popular">Most Popular</option>
               <option value="price-low">Price: Low to High</option>
               <option value="price-high">Price: High to Low</option>
             </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
           {filteredProducts.length === 0 ? (
             <div className="text-center py-20 bg-slate-50 rounded-3xl">
               <h3 className="text-xl font-semibold mb-2">No products found</h3>
               <p className="text-slate-500">Try adjusting your filters or search query.</p>
               <button 
                 onClick={() => { setSearch(''); setActiveCategory('All'); }}
                 className="mt-6 px-6 py-2 bg-primary-100 text-primary-700 rounded-full font-medium"
               >
                 Clear Filters
               </button>
             </div>
           ) : (
             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
               {filteredProducts.map((product) => (
                 <motion.div 
                   key={product.id}
                   layout
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.3 }}
                   className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                 >
                   <Link relative="path" to={`/product/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-slate-50">
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
                         className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                       >
                         <ShoppingCart size={18} />
                       </button>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
