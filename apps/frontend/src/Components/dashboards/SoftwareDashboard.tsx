'use client';

import React, { useState } from 'react';
import { Network, Zap, Shield, Activity, Server, Database, Cloud, Lock, CheckCircle2 } from 'lucide-react';

export default function SoftwareDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, icon: Network, label: 'Architecture', ariaLabel: 'System Architecture' },
    { id: 1, icon: Zap, label: 'Scale', ariaLabel: 'Scalability' },
    { id: 2, icon: Shield, label: 'Security', ariaLabel: 'Security Features' },
    { id: 3, icon: Activity, label: 'Monitor', ariaLabel: 'System Monitoring' },
  ];

  return (
    <div className="w-full max-w-[600px] h-[400px] mx-auto glass-card-dark rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="h-14 dashboard-header dashboard-border border-b flex items-center justify-between px-6">
        {/* System Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2d65bc] to-cyan-500 flex items-center justify-center">
            <Network className="w-4 h-4 dashboard-text-primary" />
          </div>
          <span className="text-sm font-semibold dashboard-text-primary">System Dashboard</span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
          <span className="status-dot w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-green-400">All Systems Operational</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex h-[calc(100%-3.5rem)]">
        {/* Sidebar */}
        <div className="w-20 dashboard-sidebar dashboard-border border-r flex flex-col items-center py-6 gap-4" role="tablist" aria-label="Software dashboard sections">
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
            {activeTab === 0 && <ArchitectureContent />}
            {activeTab === 1 && <ScalabilityContent />}
            {activeTab === 2 && <SecurityContent />}
            {activeTab === 3 && <MonitoringContent />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Architecture Tab
function ArchitectureContent() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="space-y-6 w-full">
        {/* Top Row - Frontend & API */}
        <div className="flex items-center justify-center gap-4">
          <ArchBox icon={<Cloud className="w-5 h-5" />} label="Frontend" color="from-blue-500 to-cyan-500" />
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 relative">
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          <ArchBox icon={<Server className="w-5 h-5" />} label="API" color="from-purple-500 to-pink-500" />
        </div>

        {/* Middle - Connecting Line */}
        <div className="flex justify-center">
          <div className="h-8 w-0.5 bg-gradient-to-b from-pink-500 to-green-500 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full soft-pulse" />
          </div>
        </div>

        {/* Bottom Row - Database & Cache */}
        <div className="flex items-center justify-center gap-4">
          <ArchBox icon={<Database className="w-5 h-5" />} label="Database" color="from-green-500 to-emerald-500" />
          <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500" />
          <ArchBox icon={<Zap className="w-5 h-5" />} label="Cache" color="from-yellow-500 to-orange-500" />
        </div>
      </div>
    </div>
  );
}

