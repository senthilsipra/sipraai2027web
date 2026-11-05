import React from 'react';
import { X, ArrowUpRight, Info } from 'lucide-react';

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  destination: string;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  isOpen,
  onClose,
  title,
  destination,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-stone-200 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
          aria-label="Close dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
          <Info className="w-4 h-4" />
          <span>Prototype Exploration</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
          {title}
        </h3>

        <p className="text-sm text-stone-600 leading-relaxed mb-5">
          This is a <strong className="font-semibold text-slate-900">homepage-only prototype</strong> created to evaluate the new light editorial visual direction against the reference structure.
        </p>

        <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-xs text-stone-600 font-mono mb-6">
          <span className="text-stone-400">Target route:</span> {destination}
          <div className="text-stone-500 text-[11px] mt-1 font-sans">
            Reference content and subpage templates will be produced in the next design stage.
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
          <a
            href="#talk"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Discuss in Contact Form</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
