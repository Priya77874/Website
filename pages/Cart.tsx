import React, { useContext, useState } from 'react';
import { Trash2, Plus, Minus, CreditCard, Banknote, Smartphone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [step, setStep] = useState<'cart' | 'details' | 'payment' | 'success'>('cart');

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  if (step === 'success') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <CheckCircle size={64} className="text-green-500 mb-4" />
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">Thank you for shopping with Raj Kumar Book Dealer.<br/>We will contact you shortly to confirm details.</p>
        <Link to="/" className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold">Return Home</Link>
      </div>
    );
  }

  if (cart.length === 0 && step === 'cart') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any books yet.</p>
        <Link to="/shop" className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold">Browse Books</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Main Content Area */}
          <div className="flex-grow">
            {step === 'cart' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <img src={item.image} alt={item.title} className="w-20 h-28 object-cover rounded" />
                      <div className="flex-grow">
                        <h3 className="font-serif font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{item.author}</p>
                        <div className="font-bold text-brand-blue">₹{item.price}</div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50 p-1 rounded">
                          <Trash2 size={18} />
                        </button>
                        <div className="flex items-center gap-3 bg-gray-100 rounded px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="disabled:opacity-30"><Minus size={14} /></button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 'details' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="font-serif text-xl font-bold mb-4">Shipping Details</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="border p-3 rounded w-full" />
                    <input type="text" placeholder="Last Name" className="border p-3 rounded w-full" />
                  </div>
                  <input type="text" placeholder="Address Line 1" className="border p-3 rounded w-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="border p-3 rounded w-full" />
                    <input type="text" placeholder="PIN Code" className="border p-3 rounded w-full" />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="border p-3 rounded w-full" />
                </form>
              </div>
            )}

            {step === 'payment' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="font-serif text-xl font-bold mb-6">Select Payment Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-4 border p-4 rounded-lg cursor-pointer hover:border-brand-blue transition">
                    <input type="radio" name="payment" className="w-5 h-5 text-brand-blue" defaultChecked />
                    <div className="bg-green-100 p-2 rounded text-green-700"><Banknote size={24} /></div>
                    <span className="font-medium">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center gap-4 border p-4 rounded-lg cursor-pointer hover:border-brand-blue transition">
                    <input type="radio" name="payment" className="w-5 h-5 text-brand-blue" />
                    <div className="bg-purple-100 p-2 rounded text-purple-700"><Smartphone size={24} /></div>
                    <span className="font-medium">UPI (GPay / PhonePe / Paytm)</span>
                  </label>
                  <label className="flex items-center gap-4 border p-4 rounded-lg cursor-pointer hover:border-brand-blue transition">
                    <input type="radio" name="payment" className="w-5 h-5 text-brand-blue" />
                    <div className="bg-blue-100 p-2 rounded text-blue-700"><CreditCard size={24} /></div>
                    <span className="font-medium">Credit / Debit Card</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-serif font-bold text-lg mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>Included</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-base font-bold text-gray-900">
                  <span>Total Payable</span>
                  <span>₹{total}</span>
                </div>
              </div>

              {step === 'cart' && (
                <button onClick={() => setStep('details')} className="w-full bg-brand-maroon text-white py-3 rounded-lg font-bold hover:bg-red-900 transition">
                  Proceed to Checkout
                </button>
              )}
              {step === 'details' && (
                <button onClick={() => setStep('payment')} className="w-full bg-brand-maroon text-white py-3 rounded-lg font-bold hover:bg-red-900 transition">
                  Proceed to Payment
                </button>
              )}
              {step === 'payment' && (
                <button onClick={() => setStep('success')} className="w-full bg-brand-blue text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">
                  Place Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
