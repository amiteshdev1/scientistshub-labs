'use client';

import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Search, ArrowUp, ArrowDown, Users, Eye } from 'lucide-react';

export default function MarketingDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, icon: BarChart3, label: 'Overview', ariaLabel: 'Analytics Overview' },
    { id: 1, icon: Users, label: 'Traffic', ariaLabel: 'Traffic Analytics' },
    { id: 2, icon: Target, label: 'Conversions', ariaLabel: 'Conversion Funnel' },
    { id: 3, icon: Search, label: 'SEO', ariaLabel: 'SEO Analytics' },
  ];

  return (
    <div className="w-full max-w-[600px] h-[400px] mx-auto glass-card-dark rounded-3xl overflow-hidden shadow-2xl">
      {/* Header - Analytics Style */}
      <div className="h-14 dashboard-header dashboard-border border-b flex items-center justify-between px-6">
        {/* Logo/Title */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2d65bc] to-purple-600 flex items-center justify-center">
            <BarChart3 className="w-4 h-4 dashboard-text-primary" />
          </div>
          <span className="text-sm font-semibold dashboard-text-primary">Analytics</span>
        </div>

        {/* Date Range */}
        <div className="px-3 py-1.5 rounded-lg dashboard-bg-secondary dashboard-border border">
          <span className="text-xs dashboard-text-secondary">Last 30 days</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex h-[calc(100%-3.5rem)]">
        {/* Sidebar */}
        <div className="w-20 dashboard-sidebar dashboard-border border-r flex flex-col items-center py-6 gap-4" role="tablist" aria-label="Marketing dashboard sections">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-label={tab.ariaLabel}
                aria-selected={activeTab === tab.id ? 'true' : 'false'}
                role="tab"
                className={`dashboard-tab w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'active'
                    : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-hidden">
          <div key={activeTab} className="dashboard-content h-full">
            {activeTab === 0 && <OverviewContent />}
            {activeTab === 1 && <TrafficContent />}
            {activeTab === 2 && <ConversionsContent />}
            {activeTab === 3 && <SEOContent />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Overview Tab
function OverviewContent() {
  return (
    <div className="h-full space-y-4">
      {/* Performance Score */}
      <div className="bg-gradient-to-br from-[#2d65bc]/20 to-green-500/20 rounded-xl p-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-6xl font-bold dashboard-text-primary mb-1">99</div>
          <div className="text-sm dashboard-text-secondary">Performance Score</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d65bc]/10 to-green-500/10 animate-gradient-x" />
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 gap-3">
        <MetricCard
          value="24.5K"
          label="Visitors"
          trend={12.5}
          positive={true}
          icon={<Users className="w-4 h-4" />}
        />
        <MetricCard
          value="8.2K"
          label="Page Views"
          trend={8.3}
          positive={true}
          icon={<Eye className="w-4 h-4" />}
        />
        <MetricCard
          value="3:24"
          label="Avg. Time"
          trend={5.1}
          positive={true}
          icon={<TrendingUp className="w-4 h-4" />}
        />
        <MetricCard
          value="68%"
          label="Conv. Rate"
          trend={2.8}
          positive={false}
          icon={<Target className="w-4 h-4" />}
        />
      </div>
    </div>
  );
}

function MetricCard({ value, label, trend, positive, icon }: any) {
  return (
    <div className="dashboard-bg-secondary rounded-lg p-3 hover:dashboard-bg-tertiary transition">
      <div className="flex items-center justify-between mb-2">
        <div className="dashboard-text-secondary">{icon}</div>
        <div className={`flex items-center gap-1 text-xs font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>
          {positive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {trend}%
        </div>
      </div>
      <div className="text-2xl font-bold dashboard-text-primary">{value}</div>
      <div className="text-xs dashboard-text-secondary">{label}</div>
    </div>
  );
}

// Traffic Tab
function TrafficContent() {
  const data = [
    { label: 'Mon', value: 65, height: '65%' },
    { label: 'Tue', value: 78, height: '78%' },
    { label: 'Wed', value: 52, height: '52%' },
    { label: 'Thu', value: 88, height: '88%' },
    { label: 'Fri', value: 95, height: '95%' },
    { label: 'Sat', value: 70, height: '70%' },
    { label: 'Sun', value: 60, height: '60%' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="text-xs font-semibold dashboard-text-secondary uppercase mb-4">Weekly Traffic</div>
      
      {/* Bar Chart */}
      <div className="flex-1 flex items-end justify-between gap-2">
        {data.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full relative h-full flex items-end">
              <div
                className="chart-bar w-full bg-gradient-to-t from-[#2d65bc] to-blue-400 rounded-t-lg relative group origin-bottom"
                data-height={item.height}
                data-index={i}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs dashboard-text-primary opacity-0 group-hover:opacity-100 transition">
                  {item.value}%
                </div>
              </div>
            </div>
            <span className="text-xs dashboard-text-secondary">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Traffic Sources */}
      <div className="mt-6 grid grid-cols-3 gap-2">
        {[
          { source: 'Organic', value: '45%', color: 'bg-green-500' },
          { source: 'Direct', value: '32%', color: 'bg-blue-500' },
          { source: 'Social', value: '23%', color: 'bg-purple-500' },
        ].map((item, i) => (
          <div key={i} className="dashboard-bg-secondary rounded-lg p-2 text-center">
            <div className={`w-2 h-2 ${item.color} rounded-full mx-auto mb-1`} />
            <div className="text-xs dashboard-text-primary font-medium">{item.value}</div>
            <div className="text-xs dashboard-text-secondary">{item.source}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Conversions Tab
function ConversionsContent() {
  const funnelStages = [
    { name: 'Visitors', value: 10000, percentage: 100, width: '100%' },
    { name: 'Engaged', value: 7500, percentage: 75, width: '75%' },
    { name: 'Leads', value: 4200, percentage: 42, width: '60%' },
    { name: 'Customers', value: 1800, percentage: 18, width: '40%' },
  ];

  return (
    <div className="h-full space-y-4">
      <div className="text-xs font-semibold dashboard-text-secondary uppercase">Conversion Funnel</div>
      
      {/* Funnel Visualization */}
      <div className="space-y-3">
        {funnelStages.map((stage, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="dashboard-text-primary font-medium">{stage.name}</span>
              <span className="dashboard-text-secondary">{stage.value.toLocaleString()}</span>
            </div>
            <div className="relative">
              <div className="w-full h-12 dashboard-bg-tertiary rounded-lg overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#2d65bc] to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-semibold transition-all duration-700"
                  data-width={stage.width}
                >
                  {stage.percentage}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conversion Rate */}
      <div className="mt-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm dashboard-text-secondary mb-1">Overall Conversion Rate</div>
            <div className="text-3xl font-bold dashboard-text-primary">18%</div>
          </div>
          <div className="text-green-400 flex items-center gap-1 text-sm font-medium">
            <ArrowUp className="w-4 h-4" />
            +3.2%
          </div>
        </div>
      </div>
    </div>
  );
}

// SEO Tab
function SEOContent() {
  const keywords = [
    { keyword: 'web development', rank: 1, traffic: 2500, trend: 'up' },
    { keyword: 'app design', rank: 3, traffic: 1800, trend: 'up' },
    { keyword: 'digital marketing', rank: 5, traffic: 1200, trend: 'down' },
    { keyword: 'ui ux design', rank: 2, traffic: 2100, trend: 'up' },
  ];

  return (
    <div className="h-full space-y-4">
      <div className="text-xs font-semibold dashboard-text-secondary uppercase">Top Keywords</div>

      {/* Keywords List */}
      <div className="space-y-2">
        {keywords.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 dashboard-bg-secondary rounded-lg p-3 hover:dashboard-bg-tertiary transition"
          >
            {/* Rank Badge */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
              item.rank <= 3 ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            }`}>
              {item.rank}
            </div>

            {/* Keyword Info */}
            <div className="flex-1">
              <div className="text-sm font-medium dashboard-text-primary">{item.keyword}</div>
              <div className="text-xs dashboard-text-secondary">{item.traffic.toLocaleString()} visits/mo</div>
            </div>

            {/* Trend */}
            <div className={`${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
              {item.trend === 'up' ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* SEO Health Score */}
      <div className="bg-gradient-to-br from-[#2d65bc]/20 to-blue-500/20 rounded-xl p-4 border border-[#2d65bc]/30">
        <div className="text-sm dashboard-text-secondary mb-2">SEO Health Score</div>
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold dashboard-text-primary">94</div>
          <div className="flex-1">
            <div className="w-full h-2 dashboard-bg-tertiary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#2d65bc] to-green-400 rounded-full animate-loading"
                data-progress="94"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
