import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, BookOpen, Award, Clock } from 'lucide-react';
import BookCard from '../components/BookCard';
import { BOOKS, TESTIMONIALS } from '../data';

const HomePage: React.FC = () => {
  const featuredBooks = BOOKS.slice(0, 4);
  const categories = [
    { name: 'School Books', count: 'Class 1-12' },
    { name: 'Competitive Exams', count: 'UPSC, SSC, Banking' },
    { name: 'Novels', count: 'Fiction, Non-Fiction' },
    { name: 'Stationery', count: 'Notebooks, Pens, Sets' },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-maroon text-white text-xs font-bold px-3 py-1 rounded mb-4 tracking-wider uppercase">
              Trusted Since 2006
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Source for Books of Every Kind.
            </h1>
            <p className="text-brand-beige text-lg mb-8 max-w-lg">
              From NCERTs to UPSC preparations, fictional novels to office stationery. We deliver knowledge to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="bg-white text-brand-blue px-8 py-3 rounded-full font-bold hover:bg-brand-beige transition shadow-lg flex items-center gap-2">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-center mb-10 text-gray-900">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <Link to={`/shop?category=${cat.name}`} key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-blue transition group text-center">
              <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-4 text-brand-maroon group-hover:scale-110 transition">
                <BookOpen size={24} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-brand-blue">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="bg-brand-paper py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Featured Books</h2>
              <p className="text-gray-600 mt-2">Top picks for UPSC and competitive exams</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-1 text-brand-maroon font-bold hover:underline">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center gap-1 text-brand-maroon font-bold hover:underline">
              View All <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4">
        <div className="bg-brand-blue rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Award className="text-brand-beige" size={32} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl mb-2">Quality Books</h3>
                <p className="text-brand-beige/80 text-sm">100% original prints. We source directly from trusted publishers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Truck className="text-brand-beige" size={32} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl mb-2">Fast Delivery</h3>
                <p className="text-brand-beige/80 text-sm">Quick shipping across Sarita Vihar and PAN India delivery options.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Clock className="text-brand-beige" size={32} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl mb-2">Trusted Service</h3>
                <p className="text-brand-beige/80 text-sm">Serving students and readers loyally since 2006.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl font-bold mb-10 text-gray-900">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white p-6 rounded-lg shadow border border-gray-100 italic">
              <p className="text-gray-600 mb-4">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-brand-blue">{t.name}</h4>
                <span className="text-xs text-gray-400 uppercase">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
