import React from 'react';
import { Tractor, Menu, X, Bell } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tractor className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">AgriAssist</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Assessment</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Resources</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600 hover:text-green-600 transition-colors" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                2
              </span>
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Assessment</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Resources</a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}