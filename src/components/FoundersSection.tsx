import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Users } from 'lucide-react';

interface FoundersSectionProps {
  onOpenPlaceholder: (title: string, destination: string) => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onOpenPlaceholder }) => {
  return (
    <section id="founders" className="py-16 md:py-20 border-b border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#ce2124] mb-1">
              Founders & Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4E4E4E] tracking-tight">
              The operators behind CXO.dev
            </h2>
            <p className="text-sm text-[#5C5C5C] mt-1">
              Reference leadership profiles from original site · Represented as conceptual content
            </p>
          </div>

          <button
            onClick={() => onOpenPlaceholder('Leadership Team & Operator Profiles', '/about')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4E4E4E] hover:text-[#ce2124] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>More about us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Claire Vo Card */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/90 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:border-stone-300 transition-all shadow-2xs">
            <div className="relative shrink-0">
              <img
                src="/src/assets/images/founder_claire_ref_1793802466834.jpg"
                alt="Claire Vo reference profile"
                referrerPolicy="no-referrer"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover object-center shadow-xs border border-stone-200"
              />
              <span className="absolute -bottom-2 -right-2 bg-white px-1.5 py-0.5 rounded text-[10px] font-mono border border-stone-200 text-stone-500">
                Ref
              </span>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 justify-center sm:justify-start">
                <h3 className="text-lg font-bold text-slate-900">Claire Vo</h3>
                <span className="text-xs text-stone-500 font-mono hidden sm:inline">· Co-founder</span>
              </div>
              <p className="text-sm font-medium text-slate-700 leading-snug">
                3x CPTO · founder of ChatPRD · host of How I AI
              </p>
              <p className="text-xs text-stone-500 leading-relaxed pt-1">
                Executive product & platform builder helping organizations restructure delivery pipelines around autonomous agent workflows.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenPlaceholder('Claire Vo Profile & Background', '/about#claire')}
                  className="text-xs font-semibold text-[#ce2124] hover:text-[#b01b1e] inline-flex items-center gap-1"
                >
                  <span>Operator background</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Zach Davis Card */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/90 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:border-stone-300 transition-all shadow-2xs">
            <div className="relative shrink-0">
              <img
                src="/src/assets/images/founder_zach_ref_1793802466076.jpg"
                alt="Zach Davis reference profile"
                referrerPolicy="no-referrer"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover object-center shadow-xs border border-stone-200"
              />
              <span className="absolute -bottom-2 -right-2 bg-white px-1.5 py-0.5 rounded text-[10px] font-mono border border-stone-200 text-stone-500">
                Ref
              </span>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 justify-center sm:justify-start">
                <h3 className="text-lg font-bold text-[#4E4E4E]">Zach Davis</h3>
                <span className="text-xs text-[#5C5C5C] font-mono hidden sm:inline">· Co-founder</span>
              </div>
              <p className="text-sm font-medium text-[#5C5C5C] leading-snug">
                Engineering leader · hands-on in the stack
              </p>
              <p className="text-xs text-[#5C5C5C] leading-relaxed pt-1">
                Deep technical systems architect focused on codebase readiness, automated verification suites, and agent testing harnesses.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenPlaceholder('Zach Davis Profile & Background', '/about#zach')}
                  className="text-xs font-semibold text-[#ce2124] hover:text-[#b01b1e] inline-flex items-center gap-1"
                >
                  <span>Operator background</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Operator Network Banner */}
        <div className="bg-stone-100 rounded-xl p-5 border border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-lg bg-[#ce2124]/10 border border-[#ce2124]/20 text-[#ce2124] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#4E4E4E]">
                Join the CXO.dev operator network
              </div>
              <div className="text-xs text-[#5C5C5C]">
                Are you an elite practitioner deploying agents in production environments?
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenPlaceholder('Operator Network Application', '/work-with-us')}
            className="px-4 py-2 bg-white hover:bg-stone-50 border border-stone-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-2xs"
          >
            <span>Join us</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
          </button>
        </div>

      </div>
    </section>
  );
};