function ArchBox({ icon, label, color }: any) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-xl p-4 min-w-[100px] text-center shadow-lg hover:scale-105 transition-transform duration-300`}>
      <div className="flex justify-center mb-2 dashboard-text-primary">{icon}</div>
      <div className="text-xs font-semibold dashboard-text-primary">{label}</div>
    </div>
  );
}

// Scalability Tab
function ScalabilityContent() {
  return (
    <div className="h-full space-y-4">
      <div className="text-xs font-semibold dashboard-text-secondary uppercase">Server Load Distribution</div>

      {/* Server Rack Visualization */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { name: 'Server 1', load: 45, status: 'optimal' },
          { name: 'Server 2', load: 72, status: 'high' },
          { name: 'Server 3', load: 38, status: 'optimal' },
          { name: 'Server 4', load: 91, status: 'scaling' },
        ].map((server, i) => (
          <div key={i} className="space-y-2">
            <div className="h-24 dashboard-bg-secondary rounded-lg p-2 flex flex-col gap-1 hover:dashboard-bg-tertiary transition">
              {[...Array(4)].map((_, j) => (
                <div
                  key={j}
                  className={`h-4 rounded ${
                    j < Math.ceil(server.load / 25)
                      ? 'bg-gradient-to-r from-[#2d65bc] to-blue-400 soft-pulse'
                      : 'dashboard-bg-tertiary'
                  }`}
                  data-delay={j * 0.2}
                />
              ))}
            </div>
            <div className="text-center">
              <div className="text-xs dashboard-text-primary font-medium">{server.load}%</div>
              <div className={`text-xs ${
                server.status === 'optimal' ? 'text-green-400' :
                server.status === 'high' ? 'text-yellow-400' :
                'text-blue-400'
              }`}>
                {server.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Auto-scaling Status */}
      <div className="bg-gradient-to-br from-[#2d65bc]/20 to-cyan-500/20 rounded-xl p-4 border border-[#2d65bc]/30">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold dashboard-text-primary">Auto-Scaling</span>
          <span className="px-2 py-1 rounded-md bg-blue-500/20 text-blue-400 text-xs font-medium">Active</span>
        </div>
        <div className="text-xs dashboard-text-secondary">Automatically adjusting capacity based on demand</div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3">
        <div className="dashboard-bg-secondary rounded-lg p-3">
          <div className="text-2xl font-bold dashboard-text-primary">99.9%</div>
          <div className="text-xs dashboard-text-secondary">Uptime</div>
        </div>
        <div className="dashboard-bg-secondary rounded-lg p-3">
          <div className="text-2xl font-bold dashboard-text-primary">45ms</div>
          <div className="text-xs dashboard-text-secondary">Response Time</div>
        </div>
      </div>
    </div>
  );
}

// Security Tab
function SecurityContent() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      {/* Shield Icon with Pulse Rings */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#2d65bc]/20 animate-ping [animation-duration:3s]" />
        <div className="absolute inset-4 rounded-full bg-[#2d65bc]/30 animate-ping [animation-duration:2s] [animation-delay:0.5s]" />
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#2d65bc] to-purple-600 flex items-center justify-center shadow-2xl">
          <Shield className="w-12 h-12 dashboard-text-primary" />
        </div>
      </div>

      {/* Security Badges */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {[
          { icon: <Lock className="w-4 h-4" />, label: 'SSL/TLS', status: 'Active' },
          { icon: <Shield className="w-4 h-4" />, label: 'DDoS Protection', status: 'Active' },
          { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Daily Backups', status: 'Active' },
          { icon: <Server className="w-4 h-4" />, label: 'Firewall', status: 'Active' },
        ].map((item, i) => (
          <div key={i} className="dashboard-bg-secondary rounded-lg p-3 border border-green-500/30 hover:border-green-500/50 transition">
            <div className="flex items-center gap-2 mb-1 text-green-400">
              {item.icon}
              <span className="text-xs font-semibold">{item.label}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="status-dot w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs dashboard-text-secondary">{item.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Security Score */}
      <div className="w-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30 text-center">
        <div className="text-4xl font-bold dashboard-text-primary mb-1">A+</div>
        <div className="text-sm dashboard-text-secondary">Security Rating</div>
      </div>
    </div>
  );
}

// Monitoring Tab
function MonitoringContent() {
  return (
    <div className="h-full space-y-4">
      {/* Live Metrics Grid */}
      <div className="grid grid-cols-2 gap-3">
        <MetricBox
          label="CPU Usage"
          value="45%"
          status="optimal"
          statusColor="text-green-400"
        />
        <MetricBox
          label="Memory"
          value="2.4 GB"
          status="normal"
          statusColor="text-blue-400"
        />
        <MetricBox
          label="Network"
          value="125 MB/s"
          status="high"
          statusColor="text-yellow-400"
        />
        <MetricBox
          label="Requests"
          value="1,247/min"
          status="active"
          statusColor="text-purple-400"
        />
      </div>

      {/* System Health */}
      <div className="space-y-2">
        <div className="text-xs font-semibold dashboard-text-secondary uppercase">System Health</div>
        {[
          { name: 'API Server', status: 100, color: 'from-green-500 to-emerald-500' },
          { name: 'Database', status: 98, color: 'from-blue-500 to-cyan-500' },
          { name: 'Cache', status: 95, color: 'from-purple-500 to-pink-500' },
        ].map((service, i) => (
          <div key={i} className="dashboard-bg-secondary rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm dashboard-text-primary font-medium">{service.name}</span>
              <span className="text-xs dashboard-text-secondary">{service.status}%</span>
            </div>
            <div className="w-full h-1.5 dashboard-bg-tertiary rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${service.color} rounded-full animate-loading`}
                data-progress={service.status}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Uptime */}
      <div className="bg-gradient-to-br from-[#2d65bc]/20 to-green-500/20 rounded-xl p-4 border border-[#2d65bc]/30 text-center">
        <div className="text-3xl font-bold dashboard-text-primary mb-1">99.98%</div>
        <div className="text-sm dashboard-text-secondary">Uptime (30 days)</div>
      </div>
    </div>
  );
}

function MetricBox({ label, value, status, statusColor }: any) {
  return (
    <div className="dashboard-bg-secondary rounded-lg p-3 hover:dashboard-bg-tertiary transition">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs dashboard-text-secondary">{label}</span>
        <div className={`status-dot w-1.5 h-1.5 rounded-full ${statusColor.replace('text-', 'bg-')}`} />
      </div>
      <div className="text-xl font-bold dashboard-text-primary">{value}</div>
      <div className={`text-xs ${statusColor}`}>{status}</div>
    </div>
  );
}
