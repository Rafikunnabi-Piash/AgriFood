import { useStore } from '../store/useStore';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export function Checkout() {
  const { cart, clearCart } = useStore();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-32 md:py-40 max-w-2xl text-center">
        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-lg text-slate-600 mb-8">
          Thank you for choosing AppCore Foods. Your order has been placed and is being processed. 
          We'll send you an email with tracking details shortly.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-primary-600 text-white font-medium py-3 px-8 rounded-full hover:bg-primary-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-slate-600 mb-8">Please add some products before checking out.</p>
        <Link to="/shop" className="text-primary-600 font-medium">Return to Shop</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
      <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Form */}
        <div className="lg:col-span-7">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-10">
            {/* Delivery Details */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Delivery Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <label className="text-sm font-semibold text-slate-700">Address Line 1</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Street address, house number" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">City</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-4 p-4 border border-primary-500 rounded-xl bg-primary-50 cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold text-primary-900">Cash on Delivery (COD)</span>
                </label>
                <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 opacity-50">
                  <input disabled type="radio" name="payment" className="w-5 h-5" />
                  <span className="font-medium text-slate-700">Credit/Debit Card (Coming Soon)</span>
                </label>
                <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 opacity-50">
                  <input disabled type="radio" name="payment" className="w-5 h-5" />
                  <span className="font-medium text-slate-700">bKash / Mobile Banking (Coming Soon)</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 sticky top-28">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-white" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-slate-900 line-clamp-1">{item.name}</h4>
                    <p className="text-slate-500 text-sm">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-semibold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-3 mb-6">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-green-500 font-medium">Free</span> : `$${shipping.toFixed(2)}`}</span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 flex justify-between items-end mb-8">
              <span className="text-lg font-bold text-slate-900">Total</span>
              <div className="text-right">
                 <span className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="submit" 
              form="checkout-form"
              className="w-full bg-slate-900 text-white font-semibold py-4 rounded-xl hover:bg-slate-800 transition-colors flex justify-center items-center gap-2"
            >
               Confirm Order
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
              <ShieldCheck size={16} className="text-green-500" />
              <span>Secure, encrypted checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
