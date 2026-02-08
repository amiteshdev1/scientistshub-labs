'use client';

import React, { useState } from 'react';
import { Code2, Terminal, GitBranch, Rocket, CheckCircle2, Loader2, Circle } from 'lucide-react';

export default function DevDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, icon: Code2, label: 'Code', ariaLabel: 'Code Editor' },
    { id: 1, icon: Terminal, label: 'Terminal', ariaLabel: 'Terminal' },
    { id: 2, icon: GitBranch, label: 'Git', ariaLabel: 'Git Workflow' },
    { id: 3, icon: Rocket, label: 'Deploy', ariaLabel: 'Deployment' },
  ];

  return (
    <div className="w-full max-w-[600px] h-[400px] mx-auto glass-card-dark rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="h-14 dashboard-header dashboard-border border-b flex items-center justify-between px-6">
        {/* Window Dots */}
        <div className="flex items-center gap-2">
          <div className="window-dot bg-red-500" />
          <div className="window-dot bg-yellow-500" />
          <div className="window-dot bg-green-500" />
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
          <span className="status-dot w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-green-400">Live</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex h-[calc(100%-3.5rem)]">
        {/* Sidebar */}
        <div className="w-20 dashboard-sidebar dashboard-border border-r flex flex-col items-center py-6 gap-4" role="tablist" aria-label="Dashboard sections">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-label={tab.ariaLabel}
                aria-selected={activeTab === tab.id}
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
            {activeTab === 0 && <CodeEditorContent />}
            {activeTab === 1 && <TerminalContent />}
            {activeTab === 2 && <GitContent />}
            {activeTab === 3 && <DeployContent />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Code Editor Tab
function CodeEditorContent() {
  return (
    <div className="h-full code-editor-bg rounded-xl p-4 font-mono text-sm overflow-hidden">
      <div className="space-y-1 text-left">
        <div className="flex">
          <span className="code-line-number w-8">1</span>
          <span className="code-keyword">import</span>
          <span className="dashboard-text-primary"> React </span>
          <span className="code-keyword">from</span>
          <span className="code-string"> 'react'</span>
        </div>
        <div className="flex">
          <span className="code-line-number w-8">2</span>
          <span className="dashboard-text-primary"></span>
        </div>
        <div className="flex">
          <span className="code-line-number w-8">3</span>
          <span className="code-keyword">export default</span>
          <span className="code-keyword"> function</span>
          <span className="code-function"> App</span>
          <span className="dashboard-text-primary">() {'{'}</span>
        </div>
        <div className="flex">
          <span className="code-line-number w-8">4</span>
          <span className="dashboard-text-primary ml-4">  </span>
          <span className="code-keyword">return</span>
          <span className="dashboard-text-primary"> (</span>
        </div>
        <div className="flex">
          <span className="code-line-number w-8">5</span>
          <span className="dashboard-text-primary ml-8">    </span>
          <span className="dashboard-text-secondary">&lt;</span>
          <span className="code-function">div</span>
          <span className="code-function"> className</span>
          <span className="dashboard-text-primary">=</span>
          <span className="code-string">"app"</span>
          <span className="dashboard-text-secondary">&gt;</span>
        </div>
        <div className="flex">
          <span className="code-line-number w-8">6</span>
          <span className="dashboard-text-primary ml-12">      </span>
          <span className="dashboard-text-secondary">&lt;</span>
          <span className="code-function">h1</span>
          <span className="dashboard-text-secondary">&gt;</span>
          <span className="dashboard-text-primary">Hello World</span>
          <span className="cursor-blink inline-block w-2 h-4 bg-[var(--hero-primary)] ml-1"></span>
        </div>
      </div>
    </div>
  );
}

// Terminal Tab
function TerminalContent() {
  return (
    <div className="h-full code-editor-bg rounded-xl p-4 font-mono text-sm overflow-hidden">
      <div className="space-y-2 code-string">
        <div>$ npm install</div>
        <div className="dashboard-text-secondary">✓ Installing dependencies...</div>
        <div className="dashboard-text-secondary">✓ Packages installed successfully</div>
        <div className="mt-4">$ npm run dev</div>
        <div className="dashboard-text-secondary">
          <div className="flex items-center gap-2 mt-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Starting development server...</span>
          </div>
        </div>
        <div className="code-function mt-2">→ Local: http://localhost:3000</div>
        <div className="code-string mt-2 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Ready in 2.3s</span>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span>$</span>
          <span className="cursor-blink inline-block w-2 h-4 bg-green-400"></span>
        </div>
      </div>
    </div>
  );
}

// Git Tab
function GitContent() {
  return (
    <div className="h-full space-y-4">
      {/* Branch Visualization */}
      <div className="dashboard-bg-secondary rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Circle className="w-3 h-3 fill-[#2d65bc] text-[#2d65bc]" />
            <div className="w-0.5 h-8 bg-[#2d65bc]" />
            <Circle className="w-3 h-3 fill-green-500 text-green-500" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold dashboard-text-primary">feature/new-dashboard</div>
              <div className="text-xs dashboard-text-secondary">Current branch</div>
            </div>
            <div>
              <div className="text-sm font-semibold dashboard-text-primary">main</div>
              <div className="text-xs dashboard-text-secondary">2 commits behind</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Commits */}
      <div className="space-y-2">
        <div className="text-xs font-semibold dashboard-text-secondary uppercase">Recent Commits</div>
        {[
          { msg: 'Add hero dashboard component', time: '2 min ago', color: 'bg-blue-500' },
          { msg: 'Update animations', time: '15 min ago', color: 'bg-purple-500' },
          { msg: 'Fix responsive layout', time: '1 hour ago', color: 'bg-green-500' },
        ].map((commit, i) => (
          <div key={i} className="flex items-center gap-3 dashboard-bg-secondary rounded-lg p-3">
            <div className={`w-8 h-8 rounded-full ${commit.color} flex items-center justify-center text-xs font-bold text-white`}>
              {commit.msg.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="text-sm dashboard-text-primary">{commit.msg}</div>
              <div className="text-xs dashboard-text-secondary">{commit.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Deploy Tab
function DeployContent() {
  return (
    <div className="h-full space-y-4">
      {/* Deploy Score */}
      <div className="bg-gradient-to-br from-[#2d65bc]/20 to-purple-500/20 rounded-xl p-6 text-center">
        <div className="text-5xl font-bold dashboard-text-primary mb-2">99</div>
        <div className="text-sm dashboard-text-secondary">Performance Score</div>
      </div>

      {/* Status Checks */}
      <div className="space-y-2">
        {[
          { label: 'Build', status: 'success', progress: 100 },
          { label: 'Tests', status: 'success', progress: 100 },
          { label: 'Deploy', status: 'running', progress: 75 },
        ].map((check, i) => (
          <div key={i} className="dashboard-bg-secondary rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {check.status === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                ) : (
                  <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                )}
                <span className="text-sm font-medium dashboard-text-primary">{check.label}</span>
              </div>
              <span className="text-xs dashboard-text-secondary">{check.progress}%</span>
            </div>
            <div className="w-full h-1.5 dashboard-bg-tertiary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#2d65bc] to-blue-400 animate-loading rounded-full"
                data-progress={check.progress}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3">
        <div className="dashboard-bg-secondary rounded-lg p-3 text-center">
          <div className="text-2xl font-bold dashboard-text-primary">1.2s</div>
          <div className="text-xs dashboard-text-secondary">Load Time</div>
        </div>
        <div className="dashboard-bg-secondary rounded-lg p-3 text-center">
          <div className="text-2xl font-bold dashboard-text-primary">98%</div>
          <div className="text-xs dashboard-text-secondary">Uptime</div>
        </div>
      </div>
    </div>
  );
}
