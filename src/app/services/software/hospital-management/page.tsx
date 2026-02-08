'use client';

import Link from 'next/link';
import { Hospital, Users, Calendar, FileText, Activity, Shield } from 'lucide-react';

export default function HospitalManagementPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Patient Management',
      description: 'Complete patient records and medical history tracking'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Appointment Scheduling',
      description: 'Efficient scheduling system for doctors and patients'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Billing & Insurance',
      description: 'Automated billing and insurance claim processing'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Inventory Management',
      description: 'Track medical supplies and equipment'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'HIPAA Compliance',
      description: 'Secure, compliant patient data management'
    },
    {
      icon: <Hospital className="w-8 h-8" />,
      title: 'Staff Management',
      description: 'Manage doctors, nurses, and administrative staff'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Hospital className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              Hospital Management System
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Complete healthcare management solution for modern hospitals
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Modernize Your Healthcare Facility
            </h2>
            <p className="theme-text-secondary mb-6">
              Streamline operations and improve patient care with our HMS.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
