'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Atelier Luxe transformed my entire wardrobe. Their bespoke pieces are works of art that make me feel powerful and elegant every single day. The attention to detail is simply unmatched.",
      name: "Isabella Hartwell",
      role: "Art Gallery Director",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      id: 2,
      quote: "The craftsmanship is extraordinary. Each piece tells a story and fits like a dream. I've never felt more confident in my personal style than I do wearing Atelier Luxe.",
      name: "Victoria Laurent",
      role: "Fashion Editor",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5
    },
    {
      id: 3,
      quote: "From the first consultation to the final fitting, the experience was impeccable. These aren't just clothes—they're investments in timeless elegance that I'll treasure forever.",
      name: "Sophia Chen",
      role: "Luxury Brand Consultant",
      avatar: "https://i.pravatar.cc/150?img=10",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from those who wear our art
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all text-gray-900 border border-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all text-gray-900 border border-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel with Vertical Flow Design */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  index === activeIndex 
                    ? 'opacity-100 relative' 
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center hover:shadow-3xl transition-shadow">
                  {/* Large Avatar at Top */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 text-2xl md:text-3xl mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Large Stars */}
                  <div className="flex gap-2 justify-center mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-7 h-7 md:w-8 md:h-8 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-50 p-4 rounded-full">
                      <Quote className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-gray-700 text-xl md:text-2xl italic leading-relaxed max-w-3xl mx-auto">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Elegant Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex 
                    ? 'bg-gray-900 w-12 h-3' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600 text-lg">Bespoke Pieces Created</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600 text-lg">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600 text-lg">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  </button>);
};

export default Testimonials;
