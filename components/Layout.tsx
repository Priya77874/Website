import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, BookOpen, Search, Phone, User, MapPin } from 'lucide-react';
import { CartContext } from '../App';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path ? "text-brand-maroon font-bold" : "text-gray-700 hover:text-brand-blue";

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> 8178365708</span>
            <span className="hidden md:flex items-center gap-1"><MapPin size={14} /> Sarita Vihar, New Delhi</span>
          </div>
          <div className="flex gap-4">
            <span>Shipping PAN India</span>
            <span>Bulk Orders Available</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="text-brand-maroon h-8 w-8" />
              <div>
                <h1 className="font-serif text-xl md:text-2xl font-bold text-brand-blue leading-tight">Raj Kumar</h1>
                <p className="text-xs text-gray-500 font-medium tracking-widest">BOOK DEALER</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 font-medium">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/shop" className={isActive('/shop')}>Shop Books</Link>
              <Link to="/services" className={isActive('/services')}>Services</Link>
              <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <ShoppingCart className="text-brand-blue" size={24} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-brand-maroon text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button 
                className="md:hidden p-2 text-brand-blue"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 absolute w-full shadow-lg">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="block py-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" className="block py-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>Shop Books</Link>
              <Link to="/services" className="block py-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/contact" className="block py-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-brand-maroon">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <BookOpen />
              <span className="font-serif font-bold text-xl">Raj Kumar</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted source for educational, competitive, and fiction books. Dedicated to fueling knowledge since 2006.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-brand-beige">All Books</Link></li>
              <li><Link to="/services" className="hover:text-brand-beige">Our Services</Link></li>
              <li><Link to="/terms" className="hover:text-brand-beige">Terms & Policy</Link></li>
              <li><Link to="/contact" className="hover:text-brand-beige">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="shrink-0 text-brand-beige" size={18} />
                <span>H. No. 416/152 Mehla Mohalla, Madanpur Khadar, Sarita Vihar 110076</span>
              </li>
              <li className="flex gap-3">
                <Phone className="shrink-0 text-brand-beige" size={18} />
                <span>8178365708</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-brand-beige text-lg">@</span>
                <span>rajkumar20060308@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-4">We Accept</h3>
            <div className="flex gap-2 flex-wrap">
              <div className="bg-white text-gray-900 px-2 py-1 text-xs font-bold rounded">UPI</div>
              <div className="bg-white text-gray-900 px-2 py-1 text-xs font-bold rounded">Cash</div>
              <div className="bg-white text-gray-900 px-2 py-1 text-xs font-bold rounded">Card</div>
              <div className="bg-white text-gray-900 px-2 py-1 text-xs font-bold rounded">NetBanking</div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-xs">
          © {new Date().getFullYear()} Raj Kumar Book Dealer. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
