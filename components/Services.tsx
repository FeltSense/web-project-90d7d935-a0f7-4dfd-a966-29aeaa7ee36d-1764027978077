import React from 'react';
import Image from 'next/image';
import { Sparkles, Scissors, Ruler, BookOpen } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Couture Services & Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive fashion services designed to elevate your style with personalized elegance
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large Featured Card 1 - Seasonal Collections */}
          <div className="lg:col-span-2 lg:row-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative h-80 lg:h-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" 
                alt="Seasonal Fashion Collection"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-14 h-14 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Seasonal Collections
                </h3>
                <p className="text-gray-100 text-lg leading-relaxed">
                  Explore our curated seasonal collections featuring the latest trends from Paris, Milan, and New York. Each piece is handpicked to embody timeless elegance and contemporary sophistication.
                </p>
              </div>
            </div>
          </div>

          {/* Small Card 1 - Custom Tailoring */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
              <Scissors className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Custom Tailoring
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bespoke alterations and made-to-measure services ensuring every garment fits you perfectly.
            </p>
          </div>

          {/* Small Card 2 - Size Guide */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
              <Ruler className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Perfect Fit Guide
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive sizing charts and virtual fitting assistance to help you find your ideal measurements.
            </p>
          </div>

          {/* Large Featured Card 2 - Designer Lookbook */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative h-72 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" 
                alt="Designer Lookbook Gallery"
                width={1200}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 max-w-xl">
                  <div className="w-14 h-14 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Designer Lookbook Gallery
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    Immerse yourself in our exclusive designer collections. Browse curated looks from world-renowned fashion houses and discover your signature style with personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories Section */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Explore Our Collections
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-600 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">👗</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Women's Wear</h4>
                <p className="text-sm text-gray-600">Dresses, Suits & More</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-600 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">👜</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Luxury Bags</h4>
                <p className="text-sm text-gray-600">Handbags & Clutches</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-600 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">👠</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Designer Shoes</h4>
                <p className="text-sm text-gray-600">Heels, Flats & Boots</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-600 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">💎</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Accessories</h4>
                <p className="text-sm text-gray-600">Jewelry & Scarves</p>
              </div>
            </div>
          </div>
        </div>

        {/* Styling Tips Banner */}
        <div className="mt-12 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Personal Styling Consultation
          </h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-6">
            Book a complimentary session with our expert stylists for personalized recommendations, wardrobe planning, and exclusive styling tips tailored to your unique aesthetic.
          </p>
          <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;