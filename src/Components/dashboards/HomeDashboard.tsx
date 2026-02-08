'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Users, TrendingUp, Zap, Activity, Rocket, Award, Target } from 'lucide-react';

export default function HomeDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, icon: Globe, label: 'Global', ariaLabel: 'Global Reach' },
    { id: 1, icon: TrendingUp, label: 'Growth', ariaLabel: 'Growth Metrics' },
    { id: 2, icon: Zap, label: 'Speed', ariaLabel: 'Performance Speed' },
    { id: 3, icon: Target, label: 'Goals', ariaLabel: 'Project Goals' },
  ];

  return (
    <div className="w-full max-w-[600px] h-[400px] mx-auto glass-card-dark rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="h-14 dashboard-border border-b flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold dashboard-text-primary">Innovation Hub</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-emerald-400">Live Metrics</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100%-3.5rem)]">
        {/* Sidebar */}
        <div className="w-20 dashboard-border border-r flex flex-col items-center py-6 gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                title={tab.label}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'dashboard-text-secondary hover:dashboard-text-primary hover:dashboard-bg-secondary'
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 relative overflow-hidden">
             {activeTab === 0 && <GlobalContent />}
             {activeTab === 1 && <GrowthContent />}
             {activeTab === 2 && <SpeedContent />}
             {activeTab === 3 && <GoalsContent />}
        </div>
      </div>
    </div>
  );
}

function GlobalContent() {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-6">
            <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border-2 border-indigo-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-20 h-20 text-blue-500/80" />
                </div>
                
                {/* Orbiting dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-[spin_10s_linear_infinite_origin-center] origin-[50%_100px]" />
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
                {[
                    { label: 'Countries', value: '12+' },
                    { label: 'Partners', value: '45+' },
                    { label: 'Users', value: '10k+' }
                ].map((stat, i) => (
                    <div key={i} className="text-center p-2 rounded-lg dashboard-bg-secondary dashboard-border border">
                        <div className="text-lg font-bold dashboard-text-primary">{stat.value}</div>
                        <div className="text-[10px] dashboard-text-secondary uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function GrowthContent() {
    return (
        <div className="h-full flex flex-col justify-between">
            <div className="space-y-4">
                <div className="flex items-end justify-between">
                    <div>
                        <div className="text-3xl font-bold dashboard-text-primary">245%</div>
                        <div className="text-sm text-emerald-400 flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" /> Year over Year
                        </div>
                    </div>
                    <div className="flex gap-1 items-end h-16">
                         <div className="w-3 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm hover:opacity-80 transition-opacity h-[40%]" />
                         <div className="w-3 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm hover:opacity-80 transition-opacity h-[65%]" />
                         <div className="w-3 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm hover:opacity-80 transition-opacity h-[45%]" />
                         <div className="w-3 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm hover:opacity-80 transition-opacity h-[78%]" />
                         <div className="w-3 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm hover:opacity-80 transition-opacity h-[55%]" />
                         <div className="w-3 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm hover:opacity-80 transition-opacity h-[80%]" />
                         <div className="w-3 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm hover:opacity-80 transition-opacity h-[95%]" />
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <h4 className="text-xs font-semibold dashboard-text-secondary uppercase">Key Metrics</h4>
                <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                        <span className="dashboard-text-secondary">Revenue Growth</span>
                        <span className="dashboard-text-primary font-medium">85%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-[85%]" />
                    </div>
                </div>
                <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                        <span className="dashboard-text-secondary">Client Retention</span>
                        <span className="dashboard-text-primary font-medium">92%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[92%]" />
                    </div>
                </div>
                <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                        <span className="dashboard-text-secondary">Market Share</span>
                        <span className="dashboard-text-primary font-medium">40%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full w-[40%]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function SpeedContent() {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-8">
            <div className="relative">
                <svg className="w-48 h-48 transform -rotate-90">
                    <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-700/50" />
                    <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={552} strokeDashoffset={552 - (552 * 0.85)} className="text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000 ease-out" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold dashboard-text-primary">98<span className="text-xl text-indigo-400">/100</span></span>
                    <span className="text-xs dashboard-text-secondary uppercase tracking-widest mt-1">Performance</span>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full">
                 <div className="dashboard-bg-secondary rounded-xl p-3 dashboard-border border flex items-center gap-3">
                     <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400"><Zap className="w-5 h-5"/></div>
                     <div>
                         <div className="dashboard-text-primary font-bold">50ms</div>
                         <div className="text-[10px] dashboard-text-secondary">Latency</div>
                     </div>
                 </div>
                 <div className="dashboard-bg-secondary rounded-xl p-3 dashboard-border border flex items-center gap-3">
                     <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400"><Activity className="w-5 h-5"/></div>
                     <div>
                         <div className="dashboard-text-primary font-bold">99.9%</div>
                         <div className="text-[10px] dashboard-text-secondary">Uptime</div>
                     </div>
                 </div>
            </div>
        </div>
    )
}

function GoalsContent() {
    return (
        <div className="h-full space-y-4">
            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-3 shadow-lg shadow-emerald-500/20">
                    <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold dashboard-text-primary">Q3 Objectives</h3>
                <p className="text-xs text-emerald-400">On Track to Exceed</p>
            </div>

            <div className="space-y-3">
                 {[
                     { label: 'Launch New Platform', completed: true },
                     { label: 'Expand to Asian Market', completed: true },
                     { label: 'Achieve SOC2 Compliance', completed: true },
                     { label: 'Hire 20+ Engineers', completed: false },
                 ].map((goal, i) => (
                     <div key={i} className="flex items-center gap-3 p-3 rounded-xl dashboard-bg-secondary dashboard-border border hover:dashboard-bg-tertiary transition-colors">
                         <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${goal.completed ? 'bg-emerald-500 border-emerald-500' : 'border-slate-500'}`}>
                             {goal.completed && <Award className="w-3 h-3 text-white" />}
                         </div>
                         <span className={`text-sm ${goal.completed ? 'dashboard-text-primary' : 'dashboard-text-secondary'}`}>{goal.label}</span>
                     </div>
                 ))}
            </div>
        </div>
    )
}
