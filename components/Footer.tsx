import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold gradient-text mb-2">Scientistshub Labs</h3>
          <p className="text-gray-400 mb-6">Building software & digital products</p>
          
          <div className="border-t border-dark-border pt-6">
            <p className="text-gray-500 text-sm">
              © 2026 Scientistshub Labs
            </p>
            {/* <p className="text-gray-600 text-xs mt-1">
              Operated by Scientistshub Innovations LLP
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
