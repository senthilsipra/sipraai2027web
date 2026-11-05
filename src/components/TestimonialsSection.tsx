import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header with Reference Notice */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#ce2124]">
              Proof & Endorsements
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4E4E4E] tracking-tight">
              Feedback from the field
            </h2>
          </div>
          <div className="text-xs text-stone-500 font-mono bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200/80 self-start sm:self-auto">
            [Reference proof from cxo.dev · To be replaced in final copy]
          </div>
        </div>

        {/* Testimonials Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Featured Testimonial (Spans 7 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-stone-900 text-white flex flex-col justify-between shadow-sm relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Quote className="w-32 h-32" />
            </div>

            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white bg-[#ce2124] px-2.5 py-1 rounded-md">
                Featured Client Reference
              </span>

              <blockquote className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight leading-snug">
                “We need people on the edge, on the bleeding edge. I’m thrilled.”
              </blockquote>
            </div>

            <div className="pt-8 mt-6 border-t border-stone-800 flex items-center justify-between gap-4 relative z-10">
              <div>
                <div className="font-bold text-base text-white">Spenser Skates</div>
                <div className="text-xs text-stone-400">CEO & Co-founder, Amplitude</div>
              </div>
              <span className="text-[11px] font-mono text-stone-500 bg-stone-800 px-2.5 py-1 rounded">
                Reference Attribution
              </span>
            </div>
          </div>

          {/* Secondary Testimonials (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Quote 1: Mel / Aledade */}
            <div className="bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-4 flex-1">
              <blockquote className="text-base font-medium text-[#4E4E4E] leading-relaxed">
                “I’m taking the course frameworks for AI transformation directly into my team’s 90 day roadmap.”
              </blockquote>

              <div className="pt-4 border-t border-stone-200/60">
                <div className="font-bold text-sm text-[#4E4E4E]">Mel</div>
                <div className="text-xs text-[#5C5C5C]">
                  Senior Director, Experience Design and Research · Aledade
                </div>
              </div>
            </div>

            {/* Quote 2: Alexandre / Coast */}
            <div className="bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-4 flex-1">
              <blockquote className="text-base font-medium text-[#4E4E4E] leading-relaxed">
                “Clear frameworks, strong faculty, sharp peer group, and most importantly, practical enough that I walked out with a plan for how to accelerate AI transformation in my org.”
              </blockquote>

              <div className="pt-4 border-t border-stone-200/60">
                <div className="font-bold text-sm text-[#4E4E4E]">Alexandre</div>
                <div className="text-xs text-[#5C5C5C]">
                  SVP Product · Coast
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
