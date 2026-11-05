import React, { useState } from 'react';
import { ArrowRight, Workflow, ShieldCheck, Clock, Users, BarChart3, Award, GitBranch, CheckCircle2, ChevronRight } from 'lucide-react';

interface SystemSectionProps {
  onOpenPlaceholder: (title: string, destination: string) => void;
}

export const SystemSection: React.FC<SystemSectionProps> = ({ onOpenPlaceholder }) => {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  const pillars = [
    {
      title: 'Workflows',
      desc: 'Design how people and agents work together across the company.',
      icon: Workflow,
      tag: '01',
    },
    {
      title: 'System readiness',
      desc: 'Give agents the context, docs, permissions, data, and feedback loops they need to work safely.',
      icon: ShieldCheck,
      tag: '02',
    },
    {
      title: 'Rituals',
      desc: 'Replace pre-AI planning and review processes with a faster operating rhythm.',
      icon: Clock,
      tag: '03',
    },
    {
      title: 'Roles',
      desc: 'Redefine roles when anyone can build, then get out of your best builders’ way.',
      icon: Users,
      tag: '04',
    },
    {
      title: 'Metrics',
      desc: 'Measure where AI changes velocity, quality, and the work itself.',
      icon: BarChart3,
      tag: '05',
    },
    {
      title: 'Leadership skills',
      desc: 'Teach executives to inspect the work, model new behavior, and reward the people driving change.',
      icon: Award,
      tag: '06',
    },
  ];

  const pipelineSteps = [
    {
      title: 'Context',
      subtitle: 'Rules + Repo State',
      detail: 'Machine-readable architecture guidelines, repository boundaries, and domain rules formatted for agents.',
    },
    {
      title: 'Feedback',
      subtitle: 'CI + Review Loop',
      detail: 'Ultra-fast headless validation test suites that provide structured machine logs rather than human-only comments.',
    },
    {
      title: 'Handoff',
      subtitle: 'Product → Design → Code',
      detail: 'Unbroken specification chains from PRDs directly into synthesized components and regression test cases.',
    },
    {
      title: 'Proof',
      subtitle: 'Speed + Quality',
      detail: 'Measurable cycle time reduction and zero increase in escape defects or code bloat.',
    },
  ];

  return (
    <section id="system" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            The System
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
            Your best builders are already moving faster. <br className="hidden sm:inline" />
            <span className="text-stone-500 font-normal">We help you with everyone else.</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal pt-1">
            Turn isolated wins into repeatable company muscle with focused effort across technical readiness, operating model, and culture.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-xs hover:border-blue-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 group-hover:bg-blue-50 group-hover:border-blue-200 text-stone-700 group-hover:text-blue-700 transition-colors flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-stone-400 group-hover:text-blue-600 font-semibold">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                  <span className="text-[11px] uppercase tracking-wider font-mono">Foundational pillar</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-blue-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Where We Go Deepest Sub-Block */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                Where We Go Deepest
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Start in engineering, product, and design.
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                We work with CTOs, CPOs, and VPs of Product and Engineering to execute on the foundations of AI adoption, so their teams set the standard for the rest of the company.
              </p>
              <div className="pt-2">
                <button
                  onClick={() =>
                    onOpenPlaceholder(
                      'AI Engineering Acceleration',
                      '/ai-engineering-acceleration'
                    )
                  }
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors cursor-pointer group"
                >
                  <span>Explore AI engineering acceleration</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Architectural Readiness Diagram */}
            <div className="lg:col-span-7 bg-stone-50 rounded-2xl border border-stone-200/90 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-blue-700" />
                  <span className="text-xs font-bold text-slate-900">
                    Engineering Readiness Pipeline Preview
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-white border border-stone-200 rounded text-stone-600">
                  0 → 1 Delivery Stage
                </span>
              </div>

              {/* Interactive Pipeline Stages */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {pipelineSteps.map((step, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePipelineStep(idx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activePipelineStep === idx
                        ? 'bg-white border-blue-600 shadow-2xs'
                        : 'bg-white/70 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="text-[11px] uppercase tracking-wider text-stone-400 font-mono mb-1">
                      Step 0{idx + 1}
                    </div>
                    <div className="font-bold text-xs text-slate-900 mb-0.5">
                      {step.title}
                    </div>
                    <div className="text-[11px] text-stone-500 leading-tight">
                      {step.subtitle}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Step Explainer Box */}
              <div className="bg-white rounded-xl p-4 border border-stone-200 text-xs text-stone-700 space-y-2">
                <div className="flex items-center justify-between text-blue-900 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                    <span>Inspection Focus: {pipelineSteps[activePipelineStep].title}</span>
                  </span>
                  <span className="font-mono text-[11px] text-stone-500">
                    Diagnostic check: PASS
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed font-normal">
                  {pipelineSteps[activePipelineStep].detail}
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                  <span>$ trace --bottleneck=delivery</span>
                  <span className="text-emerald-700 font-semibold">Ready for deployment</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
