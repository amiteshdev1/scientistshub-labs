// "use client";
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import {
//   CheckCircle, Zap, LayoutDashboard, Code2, ArrowRight, X, Layers, Network, Cloud, Users
// } from 'lucide-react';
// import { useTheme } from 'next-themes';
// import Link from 'next/link';
// import { buildUrl } from '@/lib/urlUtils';
// import DevAgencyHeroDashboard from './DevAgencyHeroDashboard';

// const TYPING_PHRASES = ['SaaS Platforms', 'Internal Tools', 'Customer Portals', 'Automated Systems'];


// // --- MAIN COMPONENT ---
// const CustomWebSolution = () => {
//   const { resolvedTheme: theme } = useTheme();
//   const scrollRef = useRef(null);
//   const testimonialScrollRef = useRef(null);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [typingText, setTypingText] = useState('');
//   const [typingIndex, setTypingIndex] = useState(0);
//   const [selectedCase, setSelectedCase] = useState(null);
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
//   // eslint-disable-next-line no-unused-vars
//   const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true);
//   // eslint-disable-next-line no-unused-vars
//   const [isPaused, setIsPaused] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   useEffect(() => {
//     const phrase = TYPING_PHRASES[typingIndex];
//     let charIndex = 0;
//     const typeInterval = setInterval(() => {
//       if (charIndex <= phrase.length) {
//         setTypingText(phrase.slice(0, charIndex));
//         charIndex++;
//       } else {
//         clearInterval(typeInterval);
//         setTimeout(() => {
//           setTypingIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
//         }, 2000);
//       }
//     }, 100);
//     return () => clearInterval(typeInterval);
//   }, [typingIndex]);

//   const filters = [
//     { id: 'all', label: 'All Solutions' },
//     { id: 'internal', label: 'Internal Tools' },
//     { id: 'portal', label: 'Portals' },
//     { id: 'saas', label: 'SaaS Products' }
//   ];

//   const services = [
//     {
//       title: "Custom Web Apps",
//       description: "Tailor-made software built from scratch to fit your exact business process.",
//       icon: Code2,
//       category: 'saas',
//       features: ["React / Next.js", "Scalable Architecture", "Secure Database", "Custom UX/UI"]
//     },
//     {
//       title: "Admin Dashboards",
//       description: "Centralize your data with custom control panels for your team.",
//       icon: LayoutDashboard,
//       category: 'internal',
//       features: ["Real-time Data", "Role-Based Access", "Reporting Tools", "CRUD Operations"]
//     },
//     {
//       title: "API Integration",
//       description: "We connect your disparate software systems to talk to each other.",
//       icon: Network,
//       category: 'internal',
//       features: ["CRM Sync", "Payment Gateways", "Legacy Connectivity", "Automated Workflows"]
//     },
//     {
//       title: "Customer Portals",
//       description: "Secure login areas for your clients to manage their accounts and data.",
//       icon: Users, // Changed from Puzzle to Users for clarity
//       category: 'portal',
//       features: ["Secure Auth", "File Sharing", "Support Ticketing", "Profile Management"]
//     },
//     {
//       title: "Cloud Migration",
//       description: "Move your legacy desktop software to the modern web cloud.",
//       icon: Cloud,
//       category: 'saas',
//       features: ["AWS / Azure", "Data Security", "Global Access", "Auto-Scaling"]
//     },
//     {
//       title: "Process Automation",
//       description: "Replace spreadsheets and manual data entry with software.",
//       icon: Zap,
//       category: 'internal',
//       features: ["Task Scheduling", "Email Triggers", "PDF Generation", "Error Reduction"]
//     }
//   ];

//   // Placeholder Rocket Icon
//   function Users(props) {
//     return <div {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
//   }

//   const process = [
//     { n: 1, t: 'Discovery', d: 'We interview your team to map out requirements.' },
//     { n: 2, t: 'Architecture', d: 'Designing the database and user flow.' },
//     { n: 3, t: 'Development', d: 'Agile sprints with regular progress demos.' },
//     { n: 4, t: 'Testing', d: 'Security checks and performance tuning.' },
//     { n: 5, t: 'Launch', d: 'Deployment to cloud and staff training.' }
//   ];

//   const caseStudies = [
//     {
//       title: "Logistics ERP",
//       description: "Custom fleet management system for a transport company.",
//       image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
//       tech: ["React", "Node.js", "Mapbox"],
//       results: "Improved dispatch efficiency by 30%."
//     },
//     {
//       title: "Healthcare Portal",
//       description: "Secure patient data management and appointment scheduling.",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
//       tech: ["Next.js", "PostgreSQL", "HIPAA Compliant"],
//       results: "Reduced admin workload by 20 hours/week."
//     },
//     {
//       title: "Fintech Dashboard",
//       description: "Real-time investment tracking and reporting tool.",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
//       tech: ["Vue.js", "Python", "AWS"],
//       results: "Automated monthly reporting for 500+ clients."
//     }
//   ];

//   /*
//   const techStackData = {
//     'Frontend': [
//       { name: 'React', description: 'Interactive UI' },
//       { name: 'Next.js', description: 'Enterprise Framework' },
//       { name: 'Vue.js', description: 'Lightweight UI' },
//       { name: 'Tailwind', description: 'Modern CSS' }
//     ],
//     'Backend': [
//       { name: 'Node.js', description: 'Scalable Logic' },
//       { name: 'Python', description: 'Data Processing' },
//       { name: 'C#', description: 'Enterprise .NET' },
//       { name: 'Go', description: 'High Performance' }
//     ],
//     'Database': [
//       { name: 'PostgreSQL', description: 'Reliable SQL' },
//       { name: 'MongoDB', description: 'Flexible NoSQL' },
//       { name: 'Redis', description: 'Fast Caching' },
//       { name: 'Supabase', description: 'Real-time DB' }
//     ],
//     'Cloud': [
//       { name: 'AWS', description: 'Market Leader' },
//       { name: 'Azure', description: 'Microsoft Cloud' },
//       { name: 'Google Cloud', description: 'AI Ready' },
//       { name: 'Docker', description: 'Containers' }
//     ]
//   };
//   */

//   const testimonials = [
//     {
//       name: "Marcus Reid",
//       role: "COO, LogisticsPro",
//       content: "The custom dashboard gives us visibility we never had before. We can now make data-driven decisions instantly.",
//       rating: 5,
//       image: "https://randomuser.me/api/portraits/men/45.jpg"
//     },
//     {
//       name: "Sarah Jenkins",
//       role: "HR Director, TechCorp",
//       content: "Our employee portal is a game changer. It consolidated 5 different tools into one seamless experience.",
//       rating: 5,
//       image: "https://randomuser.me/api/portraits/women/33.jpg"
//     },
//     {
//       name: "David Kim",
//       role: "Founder, FinServe",
//       content: "They understood our complex financial workflows perfectly and built a solution that is both secure and easy to use.",
//       rating: 5,
//       image: "https://randomuser.me/api/portraits/men/12.jpg"
//     }
//   ];

//   const filteredServices = activeFilter === 'all' ? services : services.filter(service => service.category === activeFilter);

//   // Logic functions
//   const handleTestimonialNext = useCallback(() => {
//     if (testimonialScrollRef.current) {
//       const firstChild = testimonialScrollRef.current.children[0] as HTMLElement;
//       const cardWidth = firstChild?.offsetWidth || 0;
//       const gap = 32;
//       const scrollAmount = cardWidth + gap;
//       if (currentTestimonialIndex < testimonials.length - 1) {
//         testimonialScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//         setCurrentTestimonialIndex(prev => prev + 1);
//       } else {
//         testimonialScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
//         setCurrentTestimonialIndex(0);
//       }
//     }
//   }, [currentTestimonialIndex]);

//   /*
//   const handleTestimonialPrev = () => {
//     if (testimonialScrollRef.current) {
//       const cardWidth = testimonialScrollRef.current.children[0]?.offsetWidth || 0;
//       const gap = 32;
//       const scrollAmount = cardWidth + gap;
//       if (currentTestimonialIndex > 0) {
//         testimonialScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//         setCurrentTestimonialIndex(prev => prev - 1);
//       } else {
//         const maxScroll = testimonialScrollRef.current.scrollWidth - testimonialScrollRef.current.clientWidth;
//         testimonialScrollRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
//         setCurrentTestimonialIndex(testimonials.length - 1);
//       }
//     }
//   };
//   */

//   /*
//   const handleManualScroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollContainer = scrollRef.current;
//       const cardWidth = 300;
//       if (direction === 'left') {
//         scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
//       } else {
//         const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
//         if (scrollContainer.scrollLeft >= maxScroll - 10) {
//           scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
//         } else {
//           scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
//         }
//       }
//     }
//   };
//   */

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isPaused && scrollRef.current) {
//         const scrollContainer = scrollRef.current;
//         const cardWidth = 300;
//         const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
//         if (scrollContainer.scrollLeft >= maxScroll - 10) {
//           scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
//         } else {
//           scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
//         }
//       }
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   useEffect(() => {
//     if (!isTestimonialAutoPlaying) return;
//     const interval = setInterval(() => {
//       handleTestimonialNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentTestimonialIndex, isTestimonialAutoPlaying]);

//   const getTechLogo = (name) => {
//     // Specific mappings
//     const map = {
//       'React': 'react', 'Vue.js': 'vuejs', 'Node.js': 'nodejs', 'Next.js': 'nextjs',
//       'Python': 'python', 'C#': 'csharp', 'Go': 'go', 'AWS': 'amazonwebservices'
//     };
//     let formatted = map[name] || name.toLowerCase().split(' ')[0];
//     // Fallback for some icons that might be tricky
//     if (name === 'Google Cloud') formatted = 'googlecloud';
//     return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${formatted}/${formatted}-original.svg`;
//   };

//   return (
//     <>


//       <div className="min-h-screen relative overflow-hidden">
//         <div className="min-h-screen theme-bg-primary relative z-10">

//           {/* === HERO SECTION === */}
//           <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//               <div className="grid grid-cols-1 pt-10 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
//                 {/* Left: Content */}
//                 <div className="animate-fade-scale">
//                   <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold theme-text-primary mb-6 leading-tight">
//                     Custom Software That <br />
//                     <span className="text-transparent bg-clip-text bg-[#2d65bc] animate-gradient-x">Fits Your Business</span>
//                   </h1>
//                   <div className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
//                     <span className="font-bold min-w-[140px] text-transparent bg-clip-text bg-[#2d65bc] animate-gradient-x">
//                       {typingText}<span className="animate-blink">|</span>
//                     </span>
//                   </div>
//                   <p className="text-base sm:text-lg theme-text-secondary mb-8 max-w-xl leading-relaxed">
//                     Off-the-shelf software holding you back? We design and build bespoke web applications that automate your workflows and scale with your growth.
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <Link href={buildUrl('/request-a-quote')} className="group inline-flex items-center justify-center gap-2 bg-[#2d65bc] text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 theme-shadow-card-hover">
//                       Start Your Solution
//                       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </Link>
//                     <button onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center gap-2 border-2 theme-border-accent theme-text-accent font-bold py-4 px-8 rounded-xl hover:scale-105">
//                       View Our Work
//                     </button>
//                   </div>
//                 </div>
//                 {/* Right: Dashboard */}
//                 <div className="relative z-20">
//                   <div className="relative">
//                     <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
//                     <DevAgencyHeroDashboard />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* === FILTERS === */}
//           <section className="py-8 sm:py-12 theme-bg-primary border-y theme-border-primary">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
//                 {filters.map((filter) => (
//                   <button
//                     key={filter.id}
//                     onClick={() => setActiveFilter(filter.id)}
//                     className={`inline-flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id ? 'bg-[#2d65bc] text-white shadow-lg scale-105' : 'theme-bg-secondary theme-text-secondary hover:scale-[1.01]'}`}
//                   >
//                     {filter.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* === SERVICES GRID === */}
//           <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="text-center mb-12 sm:mb-16">
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
//                   Engineering <span style={{ color: '#2d65bc' }}>Capabilities</span>
//                 </h2>
//                 <p className="text-lg sm:text-xl theme-text-secondary max-w-6xl mx-auto leading-relaxed">
//                   We build exactly what you need, how you need it.
//                 </p>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto">
//                 {filteredServices.map((service, index) => {
//                   const IconComponent = service.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="glass-tile rounded-2xl p-3 lg:p-6 depth-3d hover:scale-102 transition-all duration-300 animate-fade-scale"
//                       style={{ animationDelay: `${index * 0.1}s` }}
//                       onMouseEnter={() => setHoveredCard(`service-${index}`)}
//                       onMouseLeave={() => setHoveredCard(null)}
//                     >
//                       <div className="flex flex-col sm:flex-row items-start gap-4">
//                         <div className={`w-14 h-14 rounded-xl bg-[#2d65bc] flex items-center justify-center flex-shrink-0 shadow-lg ${hoveredCard === `service-${index}` ? 'micro-bounce' : ''
//                           }`}>
//                           <IconComponent className="w-7 h-7 text-white" />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-xl font-bold theme-text-primary mb-2 text-left">{service.title}</h3>
//                           <p className="theme-text-secondary text-sm mb-4 text-left leading-relaxed">{service.description}</p>
//                           {service.features && (
//                             <ul className="space-y-2 mb-6">
//                               {service.features.map((feature, idx) => (
//                                 <li key={idx} className="flex items-start gap-2 text-sm theme-text-secondary text-left">
//                                   <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#2d65bc]" />
//                                   <span>{feature}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}

//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>

//           {/* === PROCESS === */}
//           <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="text-center mb-12 sm:mb-16">
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
//                   The Development <span style={{ color: '#2d65bc' }}>Lifecycle</span>
//                 </h2>
//                 <p className="text-lg sm:text-xl theme-text-secondary max-w-6xl mx-auto leading-relaxed">
//                   A transparent, agile process from concept to code.
//                 </p>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
//                 {process.map((step, index) => {
//                   return (
//                     <div key={index} className="relative group animate-fade-scale" style={{ animationDelay: `${index * 0.2}s` }}>
//                       <div
//                         className="glass-tile rounded-2xl p-3 lg:p-6 h-full depth-3d transition-all duration-300 hover:scale-102 text-center cursor-pointer"
//                         onMouseEnter={() => setHoveredCard(`process-${index}`)}
//                         onMouseLeave={() => setHoveredCard(null)}
//                       >
//                         <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#2d65bc] flex items-center justify-center text-white font-bold text-lg shadow-lg mx-auto mb-4">{step.n}</div>
//                         <div className={`w-14 h-14 rounded-xl bg-[#2d65bc] flex items-center justify-center mb-4 mx-auto transition-transform ${hoveredCard === `process-${index}` ? 'micro-bounce' : ''
//                           }`}>
//                           <Layers className="w-7 h-7 text-white" />
//                         </div>
//                         <h3 className="text-lg font-bold theme-text-primary mb-2">{step.t}</h3>
//                         <p className="text-sm theme-text-secondary">{step.d}</p>
//                       </div>
//                       {index < process.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>

//           {/* === TECH STACK === */}
//           {/* <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
//              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//               <div className="text-center mx-auto mb-16">
               
//                 <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">Modern Technologies</h2>
//               </div>
//               <div className="relative group/slider" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
//                 <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30">
//                   <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleManualScroll('left')} className={`p-4 rounded-full backdrop-blur-lg shadow-xl transition-all duration-300 border ${theme === 'dark' ? 'bg-gray-800/90 border-gray-600' : 'bg-white/95 border-gray-300'}`}>
//                     <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
//                   </motion.button>
//                 </div>
//                 <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30">
//                   <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleManualScroll('right')} className={`p-4 rounded-full backdrop-blur-lg shadow-xl transition-all duration-300 border ${theme === 'dark' ? 'bg-gray-800/90 border-gray-600' : 'bg-white/95 border-gray-300'}`}>
//                     <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
//                   </motion.button>
//                 </div>
//                 <div ref={scrollRef} className="flex max-w-7xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide py-8 px-4">
//                   {Object.entries(techStackData).map(([category, techs]) => (
//                     <div key={category} className="mr-6">
//                       <div className="glass-tile rounded-2xl p-3 lg:p-6 min-w-[300px] shrink-0 snap-center depth-3d float-slow-3d">
//                         <h3 className="text-xl font-bold theme-text-primary mb-4 flex items-center gap-2">{category}</h3>
//                         <div className="space-y-3">
//                           {techs.map((tech, idx) => (
//                             <div key={idx} className="glass-hero rounded-xl p-3 hover:scale-105 transition-transform cursor-pointer">
//                               <div className="flex items-center gap-3">
//                                 <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex items-center justify-center flex-shrink-0">
//                                    <img src={getTechLogo(tech.name)} alt={tech.name} className="w-full h-full object-contain" />
//                                 </div>
//                                 <div>
//                                   <h4 className="font-bold theme-text-primary text-sm">{tech.name}</h4>
//                                   <p className="theme-text-secondary text-xs">{tech.description}</p>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section> */}

//           {/* === CASE STUDIES === */}
//           <section id="case-studies" className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="text-center mb-12 sm:mb-16">
//                 <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">Solved Problems</h2>
//                 <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto">Real business challenges we've solved with code.</p>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//                 {caseStudies.map((study, index) => (
//                   <div key={index} className="group theme-card rounded-2xl overflow-hidden theme-shadow-primary hover:theme-shadow-secondary transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-scale" onClick={() => setSelectedCase(study)}>
//                     <div className="relative h-48 overflow-hidden">
//                       <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
//                     </div>
//                     <div className="p-3 lg:p-6">
//                       <h3 className="text-xl font-bold theme-text-primary mb-2">{study.title}</h3>
//                       <p className="theme-text-secondary text-sm mb-4">{study.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {study.tech.map((tech, idx) => (<span key={idx} className="px-2 py-1 text-xs rounded-full theme-bg-tertiary theme-text-muted">{tech}</span>))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Modal */}
//           {selectedCase && (
//             <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedCase(null)}>
//               <div className="theme-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 animate-scale-in" onClick={(e) => e.stopPropagation()}>
//                 <div className="flex justify-between items-start mb-6">
//                   <h3 className="text-3xl font-bold theme-text-primary">{selectedCase.title}</h3>
//                   <button onClick={() => setSelectedCase(null)} className="theme-text-secondary hover:theme-text-primary transition-colors"><X className="w-6 h-6" /></button>
//                 </div>
//                 <img src={selectedCase.image} alt={selectedCase.title} className="w-full h-64 object-cover rounded-2xl mb-6" />
//                 <p className="theme-text-secondary mb-6">{selectedCase.description}</p>
//                 <div className="p-4 bg-green-500/10 rounded-xl mb-6"><p className="text-green-600 font-bold">Results: {selectedCase.results}</p></div>
//                 <div className="flex flex-wrap gap-2">{selectedCase.tech.map((tech, idx) => (<span key={idx} className="px-3 py-2 rounded-full bg-[#2d65bc] text-white text-sm font-medium">{tech}</span>))}</div>
//               </div>
//             </div>
//           )}

//           {/* === TESTIMONIALS === */}
//           {/* <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
//              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="text-center mb-12 sm:mb-16">
//                 <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">Client Feedback</h2>
//               </div>
//               <div className="relative max-w-6xl mx-auto" onMouseEnter={() => setIsTestimonialAutoPlaying(false)} onMouseLeave={() => setIsTestimonialAutoPlaying(true)}>
//                 <button onClick={handleTestimonialPrev} className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full theme-card theme-shadow-primary hover:scale-110"><ChevronLeft className="w-6 h-6 theme-text-primary" /></button>
//                 <button onClick={handleTestimonialNext} className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full theme-card theme-shadow-primary hover:scale-110"><ChevronRight className="w-6 h-6 theme-text-primary" /></button>
//                 <div ref={testimonialScrollRef} className="flex overflow-x-hidden gap-8 pb-4 scroll-smooth snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//                   {testimonials.map((testimonial, index) => (
//                     <div key={index} className="group flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] snap-center theme-card rounded-2xl p-3 lg:p-6 theme-shadow-primary hover:theme-shadow-secondary transition-all duration-500 hover:-translate-y-2">
//                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-t-2xl group-hover:h-2 transition-all duration-300"></div>
//                        <div className="flex gap-1 mb-4 mt-2">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
//                       <p className="theme-text-primary mb-6 italic relative">"{testimonial.content}"</p>
//                       <div className="flex items-center gap-3 pt-4 border-t theme-border-primary">
//                         <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#2d65bc]/20" loading="lazy" />
//                         <div><div className="font-semibold theme-text-primary">{testimonial.name}</div><div className="text-sm theme-text-secondary">{testimonial.role}</div></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section> */}

//           <section className="py-10 sm:py-10 lg:py-15 theme-bg-secondary relative overflow-hidden">

//             <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
//               <div className="mx-auto text-center max-w-6xl">
//                 <div className="rounded-3xl p-3 sm:p-4 py-4 sm:py-8 lg:py-12 lg:p-4 theme-shadow-primary relative overflow-hidden">
//                   <div className="relative z-10">
//                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
//                       Ready to <span style={{ color: '#2d65bc' }}>Elevate Your Brand?</span>
//                     </h2>

//                     <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
//                       Let's craft a distinctive identity and guidelines for your brand. Get started with a free consultation today.
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                       <Link
//                         href="/contacts"
//                         className="inline-flex items-center justify-center px-4 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-102 shadow-lg"
//                         style={{ backgroundColor: '#2d65bc' }}
//                       >
//                         Get Free Brand Audit
//                         <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                         </svg>
//                       </Link>
//                       <Link
//                         href="/request-a-quote"
//                         className="inline-flex items-center justify-center px-4 py-4 font-bold rounded-xl transition-all duration-300 border-2 theme-text-primary theme-border-[#2d65bc]"
//                       >
//                         Request a Quote
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes bounce-slight { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
//         @keyframes loading-bar { 0% { width: 0%; } 100% { width: 99%; } }
//         @keyframes dash { to { stroke-dashoffset: -100; } }
        
//         /* Reuse styles */
//         .glass-hero { background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(26, 26, 40, 0.7)'}; backdrop-filter: blur(20px); border: 1px solid ${theme === 'light' ? 'rgba(45, 101, 188, 0.2)' : 'rgba(255, 255, 255, 0.1)'}; }
//         .neon-edge { box-shadow: 0 0 10px ${theme === 'light' ? 'rgba(45, 101, 188, 0.3)' : 'rgba(100, 200, 255, 0.4)'}, inset 0 0 10px ${theme === 'light' ? 'rgba(45, 101, 188, 0.1)' : 'rgba(100, 200, 255, 0.1)'}; }
//         .glass-tile { background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 50, 0.85)'}; backdrop-filter: blur(20px) saturate(180%); border: 1px solid ${theme === 'light' ? 'rgba(45, 101, 188, 0.3)' : 'rgba(100, 200, 255, 0.2)'}; }
//         .depth-3d { box-shadow: ${theme === 'light' ? '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)' : '0 10px 40px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)'}; transform-style: preserve-3d; }
        
//         .animate-dash { animation: dash 2s linear infinite; }
//         .animate-bounce-slight { animation: bounce-slight 2s infinite ease-in-out; }
//         .animate-loading-bar { animation: loading-bar 1.5s ease-out forwards; }
//         .animate-fade-in { animation: fade-in 0.3s ease forwards; }
//         .animate-fade-scale { animation: fade-scale 0.6s ease forwards; }
//         .animate-scale-in { animation: scale-in 0.3s ease forwards; }
//         .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
//         .animate-blink { animation: blink 1s step-end infinite; }
//         .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
//         .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        
//         @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
//         @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
//         @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
//         @keyframes fade-scale { 0% { opacity: 0; transform: scale(0.98); } 100% { opacity: 1; transform: scale(1); } }
//         @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
//         @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

//         .perspective-hero { perspective: 2000px; transform-style: preserve-3d; }
//         .transform-3d { transform-style: preserve-3d; }
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//         html { scroll-behavior: smooth; }
//         @keyframes microBounce {
//         0%, 100% { transform: translateY(0) scale(1); }
//         50% { transform: translateY(-8px) scale(1.02); }
//       }
      
//       .micro-bounce {
//         animation: microBounce 0.8s ease-in-out infinite;
//       }

//       .glass-tile {
//         background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 50, 0.85)'};
//         backdrop-filter: blur(20px) saturate(180%);
//         border: 1px solid ${theme === 'light' ? 'rgba(45, 101, 188, 0.3)' : 'rgba(100, 200, 255, 0.2)'};
//       }
      
//       .depth-3d {
//         box-shadow: ${theme === 'light'
//           ? '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)'
//           : '0 10px 40px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)'};
//         transform-style: preserve-3d;
//       }
//     `}</style>
//     </>
//   );
// };

// export default CustomWebSolution;