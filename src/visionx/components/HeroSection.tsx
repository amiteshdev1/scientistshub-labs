import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  children?: ReactNode;
}

export function HeroSection({ title, subtitle, description, children }: HeroSectionProps) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-sm font-medium text-blue-400">
                {subtitle}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>

          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
