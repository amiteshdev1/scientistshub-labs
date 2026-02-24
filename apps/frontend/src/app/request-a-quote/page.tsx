import type { Metadata } from 'next';
import QuoteForm from './QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Quote | ScientistsHub Labs',
  description:
    'Tell us about your project and get a personalised quote for your website or web application from the ScientistsHub Labs team.',
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      {/* Hero */}
      <section className="relative bg-[var(--brand-primary-blue) py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#fff_0%,transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-xs font-semibold mb-5 backdrop-blur-sm border border-white/30">
            Free, no-obligation quote
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Get a Website Quote
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Share your vision and requirements. We&apos;ll put together a tailored proposal and
            respond within 1 - 2 business days.
          </p>
        </div>
      </section>

      {/* Form card */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-4 lg:px-8">
          <div className="max-w-3xl mx-auto bg-[var(--card-bg)] rounded-2xl shadow-xl border border-[var(--card-border)] p-4 md:p-6 lg:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
