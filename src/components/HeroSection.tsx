import React, { useState } from 'react';
import { ArrowRight, BarChart2, ShieldAlert, Cpu, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenPlaceholder: (title: string, destination: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPlaceholder }) => {
  const [activeMetricTab, setActiveMetricTab] = useState<'matrix' | 'maturity' | 'velocity'>('matrix');

  // Interactive diagnostic items based on reference
  const diagnosticItems = [
    { label: 'Tool licenses', value: 'Active', status: 'optimal', note: 'Standard LLM & IDE seats deployed across team' },
    { label: 'New roles', value: 'Missing', status: 'critical', note: 'No dedicated agent leads or workflow engineers' },
    { label: 'Codebase readiness', value: 'Uneven', status: 'warning', note: 'Context files, rules and automated checks missing in 60% of repos' },
    { label: 'Operating process', value: 'Pre-AI', status: 'critical', note: 'Linear PR review chains and 2-week sprint rituals remain unchanged' },
    { label: 'Leadership skills', value: 'Developing', status: 'warning', note: 'Executives lack hands-on evaluation workflows' },
    { label: 'Team confidence', value: 'Split', status: 'warning', note: 'Individual developers excel; organizational adoption stalled' },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-stone-200/70 overflow-hidden bg-gradient-to-b from-[#FAFAF8] via-stone-50/50 to-[#FAFAF8]">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 400 600" className="w-full h-full object-cover">
          <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200/90 rounded-full text-xs font-medium text-[#5C5C5C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ce2124]" />
              <span>AI Advisory & Engineering Acceleration</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#4E4E4E] tracking-tight leading-[1.12] text-balance">
              AI transformation for{' '}
              <span className="relative inline-block text-[#ce2124]">
                AI-pilled
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#ce2124]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>{' '}
              leaders
            </h1>

            <p className="text-lg sm:text-xl text-[#5C5C5C] leading-relaxed max-w-xl font-normal">
              We help technical leaders build agent-first organisations that ship faster with AI.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#talk"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#ce2124] text-white font-semibold text-sm hover:bg-[#b01b1e] transition-all shadow-sm hover:shadow group cursor-pointer"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={() =>
                  onOpenPlaceholder(
                    'AI Readiness Assessment',
                    '/ai-readiness-assessment'
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#4E4E4E] border border-stone-300 font-semibold text-sm hover:bg-stone-50 hover:border-stone-400 transition-all cursor-pointer shadow-2xs"
              >
                <span>Take Our Assessment</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            {/* Reference context note */}
            <div className="pt-4 border-t border-stone-200/80 text-xs text-stone-500 flex items-start gap-2">
              <span className="font-semibold text-stone-700 shrink-0">Note:</span>
              <span>
                Original copy and structure retained for comparison. Replaced terminal aesthetic with high-craft editorial dashboard.
              </span>
            </div>
          </div>

          {/* Right Column: Reimagined Light Editorial Diagnostic Canvas */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-7 space-y-6">
              
              {/* Card Header & Tab Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
                <div>
                  <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Executive Diagnostic Overview
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    Organizational Readiness Profile
                  </div>
                </div>

                {/* Segmented Tab Control */}
                <div className="flex items-center p-1 bg-stone-100 rounded-lg text-xs font-medium self-start sm:self-auto">
                  <button
                    onClick={() => setActiveMetricTab('matrix')}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      activeMetricTab === 'matrix'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-stone-600 hover:text-slate-900'
                    }`}
                  >
                    Signals
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('maturity')}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      activeMetricTab === 'maturity'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-stone-600 hover:text-slate-900'
                    }`}
                  >
                    Maturity
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('velocity')}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      activeMetricTab === 'velocity'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-stone-600 hover:text-slate-900'
                    }`}
                  >
                    Work Moved
                  </button>
                </div>
              </div>

              {/* Tab 1: Signals Breakdown */}
              {activeMetricTab === 'matrix' && (
                <div className="space-y-2.5">
                  <div className="grid grid-cols-2 gap-2 pb-1 text-[11px] font-medium text-stone-400 uppercase tracking-wider">
                    <span>Dimension</span>
                    <span className="text-right">Observed Status</span>
                  </div>

                  <div className="divide-y divide-stone-100">
                    {diagnosticItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="py-2.5 flex items-center justify-between text-xs hover:bg-stone-50/70 px-2 rounded-lg transition-colors"
                      >
                        <div>
                          <span className="font-medium text-slate-800">{item.label}</span>
                          <p className="text-[11px] text-stone-500">{item.note}</p>
                        </div>
                        <span
                          className={`font-mono text-xs px-2.5 py-0.5 rounded-md font-semibold shrink-0 ml-3 ${
                            item.status === 'optimal'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                              : item.status === 'warning'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                              : 'bg-rose-50 text-rose-700 border border-rose-200/60'
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: 3 Pillars Maturity */}
              {activeMetricTab === 'maturity' && (
                <div className="space-y-4 py-2">
                  <div className="space-y-3">
                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-semibold text-slate-800">1. Culture & Mindset</span>
                        <span className="text-xs font-semibold text-emerald-700 font-mono">Making Progress</span>
                      </div>
                      <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-1.5">
                        Champions are experimenting actively, but rituals lack organizational standardisation.
                      </p>
                    </div>

                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-semibold text-slate-800">2. Technical Readiness</span>
                        <span className="text-xs font-semibold text-amber-700 font-mono">Uneven</span>
                      </div>
                      <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-600 h-full rounded-full" style={{ width: '42%' }}></div>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-1.5">
                        Agent rules, repo context, and automated CI verification loops are absent in main repositories.
                      </p>
                    </div>

                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-semibold text-slate-800">3. Company Operating System</span>
                        <span className="text-xs font-semibold text-rose-700 font-mono">Not Installed</span>
                      </div>
                      <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-rose-600 h-full rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-1.5">
                        Cross-functional product-to-code pipelines still operate on legacy human gatekeeping.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Work Moved Velocity */}
              {activeMetricTab === 'velocity' && (
                <div className="space-y-4 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#5C5C5C]">Work Moved by Autonomous & Assisted Agents</span>
                    <span className="font-semibold text-[#ce2124] font-mono">This Quarter</span>
                  </div>

                  {/* Clean Visual Bar Chart */}
                  <div className="h-32 flex items-end justify-between gap-3 pt-4 px-2">
                    {[
                      { week: 'W1', height: '28%', label: '28h' },
                      { week: 'W2', height: '35%', label: '35h' },
                      { week: 'W3', height: '42%', label: '42h' },
                      { week: 'W4', height: '54%', label: '54h' },
                      { week: 'W5', height: '68%', label: '68h' },
                      { week: 'W6', height: '82%', label: '82h' },
                      { week: 'W7', height: '94%', label: '94h' },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                        <div
                          className="w-full bg-[#ce2124]/15 group-hover:bg-[#ce2124] rounded-t-sm transition-all duration-300 relative"
                          style={{ height: bar.height }}
                        >
                          <div className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-[#4E4E4E] text-white text-[10px] px-1.5 py-0.5 rounded font-mono pointer-events-none transition-opacity">
                            {bar.label}
                          </div>
                        </div>
                        <span className="text-[10px] text-stone-500 font-mono">{bar.week}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 text-center font-sans">
                    Average engineering velocity gain when agent-first context is embedded directly in repo pipelines.
                  </p>
                </div>
              )}

              {/* Recommendation Strip (Matching Reference) */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-stone-700">
                  <span className="w-2 h-2 rounded-full bg-[#ce2124]"></span>
                  <span className="font-semibold text-[#4E4E4E]">Recommended path:</span>
                  <span className="text-[#5C5C5C]">Redesign how work moves</span>
                </div>
                <a
                  href="#how-we-work"
                  className="text-[#ce2124] hover:text-[#b01b1e] font-semibold inline-flex items-center gap-1 text-xs whitespace-nowrap cursor-pointer"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Client Credibility & Ecosystem Stack Strip */}
        <div className="mt-16 pt-10 border-t border-stone-200/80 space-y-8">
          
          {/* Clients Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Reference Clients
              </span>
              <span className="text-[11px] text-stone-400 font-mono">
                [Reference material from cxo.dev]
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Amplitude', sub: 'Product Analytics' },
                { name: 'Chime', sub: 'Financial Technology' },
                { name: 'GC.ai', sub: 'Legal Intelligence' },
                { name: 'IntusCare', sub: 'Healthcare Predictive AI' },
              ].map((client, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/80 rounded-xl px-4 py-3 flex items-center justify-between shadow-2xs hover:border-stone-300 transition-colors"
                >
                  <span className="font-bold text-slate-800 tracking-tight text-sm">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider">
                    {client.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ecosystem + Stack Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Ecosystem & Tooling Stack
              </span>
              <span className="text-[11px] text-stone-400">
                Deep architectural integration
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              {[
                'OpenAI',
                'Perplexity',
                'Codex',
                'Anthropic',
                'Claude Code',
                'Cognition',
                'Cursor',
                'Meticulous',
                'Exa',
                'OpenClaw',
                'Grokbot',
                'GitHub',
              ].map((tool, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-[#5C5C5C] font-medium hover:border-[#ce2124]/40 hover:text-[#ce2124] transition-colors shadow-2xs"
                >
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
