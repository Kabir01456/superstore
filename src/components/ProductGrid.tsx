import React, { useState } from 'react';
import ProductCard, { Product } from './ProductCard';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    {
      id: 1,
      name: "Luxury Velvet Sofa",
      price: 89999,
      originalPrice: 109999,
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Sofas",
      rating: 4.8,
      reviews: 124,
      description: "Elegant velvet sofa with premium cushioning and solid wood frame for ultimate comfort."
    },
    {
      id: 2,
      name: "Modern Dining Table",
      price: 65999,
      image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Dining",
      rating: 4.7,
      reviews: 89,
      description: "Sleek dining table with tempered glass top and contemporary metal legs."
    },
    {
      id: 3,
      name: "Executive Office Chair",
      price: 39999,
      originalPrice: 49999,
      image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Office",
      rating: 4.9,
      reviews: 256,
      description: "Ergonomic office chair with lumbar support and premium leather upholstery."
    },
    {
      id: 4,
      name: "Rustic Wooden Bookshelf",
      price: 55999,
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Storage",
      rating: 4.6,
      reviews: 67,
      description: "Handcrafted wooden bookshelf with natural finish and adjustable shelves."
    },
    {
      id: 5,
      name: "Platform Bed Frame",
      price: 79999,
      originalPrice: 94999,
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Bedroom",
      rating: 4.8,
      reviews: 143,
      description: "Minimalist platform bed with built-in side tables and ambient lighting."
    },
    {
      id: 6,
      name: "Accent Armchair",
      price: 45999,
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Chairs",
      rating: 4.5,
      reviews: 92,
      description: "Stylish accent chair with curved design and comfortable fabric upholstery."
    }
  ];

  const categories = ['All', 'Sofas', 'Dining', 'Office', 'Storage', 'Bedroom', 'Chairs'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium furniture pieces
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;