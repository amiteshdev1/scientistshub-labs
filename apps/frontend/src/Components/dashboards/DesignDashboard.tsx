// 'use client';

// import React, { useState } from 'react';
// import { Layers, Box, Layout, Download, Monitor, Tablet, Smartphone, Eye, EyeOff } from 'lucide-react';

// export default function DesignDashboard() {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     { id: 0, icon: Layout, label: 'Canvas', ariaLabel: 'Design Canvas' },
//     { id: 1, icon: Layers, label: 'Layers', ariaLabel: 'Layer Panel' },
//     { id: 2, icon: Box, label: 'Components', ariaLabel: 'UI Components' },
//     { id: 3, icon: Download, label: 'Export', ariaLabel: 'Export Options' },
//   ];

//   return (
//     <div className="w-full max-w-[600px] h-[400px] mx-auto glass-card-dark rounded-3xl overflow-hidden shadow-2xl">
//       {/* Header - Design Tool Toolbar */}
//       <div className="h-14 dashboard-header dashboard-border border-b flex items-center justify-between px-6">
//         {/* Tool Icons */}
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-lg bg-[#2d65bc] flex items-center justify-center">
//             <div className="w-4 h-4 border-2 border-white" />
//           </div>
//           <div className="w-8 h-8 rounded-lg dashboard-bg-secondary hover:dashboard-bg-tertiary flex items-center justify-center cursor-pointer transition">
//             <div className="w-4 h-4 border-2 border-gray-400 rounded-full" />
//           </div>
//           <div className="w-8 h-8 rounded-lg dashboard-bg-secondary hover:dashboard-bg-tertiary flex items-center justify-center cursor-pointer transition">
//             <span className="text-xs font-bold dashboard-text-secondary">T</span>
//           </div>
//         </div>

//         {/* Project Name */}
//         <div className="text-sm font-medium dashboard-text-primary">DesignSystem.fig</div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex h-[calc(100%-3.5rem)]">
//         {/* Sidebar */}
//         <div className="w-20 dashboard-sidebar dashboard-border border-r flex flex-col items-center py-6 gap-4" role="tablist" aria-label="Design dashboard sections">
//           {tabs.map((tab) => {
//             const Icon = tab.icon;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 aria-label={tab.ariaLabel}
//                 aria-selected={activeTab === tab.id ? 'true' : 'false'}
//                 role="tab"
//                 className={`dashboard-tab w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'active'
//                     : ''
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//               </button>
//             );
//           })}
//         </div>

//         {/* Content Area */}
//         <div className="flex-1 p-6 overflow-hidden">
//           <div key={activeTab} className="dashboard-content h-full">
//             {activeTab === 0 && <CanvasContent />}
//             {activeTab === 1 && <LayersContent />}
//             {activeTab === 2 && <ComponentsContent />}
//             {activeTab === 3 && <ExportContent />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Canvas Tab - Device Mockups
// function CanvasContent() {
//   return (
//     <div className="h-full flex items-center justify-center">
//       <div className="flex items-end gap-4">
//         {/* Mobile */}
//         <div className="micro-bounce-hover">
//           <div className="w-16 h-28 bg-gradient-to-br from-[#2d65bc] to-blue-600 rounded-lg border-2 border-white/20 flex flex-col p-2">
//             <div className="flex-1 bg-white/10 rounded-sm mb-1" />
//             <div className="h-1 w-8 bg-white/30 rounded-full mx-auto" />
//           </div>
//           <div className="text-xs text-center mt-2 dashboard-text-secondary">Mobile</div>
//         </div>

//         {/* Tablet */}
//         <div className="micro-bounce-hover [animation-delay:0.2s]">
//           <div className="w-24 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg border-2 border-white/20 flex flex-col p-2">
//             <div className="flex-1 bg-white/10 rounded-sm mb-1" />
//             <div className="h-1 w-12 bg-white/30 rounded-full mx-auto" />
//           </div>
//           <div className="text-xs text-center mt-2 dashboard-text-secondary">Tablet</div>
//         </div>

//         {/* Desktop */}
//         <div className="micro-bounce-hover [animation-delay:0.4s]">
//           <div className="w-32 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg border-2 border-white/20 flex flex-col p-2">
//             <div className="h-1.5 bg-white/20 rounded-sm mb-1" />
//             <div className="flex-1 bg-white/10 rounded-sm" />
//           </div>
//           <div className="text-xs text-center mt-2 dashboard-text-secondary">Desktop</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Layers Tab
// function LayersContent() {
//   const layers = [
//     { name: 'Header', type: 'Frame', visible: true, indent: 0 },
//     { name: 'Logo', type: 'Component', visible: true, indent: 1 },
//     { name: 'Navigation', type: 'Frame', visible: true, indent: 1 },
//     { name: 'Hero Section', type: 'Frame', visible: true, indent: 0 },
//     { name: 'Title', type: 'Text', visible: true, indent: 1 },
//     { name: 'Subtitle', type: 'Text', visible: false, indent: 1 },
//     { name: 'CTA Button', type: 'Component', visible: true, indent: 1 },
//     { name: 'Dashboard', type: 'Frame', visible: true, indent: 1 },
//   ];

//   return (
//     <div className="h-full overflow-auto space-y-1">
//       {layers.map((layer, i) => (
//         <div
//           key={i}
//           className="flex items-center gap-2 px-3 py-2 rounded-lg dashboard-bg-secondary hover:dashboard-bg-tertiary transition cursor-pointer"
//           data-indent={layer.indent}
//         >
//           {layer.visible ? (
//             <Eye className="w-4 h-4 dashboard-text-secondary" />
//           ) : (
//             <EyeOff className="w-4 h-4 dashboard-text-muted" />
//           )}
//           <div className="flex-1">
//             <div className="text-sm dashboard-text-primary">{layer.name}</div>
//             <div className="text-xs dashboard-text-muted">{layer.type}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// // Components Tab
// function ComponentsContent() {
//   const components = [
//     { name: 'Button', color: 'from-[#2d65bc] to-blue-600' },
//     { name: 'Card', color: 'from-purple-500 to-pink-600' },
//     { name: 'Input', color: 'from-green-500 to-emerald-600' },
//     { name: 'Modal', color: 'from-orange-500 to-red-600' },
//     { name: 'Nav', color: 'from-cyan-500 to-blue-600' },
//     { name: 'Form', color: 'from-indigo-500 to-purple-600' },
//   ];

//   return (
//     <div className="h-full">
//       <div className="text-xs font-semibold dashboard-text-secondary uppercase mb-3">UI Components</div>
//       <div className="grid grid-cols-3 gap-3">
//         {components.map((comp, i) => (
//           <div
//             key={i}
//             className={`aspect-square rounded-xl bg-gradient-to-br ${comp.color} hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-semibold text-sm shadow-lg`}
//           >
//             {comp.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Export Tab
// function ExportContent() {
//   return (
//     <div className="h-full space-y-4">
//       {/* Format Selection */}
//       <div>
//         <div className="text-xs font-semibold dashboard-text-secondary uppercase mb-2">Export Format</div>
//         <div className="grid grid-cols-4 gap-2">
//           {['PNG', 'JPG', 'SVG', 'PDF'].map((format, i) => (
//             <button
//               key={i}
//               className={`py-2 px-3 rounded-lg text-sm font-medium transition ${
//                 i === 0
//                   ? 'bg-[#2d65bc] text-white'
//                   : 'dashboard-bg-secondary dashboard-text-secondary hover:dashboard-bg-tertiary'
//               }`}
//             >
//               {format}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Resolution Options */}
//       <div>
//         <div className="text-xs font-semibold dashboard-text-secondary uppercase mb-2">Resolution</div>
//         <div className="space-y-2">
//           {[
//             { name: '1x', desc: '1920 × 1080', selected: false },
//             { name: '2x', desc: '3840 × 2160', selected: true },
//             { name: '3x', desc: '5760 × 3240', selected: false },
//           ].map((res, i) => (
//             <div
//               key={i}
//               className={`flex items-center justify-between p-3 rounded-lg transition cursor-pointer ${
//                 res.selected
//                   ? 'bg-[#2d65bc]/20 border border-[#2d65bc]'
//                   : 'dashboard-bg-secondary dashboard-border border hover:border-[var(--hero-primary)]/50'
//               }`}
//             >
//               <div>
//                 <div className="text-sm font-medium dashboard-text-primary">{res.name}</div>
//                 <div className="text-xs dashboard-text-secondary">{res.desc}</div>
//               </div>
//               {res.selected && (
//                 <div className="w-5 h-5 rounded-full bg-[#2d65bc] flex items-center justify-center">
//                   <div className="w-2 h-2 rounded-full bg-white" />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Export Progress */}
//       <div className="bg-gradient-to-r from-[#2d65bc]/20 to-purple-500/20 rounded-xl p-4">
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-sm font-medium dashboard-text-primary">Exporting...</span>
//           <span className="text-xs dashboard-text-secondary">67%</span>
//         </div>
//         <div className="w-full h-2 dashboard-bg-tertiary rounded-full overflow-hidden">
//           <div
//             className="h-full bg-gradient-to-r from-[#2d65bc] to-purple-500 animate-loading rounded-full"
//             data-progress="67"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
