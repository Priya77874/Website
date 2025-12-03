import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Truck, CheckCircle, ArrowLeft } from 'lucide-react';
import { BOOKS } from '../data';
import { CartContext } from '../App';
import BookCard from '../components/BookCard';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useContext(CartContext);
  
  const book = BOOKS.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Book not found</h2>
        <Link to="/shop" className="text-brand-blue mt-4 hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const relatedBooks = BOOKS.filter(b => b.category === book.category && b.id !== book.id).slice(0, 4);

  return (
    <div className="bg-white pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-4 mb-8">
        <div className="container mx-auto px-4 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-blue">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-blue">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium truncate">{book.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Link to="/shop" className="inline-flex items-center text-gray-500 hover:text-brand-blue mb-6">
          <ArrowLeft size={16} className="mr-1" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center border border-gray-100">
            <img 
              src={book.image} 
              alt={book.title} 
              className="max-h-[500px] shadow-2xl rounded"
            />
          </div>

          {/* Details */}
          <div>
            <div className="mb-2">
              <span className="bg-brand-beige text-brand-maroon px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {book.category}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              {book.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">by <span className="font-medium text-gray-800">{book.author}</span></p>

            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">({book.rating} Rating)</span>
            </div>

            <div className="flex items-end gap-3 mb-6 pb-6 border-b border-gray-100">
              <span className="text-4xl font-bold text-brand-blue">₹{book.price}</span>
              {book.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">₹{book.originalPrice}</span>
                  <span className="text-brand-maroon font-bold text-sm mb-1">
                    {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {book.description} This edition is specifically curated for students and aspirants looking for authentic material. {book.publisher} guarantees print quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => addToCart(book)}
                className="flex-1 bg-brand-blue text-white py-4 px-6 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="flex-1 bg-brand-beige text-brand-maroon border border-brand-maroon/20 py-4 px-6 rounded-lg font-bold hover:bg-brand-maroon hover:text-white transition flex items-center justify-center gap-2">
                Buy Now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-brand-blue" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-brand-blue" />
                <span>Original Print</span>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-4 rounded-lg text-sm">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 text-gray-500">Publisher</td>
                    <td className="py-2 font-medium">{book.publisher}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 text-gray-500">Language</td>
                    <td className="py-2 font-medium">{book.language}</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">Availability</td>
                    <td className="py-2 font-medium text-green-600">In Stock</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div className="border-t border-gray-200 pt-16">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-8">You might also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedBooks.map(b => (
                <BookCard key={b.id} book={b} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
