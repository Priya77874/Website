import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Book } from '../types';
import { CartContext } from '../App';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useContext(CartContext);

  const discount = book.originalPrice 
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full overflow-hidden group">
      <Link to={`/product/${book.id}`} className="relative bg-gray-50 pt-[100%] overflow-hidden">
        <img 
          src={book.image} 
          alt={book.title} 
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-brand-maroon text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">{book.category}</span>
          <Link to={`/product/${book.id}`}>
            <h3 className="font-serif font-bold text-gray-900 leading-tight mt-1 group-hover:text-brand-blue transition-colors line-clamp-2 min-h-[2.5rem]">
              {book.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 mt-1 truncate">{book.author}</p>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-brand-blue">₹{book.price}</span>
            {book.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-2">₹{book.originalPrice}</span>
            )}
          </div>
          <button 
            onClick={() => addToCart(book)}
            className="p-2 rounded-full bg-brand-beige text-brand-maroon hover:bg-brand-blue hover:text-white transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
