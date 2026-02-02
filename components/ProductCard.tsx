import React from 'react';
import Card from './ui/Card';

interface ProductCardProps {
  name: string;
  description: string;
  status: 'Live' | 'In Progress';
}

export default function ProductCard({ name, description, status }: ProductCardProps) {
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <span 
          className={`
            px-3 py-1 rounded-full text-xs font-semibold
            ${status === 'Live' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            }
          `}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </Card>
  );
}
