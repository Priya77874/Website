export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  publisher: string;
  edition?: string;
  language: string;
  inStock: boolean;
}

export interface CartItem extends Book {
  quantity: number;
}

export type Category = 'School' | 'College' | 'Competitive Exams' | 'Novels' | 'Reference' | 'Stationery';
