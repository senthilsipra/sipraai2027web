import React, { useState } from 'react';
import { ArrowRight, CheckSquare, Square, Check, ArrowUpRight, Code2, Layers, Briefcase, GraduationCap } from 'lucide-react';

interface PathsInSectionProps {
  onOpenPlaceholder: (title: string, destination: string) => void;
}

export const PathsInSection: React.FC<PathsInSectionProps> = ({ onOpenPlaceholder }) => {
  // Interactive checklist state for the Repo Readiness preview
  const [checklist, setChecklist] = useState([
    { id: 'rules', label: 'Agent rules + repo context', checked: true, note: 'AGENTS.md / Cursor rules' },
    { id: 'setup', label: 'Fast local setup / new-hire test', checked: true, note: 'Zero-friction container boots' },
    { id: 'ci', label: 'CI loops agents can read', checked: false, note: 'Structured machine diagnostics' },
    { id: 'review', label: 'PR routing + review contracts', checked: false, note: 'Sub-15m feedback turnaround' },
    { id: 'handoff', label: 'Product/design → code path', checked: false, note: 'Figma to component pipelines' },
  ]);

  const toggleCheck = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const checkedCount = checklist.filter((i) => i.checked).length;
  const scorePercent = Math.round((checkedCount / checklist.length) * 100);

  return (
    <section id="paths-in" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#ce2124]">
            Paths In
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4E4E4E] tracking-tight">
            Choose your starting point
          </h2>
          <p className="text-[#5C5C5C] text-sm sm:text-base max-w-2xl">
            Targeted entry points depending on whether your bottleneck is code infrastructure, operating model, or executive fluency.
          </p>
        </div>

        {/* 4 Service Pathway Cards (Asymmetric Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: AI Engineering Acceleration (Spans 7 cols with Interactive Checklist) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-stone-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ce2124] bg-[#ce2124]/10 px-2.5 py-1 rounded-md border border-[#ce2124]/20">
                  AI Engineering
                </span>
                <span className="text-xs text-stone-500 font-medium">For CTOs and engineering leaders</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4E4E4E] tracking-tight">
                Engineering Acceleration.
              </h3>

              <p className="text-sm sm:text-base text-[#5C5C5C] leading-relaxed font-normal">
                We assess repo readiness, design the platform roadmap, and help change how product gets built.
              </p>

              {/* Repo Readiness Checklist Interactive Preview */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/90 space-y-3 mt-4">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200 text-xs">
                  <div className="font-semibold text-[#4E4E4E] flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-[#ce2124]" />
                    <span>Repo Readiness Checklist Preview</span>
                  </div>
                  <div className="font-mono text-[#5C5C5C] text-[11px]">
                    Readiness: <strong className="text-[#ce2124] font-bold">{scorePercent}%</strong> ({checkedCount}/{checklist.length})
                  </div>
                </div>

                <div className="space-y-2">
                  {checklist.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleCheck(item.id)}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg bg-white border border-stone-200/80 hover:border-[#ce2124]/30 transition-colors text-left cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                          item.checked ? 'bg-[#ce2124] text-white' : 'border border-stone-300 bg-white group-hover:border-stone-400'
                        }`}>
                          {item.checked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className={`text-xs font-medium ${item.checked ? 'text-[#4E4E4E] font-semibold' : 'text-[#5C5C5C]'}`}>
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-stone-400 group-hover:text-stone-600">
                        {item.note}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() =>
                  onOpenPlaceholder(
                    'AI Engineering Acceleration',
                    '/ai-engineering-acceleration'
                  )
                }
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ce2124] hover:text-[#b01b1e] transition-colors cursor-pointer group"
              >
                <span>Explore AI engineering</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-xs text-stone-400 font-mono">2-week diagnostic sprint</span>
            </div>
          </div>

          {/* Right Column: 3 Pathways Stacked (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 2: AI Transformation */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ce2124] bg-[#ce2124]/10 px-2.5 py-0.5 rounded-md border border-[#ce2124]/20">
                    AI Transformation
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium">For CEOs & executive teams</span>
                </div>
                <h3 className="text-xl font-bold text-[#4E4E4E] mb-2">
                  Company Operating System.
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed font-normal">
                  We find the teams already getting leverage, then build the company system around them.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <button
                  onClick={() =>
                    onOpenPlaceholder(
                      'AI Transformation Operating System',
                      '/ai-transformation'
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ce2124] hover:text-[#b01b1e] transition-colors cursor-pointer group"
                >
                  <span>Explore AI transformation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Card 3: AI Executive Coaching */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ce2124] bg-[#ce2124]/10 px-2.5 py-0.5 rounded-md border border-[#ce2124]/20">
                    AI Executive Coaching
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium">For CEOs, CTOs & CPOs</span>
                </div>
                <h3 className="text-xl font-bold text-[#4E4E4E] mb-2">
                  Executive Fluency.
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed font-normal">
                  Hands-on coaching and peer support from people who use the tools daily in production.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <button
                  onClick={() =>
                    onOpenPlaceholder(
                      'AI Executive Coaching',
                      '/ai-executive-coaching'
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ce2124] hover:text-[#b01b1e] transition-colors cursor-pointer group"
                >
                  <span>Explore AI executive coaching</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Card 4: AI Training */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ce2124] bg-[#ce2124]/10 px-2.5 py-0.5 rounded-md border border-[#ce2124]/20">
                    AI Training
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium">For executives & teams</span>
                </div>
                <h3 className="text-xl font-bold text-[#4E4E4E] mb-2">
                  Courses + Team Training.
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed font-normal">
                  Join the Executive Playbook for AI course, book a private workshop, or build a bespoke program.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <button
                  onClick={() =>
                    onOpenPlaceholder(
                      'AI Training Options & Cohorts',
                      '/ai-training'
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ce2124] hover:text-[#b01b1e] transition-colors cursor-pointer group"
                >
                  <span>Explore training options</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
