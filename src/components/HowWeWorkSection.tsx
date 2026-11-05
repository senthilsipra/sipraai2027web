import React from 'react';
import { Search, Compass, GraduationCap, Rocket, ArrowRight } from 'lucide-react';

interface HowWeWorkSectionProps {
  onOpenPlaceholder: (title: string, destination: string) => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenPlaceholder }) => {
  const formats = [
    {
      category: 'Assessment',
      title: 'Find the constraint.',
      desc: 'We examine how people use AI now, what the codebase can support, and where work gets stuck.',
      icon: Search,
      timeframe: '2–3 weeks',
      deliverable: 'Constraint matrix & gap audit',
    },
    {
      category: 'Advisory + roadmap',
      title: 'Build the roadmap.',
      desc: 'You get priorities for the platform team, each function, and the executives leading the change.',
      icon: Compass,
      timeframe: '30–90 days',
      deliverable: 'Platform & leadership operating plan',
    },
    {
      category: 'Workshops + training',
      title: 'Put the tools to work.',
      desc: 'We run hands-on sessions for executives and teams using the tools they already have.',
      icon: GraduationCap,
      timeframe: '1–2 days intensive',
      deliverable: 'Live tooling & prompt mastery',
    },
    {
      category: 'Implementation',
      title: 'Ship with your team.',
      desc: 'We work alongside your people to build the first workflows and get them into daily use.',
      icon: Rocket,
      timeframe: 'Embedded sprint cycles',
      deliverable: 'Production agent pipelines',
    },
  ];

  return (
    <section id="how-we-work" className="py-20 md:py-28 border-b border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200/80">
          <div className="space-y-3 max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#ce2124]">
              How We Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4E4E4E] tracking-tight leading-[1.15]">
              What you can hire us to do.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#5C5C5C] max-w-md leading-relaxed font-normal">
            We can build a roadmap or get in the code and help you ship the plan.
          </p>
        </div>

        {/* 4 Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((format, idx) => {
            const Icon = format.icon;
            return (
              <div
                key={idx}
                className="bg-stone-50/70 hover:bg-white rounded-2xl p-6 border border-stone-200/90 hover:border-stone-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#ce2124] bg-[#ce2124]/10 px-2 py-0.5 rounded border border-[#ce2124]/20">
                      {format.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#5C5C5C] group-hover:text-[#ce2124] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#4E4E4E] mb-3 group-hover:text-[#ce2124] transition-colors">
                    {format.title}
                  </h3>

                  <p className="text-sm text-[#5C5C5C] leading-relaxed font-normal">
                    {format.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200/60 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono">
                    <span>Duration</span>
                    <span className="text-[#4E4E4E] font-medium">{format.timeframe}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono">
                    <span>Outcome</span>
                    <span className="text-[#4E4E4E] font-medium truncate max-w-[130px]" title={format.deliverable}>
                      {format.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-stone-100 border border-stone-200/90 text-stone-700 text-xs">
          <div>
            <strong className="font-semibold text-[#4E4E4E]">Custom enterprise engagements:</strong>{' '}
            Need a blended advisory + embedded platform acceleration squad?
          </div>
          <a
            href="#talk"
            className="inline-flex items-center gap-1.5 font-semibold text-[#ce2124] hover:text-[#b01b1e] whitespace-nowrap cursor-pointer"
          >
            <span>Request custom scope scoping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
