import React from 'react';
import { Users, Briefcase, User } from 'lucide-react';

interface UseCase {
  category: 'Personal' | 'Professional' | 'Team';
  title: string;
  problem: string;
  solution: string;
}

interface UseCaseSectionProps {
  useCases: UseCase[];
  title?: string;
}

export default function UseCaseSection({ useCases, title = 'Real-World Use Cases' }: UseCaseSectionProps) {
  const categoryIcons = {
    Personal: User,
    Professional: Briefcase,
    Team: Users
  };

  // Using theme variables instead of hardcoded tailwind classes
  const categoryColors = {
    Personal: 'text-[var(--accent-secondary)] bg-[var(--accent-secondary)] bg-opacity-10',
    Professional: 'text-[var(--accent-primary)] bg-[var(--accent-primary)] bg-opacity-10',
    Team: 'text-green-500 bg-green-500 bg-opacity-10' // Kept green for distinction, could be another accent variable if defined
  };

  return (
    <section className="py-16 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-12 text-center">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = categoryIcons[useCase.category];
              
              return (
                <div
                  key={index}
                  className="rounded-xl p-6 transition-all duration-300 bg-[var(--card-bg)] border border-[var(--card-border)] hover:shadow-[var(--card-hover-shadow)]"
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg ${categoryColors[useCase.category]}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--text-secondary)]">
                      {useCase.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    {useCase.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {useCase.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-secondary)] mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {useCase.solution}
                    </p>
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
