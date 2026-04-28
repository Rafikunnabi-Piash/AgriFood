import { ShieldCheck, Leaf, Heart, ArrowRight, Award, Sprout, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background gradient blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 font-medium mb-8">
                <Sprout size={18} />
                <span>Our Roots & Our Journey</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-slate-900">
                Rewilding the way you eat.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                AppCore Foods was born from a simple belief: the most powerful nourishment comes directly from nature, untouched by modern processing.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1595273611465-3914a51e5e01?auto=format&fit=crop&q=80&w=150&h=150",
                    "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=150&h=150",
                    "https://images.unsplash.com/photo-1506863530036-1efedf6862b2?auto=format&fit=crop&q=80&w=150&h=150"
                  ].map((img, i) => (
                    <img key={i} src={img} alt="Farmer" className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm z-10" />
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-white bg-primary-100 flex items-center justify-center text-primary-700 font-bold shadow-sm z-0 text-sm">
                    50+
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="block font-bold text-slate-900 text-lg">Partner Farms</span>
                  Across the country
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-primary-500 rounded-[3rem] rotate-6 scale-95 opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1595858603525-4b537d9ececd?auto=format&fit=crop&q=80&w=1200" 
                alt="Harvest" 
                className="relative z-10 rounded-[3rem] w-full h-[600px] object-cover shadow-2xl"
              />
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-full flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Established</div>
                    <div className="text-xl font-bold text-slate-900">Since 2020</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Banner / Marquee */}
      <div className="bg-slate-900 text-white py-6 overflow-hidden">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex items-center gap-12 px-6 font-semibold tracking-wide"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="flex items-center gap-2"><CheckCircle2 className="text-primary-500" size={20} /> 100% ORGANIC</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="text-primary-500" size={20} /> NON-GMO VERIFIED</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="text-primary-500" size={20} /> FAIR TRADE PARTNERS</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="text-primary-500" size={20} /> LAB TESTED PURITY</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="text-primary-500" size={20} /> SUSTAINABLY SOURCED</span>
                <span className="text-slate-600">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bento Grid Story */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-lg text-slate-600">
              We're combining traditional farming wisdom with modern logistics to ensure purity isn't compromised by distance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-8 bg-white p-10 md:p-14 rounded-[2.5rem] shadow-sm">
              <Sprout size={40} className="text-primary-500 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Restoring the Standard</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Most modern food is optimized for shelf life, not human health. We saw exceptional local harvests being mixed with mass-produced fillers just to cut costs. 
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                AppCore Foods changes this paradigm. By testing every batch and eliminating the middleman, we bring you ingredients that actually taste like they should—vibrant, complex, and full of natural vitality.
              </p>
            </div>
            
            <div className="md:col-span-4 rounded-[2.5rem] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1611599537845-1c7ce0005d6c?auto=format&fit=crop&q=80&w=800" 
                alt="Fresh produce" 
                className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="md:col-span-5 rounded-[2.5rem] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                alt="Orchard" 
                className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="md:col-span-7 bg-primary-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-sm flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Uncompromising Quality</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle2 size={16} className="text-primary-300" /></div>
                  <span className="text-lg text-primary-50">Sourced exclusively from certified organic estates.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle2 size={16} className="text-primary-300" /></div>
                  <span className="text-lg text-primary-50">Cold-chain logistics to rapidly preserve nutrients.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle2 size={16} className="text-primary-300" /></div>
                  <span className="text-lg text-primary-50">Zero tolerence for artificial colors, flavors or preservatives.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (Refined) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1">
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Values that drive us</h2>
                 <p className="text-slate-600 mb-8">The uncompromising principles behind every harvest.</p>
                 <Link to="/shop" className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 group">
                   See our products
                   <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                 </Link>
              </div>
              
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 <div className="space-y-4 relative">
                    <div className="text-6xl font-bold text-slate-100 absolute -top-8 -left-4 -z-10">01</div>
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6"><Leaf size={24} /></div>
                    <h3 className="text-2xl font-bold text-slate-900">Total Transparency</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">We trace every jar of honey and every batch of nuts directly back to the very soil it was grown in. You deserve to know exactly what you eat.</p>
                 </div>

                 <div className="space-y-4 relative">
                    <div className="text-6xl font-bold text-slate-100 absolute -top-8 -left-4 -z-10">02</div>
                    <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-6"><Heart size={24} /></div>
                    <h3 className="text-2xl font-bold text-slate-900">Community Respect</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">We pay our farm partners premiums well above fair-trade standards, ensuring sustainable generational farming practices thrive.</p>
                 </div>

                 <div className="space-y-4 relative">
                    <div className="text-6xl font-bold text-slate-100 absolute -top-8 -left-4 -z-10">03</div>
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mb-6"><ShieldCheck size={24} /></div>
                    <h3 className="text-2xl font-bold text-slate-900">Scientific Integrity</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">Organic isn't just a buzzword. We implement rigorous independent lab testing for heavy metals, pesticides, and nutritional density.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
