import React, { createContext, useState, useEffect } from 'react';
import { HashRouter, Routes, Route, ScrollRestoration, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import CartPage from './pages/Cart';
import TermsPage from './pages/Terms';
import { Book, CartItem } from './types';

// Cart Context
interface CartContextType {
  cart: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

const ScrollToTop = () => {
  const { pathname } = window.location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (book: Book) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) {
        return prev.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </CartContext.Provider>
  );
};

export default App;