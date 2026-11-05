import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenPlaceholder: (title: string, destination: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPlaceholder }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Tagline (Spans 4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#ce2124] rounded-xs inline-block" />
              <span className="text-xl font-bold tracking-tight text-white">CXO.DEV</span>
            </div>
            <p className="text-base font-medium text-stone-200">
              Builders, not consultants.
            </p>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              We help technical executives create agent-first engineering organizations with production-grade platform readiness.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-800 rounded-md text-[11px] font-mono text-stone-400">
              <Sparkles className="w-3 h-3 text-[#ce2124]" />
              <span>Concept preview — reference copy</span>
            </div>
          </div>

          {/* Links Columns (Spans 8 cols) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            
            {/* Column 1: Services */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
                Services
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="#paths-in" className="hover:text-white transition-colors">
                    AI Engineering
                  </a>
                </li>
                <li>
                  <a href="#paths-in" className="hover:text-white transition-colors">
                    AI Transformation
                  </a>
                </li>
                <li>
                  <a href="#paths-in" className="hover:text-white transition-colors">
                    AI Executive Coaching
                  </a>
                </li>
                <li>
                  <a href="#paths-in" className="hover:text-white transition-colors">
                    AI Training
                  </a>
                </li>
                <li>
                  <button
                    onClick={() =>
                      onOpenPlaceholder('Course: Executive Playbook for AI', '/course/exec')
                    }
                    className="text-left text-[#ce2124] hover:text-[#f87171] transition-colors"
                  >
                    Course: Executive Playbook
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
                Contact
              </div>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onOpenPlaceholder('Customers & Engagements', '/customers')}
                    className="text-left hover:text-white transition-colors"
                  >
                    Customers
                  </button>
                </li>
                <li>
                  <a href="#talk" className="hover:text-white transition-colors">
                    Talk to us
                  </a>
                </li>
                <li>
                  <a href="#founders" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
                Resources
              </div>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() =>
                      onOpenPlaceholder('AI Readiness Assessment Tool', '/ai-readiness-assessment')
                    }
                    className="text-left hover:text-white transition-colors"
                  >
                    AI readiness assessment
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenPlaceholder('Engineering Blog', '/blog')}
                    className="text-left hover:text-white transition-colors"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Elsewhere */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
                Elsewhere
              </div>
              <ul className="space-y-2 font-mono">
                <li>
                  <a
                    href="https://chatprd.ai"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>ChatPRD</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.chatprd.ai/how-i-ai"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>How I AI</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/clairevo"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>@clairevo</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 Reference Concept Prototype · Built for design exploration
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPlaceholder('Privacy Policy', '/privacy')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span>·</span>
            <span className="text-stone-400">Built in public</span>
            <span>·</span>
            <span className="text-[#ce2124] font-mono">Reference content to be replaced</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
