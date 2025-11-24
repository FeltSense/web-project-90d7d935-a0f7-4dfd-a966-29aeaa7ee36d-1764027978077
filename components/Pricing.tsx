'use client';

import React from 'react';
import { Check, Sparkles, Crown, Shield, Zap, Star } from 'lucide-react';

const Pricing = () => {
  const features = [
    { text: 'Bespoke Luxury Website Design', icon: Crown },
    { text: 'Mobile-Responsive Excellence', icon: Sparkles },
    { text: 'Premium Performance Optimization', icon: Zap },
    { text: 'SEO & Analytics Integration', icon: Star },
    { text: 'Secure Hosting & SSL Certificate', icon: Shield },
    { text: '30-Day Support & Maintenance', icon: Check }
  ];

  const handleCheckout = () => {
    window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00';
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            EXCLUSIVE OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Luxury Web Design, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Accessible Price</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your fashion brand with a stunning, high-performance website crafted by experts
          </p>
        </div>
        
        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Decorative Top Border */}
            <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Price & CTA */}
              <div className="p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white border-r border-gray-100">
                <div className="text-center md:text-left">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Complete Website Package
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                      <span className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        $29
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg">
                      One-time payment • Lifetime ownership
                    </p>
                  </div>
                  
                  {/* Value Badge */}
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg mb-8 border border-green-200">
                    <Star className="w-4 h-4 fill-green-600 text-green-600" />
                    <span className="text-sm font-semibold">Save $1,971 vs. Custom Development</span>
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 py-5 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl mb-4"
                  >
                    Get Your Luxury Website - $29
                  </button>
                  
                  <p className="text-center md:text-left text-sm text-gray-500">
                    🔒 Secure checkout via Stripe • No hidden fees
                  </p>
                </div>
              </div>
              
              {/* Right Side - Features */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included:
                </h3>
                
                <div className="space-y-4">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-gray-700 font-medium">{feature.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Trust Badge */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">30-Day Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Trust Elements */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>No Recurring Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Professional Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Full Source Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
