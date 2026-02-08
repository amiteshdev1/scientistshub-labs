'use client';

import Link from 'next/link';
import { Zap, Workflow, Mail, Database } from 'lucide-react';
import HeroWithDashboard from '@/Components/HeroWithDashboard';
import SoftwareDashboard from '@/Components/dashboards/SoftwareDashboard';

export default function WorkflowAutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-10 h-10" />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows'
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: 'Email Automation',
      description: 'Automated email campaigns and notifications'
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Data Synchronization',
      description: 'Keep data in sync across multiple systems'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Custom Workflows',
      description: 'Build workflows tailored to your business'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <HeroWithDashboard
        subtitle="Software Solutions"
        title="Workflow Automation"
        description="Boost productivity by automating repetitive tasks and business processes. Save time, reduce errors, and let your team focus on what matters most."
        primaryCTA={{ text: 'Automate Now', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'Learn More', href: '/about' }}
        dashboardComponent={<SoftwareDashboard />}
      />

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="theme-card rounded-xl p-6">
                  <div className="text-[#0774E8] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold theme-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="theme-text-secondary text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center theme-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold theme-text-primary mb-4">
              Automate Your Business
            </h2>
            <p className="theme-text-secondary mb-6">
              Save time and reduce errors with intelligent automation.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
