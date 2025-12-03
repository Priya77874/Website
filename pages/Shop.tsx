import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from 'lucide-react';
import BookCard from '../components/BookCard';
import { BOOKS } from '../data';
import { Category } from '../types';

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as Category | 'All';
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>(initialCategory || 'All');
  
  useEffect(() => {
    if (initialCategory) setActiveCategory(initialCategory);
  }, [initialCategory]);

  const categories: (Category | 'All')[] = ['All', 'School', 'Competitive Exams', 'Novels', 'Reference', 'Stationery'];

  const filteredBooks = activeCategory === 'All' 
    ? BOOKS 
    : BOOKS.filter(book => book.category === activeCategory);

  return (
    <div className="bg-brand-paper min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">Shop Books</h1>
          <p className="text-gray-600">Browse our extensive collection of educational and general books.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 mb-4 text-brand-maroon font-bold">
                <Filter size={20} />
                <span>Filters</span>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Categories</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition ${
                        activeCategory === cat 
                          ? 'bg-brand-blue text-white font-medium' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Availability</h3>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked readOnly className="rounded text-brand-blue focus:ring-brand-blue" />
                  In Stock Only
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="mb-4 text-sm text-gray-500">
              Showing {filteredBooks.length} results for <span className="font-bold text-gray-900">"{activeCategory}"</span>
            </div>
            
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500">No books found in this category.</p>
                <button 
                  onClick={() => setActiveCategory('All')} 
                  className="mt-4 text-brand-blue font-bold hover:underline"
                >
                  View All Books
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
