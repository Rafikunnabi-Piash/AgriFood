import { Leaf, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <div className="bg-primary-500 text-white p-1.5 rounded-xl group-hover:bg-primary-600 transition-colors">
                <Leaf size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AppCore <span className="text-primary-500 font-semibold">Foods</span>
              </span>
            </Link>
            <p className="text-slate-400 mt-4 leading-relaxed max-w-sm">
              Premium, organic, and naturally sourced food delivered straight from nature to your door.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/shop" className="hover:text-primary-400 transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6">Categories</h3>
            <ul className="space-y-4">
              <li><Link to="/shop" className="hover:text-primary-400 transition-colors">Pure Honey</Link></li>
              <li><Link to="/shop" className="hover:text-primary-400 transition-colors">Raw Nuts</Link></li>
              <li><Link to="/shop" className="hover:text-primary-400 transition-colors">Cold-Pressed Oils</Link></li>
              <li><Link to="/shop" className="hover:text-primary-400 transition-colors">Whole Grains</Link></li>
              <li><Link to="/shop" className="hover:text-primary-400 transition-colors">Organic Specials</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0 mt-1" size={18} />
                <span className="leading-relaxed">123 Organic Way, Health District<br />Dhaka, 1212</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={18} />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={18} />
                <a href="mailto:hello@appcorefoods.com" className="hover:text-primary-400 transition-colors">hello@appcorefoods.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AppCore Foods. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm text-slate-500">
            <span>Secure Payments</span>
            <span>•</span>
            <span>Fast Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
