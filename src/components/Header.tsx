import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartToggle }) => {
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-amber-800">Kabir's Store</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-amber-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-amber-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={onCartToggle}
              className="relative text-gray-700 hover:text-amber-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <button className="md:hidden text-gray-700 hover:text-amber-600 transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;