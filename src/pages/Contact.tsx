import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-slate-600">
          Have a question about our products or your order? We're here to help. Reach out to our customer support team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin size={28} />
            </div>
            <div>
               <h3 className="text-xl font-bold mb-2">Visit Our Store</h3>
               <p className="text-slate-600 leading-relaxed text-lg">
                 123 Organic Way, Health District<br />Dhaka, 1212, Bangladesh
               </p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
              <Phone size={28} />
            </div>
            <div>
               <h3 className="text-xl font-bold mb-2">Call Us</h3>
               <p className="text-slate-600 leading-relaxed text-lg">
                 +880 1234 567890<br />
                 <span className="text-sm">Mon-Sat: 9am - 8pm</span>
               </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
              <MessageSquare size={28} />
            </div>
            <div>
               <h3 className="text-xl font-bold mb-2">WhatsApp Support</h3>
               <p className="text-slate-600 leading-relaxed text-lg mb-3">
                 Fastest way to get in touch.
               </p>
               <a href="#" className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-green-600 transition-colors">
                 <MessageSquare size={18} /> Chat on WhatsApp
               </a>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
              <Mail size={28} />
            </div>
            <div>
               <h3 className="text-xl font-bold mb-2">Email Us</h3>
               <p className="text-slate-600 leading-relaxed text-lg">
                 hello@appcorefoods.com
               </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40">
          <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-sm font-semibold text-slate-700">First Name</label>
                 <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 focus:bg-white transition-colors" placeholder="John" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-semibold text-slate-700">Last Name</label>
                 <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 focus:bg-white transition-colors" placeholder="Doe" />
               </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 focus:bg-white transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Subject</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 focus:bg-white transition-colors" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 focus:bg-white transition-colors resize-none" placeholder="Your message here..."></textarea>
            </div>
            <button className="w-full bg-slate-900 text-white font-semibold py-4 rounded-xl hover:bg-slate-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
