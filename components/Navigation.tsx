'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-wider text-gray-900">
            ATELIER LUXE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Link
              href="#book"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2.5 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-gray-200">
            <Link
              href="#home"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#book"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2.5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;