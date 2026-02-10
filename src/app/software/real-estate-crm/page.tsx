// 'use client';

// import Link from 'next/link';
// import { Building2, Users, Calendar, TrendingUp, FileText, Bell } from 'lucide-react';

// export default function RealEstateCRMPage() {
//   const features = [
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: 'Lead Management',
//       description: 'Capture, track, and nurture leads from multiple sources'
//     },
//     {
//       icon: <Building2 className="w-8 h-8" />,
//       title: 'Property Listings',
//       description: 'Manage property inventory with photos, details, and availability'
//     },
//     {
//       icon: <Calendar className="w-8 h-8" />,
//       title: 'Appointment Scheduling',
//       description: 'Schedule property viewings and client meetings effortlessly'
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: 'Sales Pipeline',
//       description: 'Track deals through every stage from inquiry to closing'
//     },
//     {
//       icon: <FileText className="w-8 h-8" />,
//       title: 'Document Management',
//       description: 'Store and organize contracts, agreements, and documents'
//     },
//     {
//       icon: <Bell className="w-8 h-8" />,
//       title: 'Automated Follow-ups',
//       description: 'Never miss a follow-up with automated reminders and emails'
//     }
//   ];

//   return (
//     <div className="min-h-screen theme-bg-primary">
//       <section className="py-20 sm:py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <Building2 className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
//             <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
//               Real Estate CRM
//             </h1>
//             <p className="text-lg sm:text-xl theme-text-secondary">
//               Comprehensive CRM solution designed specifically for real estate professionals
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 theme-bg-secondary">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-3xl font-bold theme-text-primary mb-12 text-center">
//               Key Features
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {features.map((feature, index) => (
//                 <div key={index} className="theme-card rounded-xl p-6">
//                   <div className="text-[#0774E8] mb-4">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-bold theme-text-primary mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="theme-text-secondary text-sm">
//                     {feature.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 theme-bg-primary">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center theme-card rounded-2xl p-8">
//             <h2 className="text-3xl font-bold theme-text-primary mb-4">
//               Transform Your Real Estate Business
//             </h2>
//             <p className="theme-text-secondary mb-6">
//               Streamline your operations and close more deals with our powerful CRM.
//             </p>
//             <Link
//               href="/request-a-quote"
//               className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
//             >
//               Request a Demo
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
