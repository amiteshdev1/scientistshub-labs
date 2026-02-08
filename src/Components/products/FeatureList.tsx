import React from 'react';
import * as Icons from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
  title?: string;
}

export default function FeatureList({ features, title = 'Key Features' }: FeatureListProps) {
  return (
    <section className="py-16 theme-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-12 text-center">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = (Icons as any)[feature.icon] || Icons.CheckCircle;
              
              return (
                <div
                  key={index}
                  className="theme-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-brand-secondary/10 dark:bg-brand-secondary/20">
                      <IconComponent className="w-6 h-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold theme-text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm theme-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
