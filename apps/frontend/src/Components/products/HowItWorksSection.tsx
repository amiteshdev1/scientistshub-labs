import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
  title?: string;
}

export default function HowItWorksSection({ steps, title = 'How It Works' }: HowItWorksSectionProps) {
  return (
    <section className="py-16 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-12 text-center">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="relative group">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center absolute left-1/3 transform translate-x-[200%] top-8">
                    <ArrowRight className="w-8 h-8 text-[var(--accent-secondary)] opacity-50" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
