import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface NoticeBannerProps {
  onOpenPlaceholder: (title: string, destination: string) => void;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ onOpenPlaceholder }) => {
  return (
    <div className="bg-stone-100 border-b border-stone-200/80 text-xs text-stone-700 py-2.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left: Concept notice clearly identifying reference status */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-semibold text-blue-900 bg-blue-100/70 border border-blue-200/80 px-2 py-0.5 rounded text-[11px] tracking-wide uppercase">
            <Sparkles className="w-3 h-3 text-blue-700" />
            Concept Preview
          </span>
          <span className="text-stone-600 hidden sm:inline">
            Reference content to be replaced · Exploring light editorial direction
          </span>
        </div>

        {/* Right: Reference Announcement Strip */}
        <button
          onClick={() =>
            onOpenPlaceholder(
              'Course: Executive Playbook for AI',
              '/course/exec (Cohort dates: December 2–3)'
            )
          }
          className="group inline-flex items-center gap-1.5 text-stone-800 hover:text-blue-700 transition-colors cursor-pointer font-medium"
        >
          <span>Next cohort: Executive Playbook for AI · December 2–3</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-stone-500 group-hover:text-blue-700" />
        </button>
      </div>
    </div>
  );
};
