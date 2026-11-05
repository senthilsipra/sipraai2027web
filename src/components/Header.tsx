import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenPlaceholder: (title: string, destination: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPlaceholder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Clean, confident Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5 whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              <span className="w-2.5 h-2.5 bg-blue-700 rounded-xs inline-block" />
              <span>CXO.DEV</span>
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-700">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setResourcesOpen(false);
                }}
                className={`flex items-center gap-1 transition-colors py-1 cursor-pointer whitespace-nowrap shrink-0 ${
                  servicesOpen ? 'text-blue-700' : 'hover:text-slate-900'
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform ${
                    servicesOpen ? 'rotate-180 text-blue-700' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-stone-200/90 py-2 z-50 text-xs">
                  <a
                    href="#paths-in"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-slate-800 hover:bg-stone-50 hover:text-blue-700 transition-colors"
                  >
                    <div className="font-semibold">AI Engineering Acceleration</div>
                    <div className="text-stone-500 text-[11px] font-normal">Repo readiness & delivery pipelines</div>
                  </a>
                  <a
                    href="#paths-in"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-slate-800 hover:bg-stone-50 hover:text-blue-700 transition-colors"
                  >
                    <div className="font-semibold">AI Transformation</div>
                    <div className="text-stone-500 text-[11px] font-normal">Company operating model for leadership</div>
                  </a>
                  <a
                    href="#paths-in"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-slate-800 hover:bg-stone-50 hover:text-blue-700 transition-colors"
                  >
                    <div className="font-semibold">AI Executive Coaching</div>
                    <div className="text-stone-500 text-[11px] font-normal">Hands-on guidance for technical executives</div>
                  </a>
                  <a
                    href="#paths-in"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-slate-800 hover:bg-stone-50 hover:text-blue-700 transition-colors"
                  >
                    <div className="font-semibold">AI Training & Workshops</div>
                    <div className="text-stone-500 text-[11px] font-normal">Team courses and hands-on tool mastery</div>
                  </a>
                  <div className="border-t border-stone-100 my-1"></div>
                  <button
                    onClick={() => {
                      setServicesOpen(false);
                      onOpenPlaceholder('Course: Executive Playbook for AI', '/course/exec');
                    }}
                    className="w-full text-left px-4 py-2 text-blue-700 hover:bg-blue-50 font-medium flex items-center justify-between"
                  >
                    <span>Course: Executive Playbook</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => onOpenPlaceholder('Customers & Case Studies', '/customers')}
              className="hover:text-slate-900 transition-colors py-1 cursor-pointer whitespace-nowrap shrink-0"
            >
              Customers
            </button>

            <a
              href="#founders"
              className="hover:text-slate-900 transition-colors py-1 whitespace-nowrap shrink-0"
            >
              About
            </a>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                type="button"
                onClick={() => {
                  setResourcesOpen(!resourcesOpen);
                  setServicesOpen(false);
                }}
                className={`flex items-center gap-1 transition-colors py-1 cursor-pointer whitespace-nowrap shrink-0 ${
                  resourcesOpen ? 'text-blue-700' : 'hover:text-slate-900'
                }`}
                aria-expanded={resourcesOpen}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform ${
                    resourcesOpen ? 'rotate-180 text-blue-700' : ''
                  }`}
                />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-stone-200/90 py-2 z-50 text-xs">
                  <button
                    onClick={() => {
                      setResourcesOpen(false);
                      onOpenPlaceholder('AI Readiness Assessment Tool', '/ai-readiness-assessment');
                    }}
                    className="w-full text-left px-4 py-2.5 text-slate-800 hover:bg-stone-50 hover:text-blue-700 transition-colors"
                  >
                    <div className="font-semibold">AI Readiness Assessment</div>
                    <div className="text-stone-500 text-[11px] font-normal">Evaluate technical & team posture</div>
                  </button>
                  <button
                    onClick={() => {
                      setResourcesOpen(false);
                      onOpenPlaceholder('Engineering & AI Blog', '/blog');
                    }}
                    className="w-full text-left px-4 py-2.5 text-slate-800 hover:bg-stone-50 hover:text-blue-700 transition-colors"
                  >
                    <div className="font-semibold">Blog & Insights</div>
                    <div className="text-stone-500 text-[11px] font-normal">Playbooks from the field</div>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenPlaceholder('Client Portal Login', '/login')}
              className="hidden lg:inline-flex text-xs font-medium text-stone-600 hover:text-slate-900 transition-colors px-2 py-1.5 whitespace-nowrap"
            >
              Client login
            </button>
            <a
              href="#talk"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-xs whitespace-nowrap shrink-0"
            >
              <span>Talk to us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-stone-200/60 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1 text-sm font-medium text-slate-800">
            <a
              href="#system"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              The System
            </a>
            <a
              href="#paths-in"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Services & Pathways
            </a>
            <a
              href="#how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              How We Work
            </a>
            <a
              href="#founders"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              About Founders
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlaceholder('Customers & Case Studies', '/customers');
              }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 text-slate-800"
            >
              Customers
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlaceholder('AI Readiness Assessment Tool', '/ai-readiness-assessment');
              }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 text-slate-800"
            >
              AI Readiness Assessment
            </button>
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlaceholder('Client Portal Login', '/login');
              }}
              className="w-full py-2.5 px-3 text-center text-xs font-semibold text-slate-700 bg-stone-100 rounded-lg hover:bg-stone-200"
            >
              Client Login
            </button>
            <a
              href="#talk"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-3 text-center text-xs font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 shadow-xs flex items-center justify-center gap-1.5"
            >
              <span>Talk to us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
