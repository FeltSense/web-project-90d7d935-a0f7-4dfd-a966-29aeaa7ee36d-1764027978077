import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80"
          alt="Luxury Fashion Collection"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm tracking-wider uppercase text-white">Spring/Summer 2024</span>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Timeless
              <br />
              Elegance
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Discover curated collections where sophistication meets contemporary design. Elevate your style with Atelier Luxe.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#collection"
              className="inline-flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-medium transition-colors"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-medium transition-colors"
            >
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-sm text-gray-300 mt-1">Exclusive Designs</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">10K+</p>
              <p className="text-sm text-gray-300 mt-1">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">25+</p>
              <p className="text-sm text-gray-300 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;