// 'use client';
// import React, { useState, useEffect } from 'react';
// import {
//   Settings, CheckCircle, Lock, Database, Terminal, Workflow, Monitor, Network
// } from 'lucide-react';
// import { useTheme } from 'next-themes';

// const CUSTOM_WEB_TABS = [
//   { id: 'logic', label: 'Business Logic', icon: Workflow, color: 'text-blue-500' },
//   { id: 'data', label: 'Data Core', icon: Database, color: 'text-green-500' },
//   { id: 'ui', label: 'User Interface', icon: Monitor, color: 'text-purple-500' },
//   { id: 'api', label: 'Integrations', icon: Network, color: 'text-orange-500' },
// ];

// const DevAgencyHeroDashboard = () => {
//   const { resolvedTheme: theme } = useTheme();
//   const [activeTab, setActiveTab] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);
//   const isLight = theme === 'light';

//   useEffect(() => {
//     let interval: string | number | NodeJS.Timeout | undefined;
//     if (isAutoPlay) {
//       interval = setInterval(() => {
//         setActiveTab((prev) => (prev + 1) % CUSTOM_WEB_TABS.length);
//       }, 4000);
//     }
//     return () => clearInterval(interval);
//   }, [isAutoPlay]);

//   const handleManualClick = (index: number) => {
//     setActiveTab(index);
//     setIsAutoPlay(false);
//     setTimeout(() => setIsAutoPlay(true), 6000);
//   };

//   const glassClass = isLight ? 'bg-white/90 border-white/60' : 'bg-slate-900/90 border-slate-700/60';
//   const cardBg = isLight ? 'bg-white border-gray-100' : 'bg-slate-800 border-slate-700';
//   const textColor = isLight ? 'text-gray-800' : 'text-gray-100';
//   const subTextColor = isLight ? 'text-gray-500' : 'text-gray-400';

//   return (
//     <div
//       className="w-full max-w-[600px] h-[350px] relative perspective-hero mx-auto lg:mr-0 display:block"
//       onMouseEnter={() => setIsAutoPlay(false)}
//       onMouseLeave={() => setIsAutoPlay(true)}
//     >
//       <div className={`absolute inset-0 rounded-3xl p-4 backdrop-blur-xl border shadow-2xl transform-3d rotate-y-12 hover:rotate-y-0 transition-all duration-700 ease-out ${glassClass}`}>

//         {/* Header - Simulating a Dev Environment Header */}
//         <div className="flex items-center justify-between pb-4 border-b border-gray-200/20">
//           <div className="flex items-center gap-2">
//             <div className="p-1.5 bg-indigo-500/10 rounded-md">
//               <Terminal size={14} className="text-indigo-500" />
//             </div>
//             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">System Architect</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center gap-1.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
//               <span className="text-[10px] font-bold text-blue-500">v2.0 Deploying</span>
//             </div>
//           </div>
//         </div>

//         <div className="flex h-[calc(100%-50px)] gap-4 pt-4">
//           {/* Sidebar */}
//           <div className="w-14 flex flex-col gap-3 border-r border-gray-500/10 pr-2 hidden sm:block">
//             {CUSTOM_WEB_TABS.map((tab, index) => (
//               <button
//                 key={tab.id}
//                 onClick={(e) => { e.stopPropagation(); handleManualClick(index); }}
//                 className={`w-10 h-10 rounded-xl flex items-center mb-4 justify-center transition-all duration-300 relative group ${activeTab === index
//                   ? 'bg-[#2d65bc] text-white shadow-lg scale-105'
//                   : 'bg-gray-500/5 text-gray-400 hover:bg-gray-500/10'
//                   }`}
//                 title={tab.label}
//               >
//                 <tab.icon size={18} />
//               </button>
//             ))}
//           </div>

//           {/* Content Area - Visualizing Software Concepts */}
//           <div className="flex-1 relative overflow-hidden h-full rounded-xl">

//             {/* TAB 1: BUSINESS LOGIC (Automated Flows) */}
//             {activeTab === 0 && (
//               <div className="animate-fade-in flex flex-col justify-center h-full space-y-6">
//                 <div className="px-2">
//                   <h3 className={`font-bold text-lg ${textColor}`}>Automated Workflows</h3>
//                   <p className={`text-xs ${subTextColor}`}>We code your complex business rules</p>
//                 </div>

//                 {/* Visual Flowchart Animation */}
//                 <div className="relative h-32 flex items-center justify-between px-4">
//                   {/* Step 1 */}
//                   <div className={`w-16 h-12 rounded-lg border ${cardBg} flex flex-col items-center justify-center shadow-sm z-10 relative`}>
//                     <span className="text-[8px] font-bold text-gray-400">Input</span>
//                     <div className="w-2 h-2 rounded-full bg-gray-300 mt-1"></div>
//                   </div>

//                   {/* Connecting Line 1 */}
//                   <div className="flex-1 h-[2px] bg-gray-200 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-blue-500 animate-loading-bar"></div>
//                   </div>

//                   {/* Step 2 (Processing) */}
//                   <div className={`w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500 flex items-center justify-center z-10 animate-pulse`}>
//                     <Settings size={20} className="text-blue-500 animate-spin-slow" />
//                   </div>

//                   {/* Connecting Line 2 */}
//                   <div className="flex-1 h-[2px] bg-gray-200 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-green-500 animate-loading-bar delay-500"></div>
//                   </div>

