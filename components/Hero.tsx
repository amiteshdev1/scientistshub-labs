import React from 'react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          We build <span className="gradient-text">software, products</span>
          <br />
          & <span className="gradient-text">intelligent systems</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          A modern software studio crafting scalable digital solutions, 
          intelligent products, and cutting-edge applications for the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" href="/contact">
            Build with us
          </Button>
          <Button variant="secondary" href="/products">
            View Products
          </Button>
        </div>
      </div>
    </section>
  );
}
