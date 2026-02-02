import React from 'react';
import Card from './ui/Card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card>
      <div className="text-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