//                   {/* Step 3 (Result) */}
//                   <div className={`w-16 h-12 rounded-lg border ${cardBg} flex flex-col items-center justify-center shadow-sm z-10 bg-green-50/50`}>
//                     <span className="text-[8px] font-bold text-green-600">Result</span>
//                     <CheckCircle size={10} className="text-green-500 mt-1" />
//                   </div>
//                 </div>
//                 <div className="text-center text-[10px] text-gray-400">Reducing manual work by 90%</div>
//               </div>
//             )}

//             {/* TAB 2: DATA CORE (Database & Security) */}
//             {activeTab === 1 && (
//               <div className="animate-fade-in space-y-4 h-full flex flex-col justify-center">
//                 <div className="px-2 flex justify-between items-center">
//                   <div>
//                     <h3 className={`font-bold ${textColor}`}>Data Architecture</h3>
//                     <p className={`text-xs ${subTextColor}`}>Secure & Scalable Storage</p>
//                   </div>
//                   <Lock size={14} className="text-green-500" />
//                 </div>

//                 <div className="flex justify-center gap-3 items-end h-32 pb-4">
//                   {/* Server Stacks */}
//                   {[1, 2, 3].map(i => (
//                     <div key={i} className={`w-12 rounded-lg border ${cardBg} flex flex-col items-center justify-end p-1 space-y-1 relative overflow-hidden ${i === 2 ? 'h-4/5' : 'h-full'}`}>
//                       {/* Blinking Data Lights */}
//                       <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></div>
//                       <div className="w-full h-1 bg-gray-200 rounded"></div>
//                       <div className="w-full h-1 bg-gray-200 rounded"></div>
//                       <div className="w-full h-1 bg-gray-200 rounded"></div>
//                       <Database size={16} className="text-blue-500 mt-2 mb-1" />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex justify-center gap-2">
//                   <span className="text-[8px] bg-green-100 text-green-700 px-2 py-1 rounded border border-green-200">Encrypted</span>
//                   <span className="text-[8px] bg-blue-100 text-blue-700 px-2 py-1 rounded border border-blue-200">Cloud Hosted</span>
//                 </div>
//               </div>
//             )}

//             {/* TAB 3: USER INTERFACE (Dashboards) */}
//             {activeTab === 2 && (
//               <div className="animate-fade-in space-y-4 h-full flex flex-col justify-center">
//                 <div className="px-2">
//                   <h3 className={`font-bold ${textColor}`}>Custom Dashboards</h3>
//                   <p className={`text-xs ${subTextColor}`}>Visualizing your KPIs</p>
//                 </div>

//                 <div className={`mx-4 p-3 rounded-xl border ${cardBg} space-y-2 shadow-sm bg-gray-50/50`}>
//                   {/* Mock Charts */}
//                   <div className="flex justify-between items-center mb-2">
//                     <div className="h-2 w-16 bg-gray-300 rounded"></div>
//                     <div className="h-3 w-3 rounded-full bg-purple-200"></div>
//                   </div>
//                   <div className="flex gap-2 items-end h-20">
//                     <div className="w-1/4 bg-purple-200 h-[40%] rounded-t"></div>
//                     <div className="w-1/4 bg-purple-300 h-[70%] rounded-t"></div>
//                     <div className="w-1/4 bg-purple-400 h-[50%] rounded-t"></div>
//                     <div className="w-1/4 bg-purple-500 h-[90%] rounded-t relative group">
//                       <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                         +120%
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-center text-[10px] text-gray-400">Real-time Admin Panels & Customer Portals</div>
//               </div>
//             )}

//             {/* TAB 4: INTEGRATIONS (API) */}
//             {activeTab === 3 && (
//               <div className="animate-fade-in space-y-4 h-full flex flex-col justify-center">
//                 <div className="px-2 mb-1">
//                   <h3 className={`font-bold ${textColor}`}>Seamless Integrations</h3>
//                   <p className={`text-xs ${subTextColor}`}>Connecting your ecosystem</p>
//                 </div>

//                 <div className="space-y-2 px-4">
//                   {/* Connected Services */}
//                   <div className={`p-2 rounded-lg border ${cardBg} flex justify-between items-center`}>
//                     <div className="flex items-center gap-2">
//                       <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-[8px] font-bold text-blue-600">CRM</div>
//                       <span className={`text-xs ${textColor}`}>Salesforce Sync</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-[8px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
//                       <CheckCircle size={8} /> Active
//                     </div>
//                   </div>
//                   <div className={`p-2 rounded-lg border ${cardBg} flex justify-between items-center`}>
//                     <div className="flex items-center gap-2">
//                       <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center text-[8px] font-bold text-orange-600">ERP</div>
//                       <span className={`text-xs ${textColor}`}>Inventory Data</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-[8px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
//                       <CheckCircle size={8} /> Active
//                     </div>
//                   </div>
//                   <div className={`p-2 rounded-lg border ${cardBg} flex justify-between items-center`}>
//                     <div className="flex items-center gap-2">
//                       <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-[8px] font-bold text-purple-600">PAY</div>
//                       <span className={`text-xs ${textColor}`}>Payment Gateway</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-[8px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
//                       <CheckCircle size={8} /> Active
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevAgencyHeroDashboard;
