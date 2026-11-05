import React, { useState } from 'react';
import { ArrowRight, Check, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onOpenPlaceholder: (title: string, destination: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPlaceholder }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [teamSize, setTeamSize] = useState('');
  const [revenue, setRevenue] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const helpTopics = [
    { id: 'eng', label: 'AI engineering acceleration' },
    { id: 'trans', label: 'AI transformation' },
    { id: 'coach', label: 'AI executive fluency / coaching' },
    { id: 'train', label: 'AI training / team course' },
    { id: 'course', label: 'Course: Executive Playbook for AI', hasLink: true },
    { id: 'unsure', label: 'Not sure yet' },
  ];

  const toggleTopic = (label: string) => {
    setSelectedTopics((prev) =>
      prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <section id="talk" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#ce2124]">
              Get In Touch
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#4E4E4E] tracking-tight leading-tight">
              Let’s go.
            </h2>
            <p className="text-base sm:text-lg text-[#5C5C5C] leading-relaxed font-normal">
              If you’re stuck, we want to help. Tell us what’s working (and what’s not) and we’ll get you where you need to be.
            </p>

            <div className="p-4 rounded-xl bg-[#ce2124]/10 border border-[#ce2124]/20 text-xs text-[#4E4E4E] space-y-2 mt-6">
              <div className="font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#ce2124]" />
                <span>Prototype Mode Notice</span>
              </div>
              <p className="text-[#5C5C5C] leading-relaxed">
                This form demonstrates client-side validation and interactive feedback. No actual data will be transmitted or stored during this review.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="py-12 px-6 text-center space-y-5 animate-in fade-in duration-200">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-2xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#4E4E4E]">
                    Enquiry Received (Preview)
                  </h3>
                  <p className="text-sm text-[#5C5C5C] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#4E4E4E]">{name}</strong>. In the live version, our team will review your team size ({teamSize || 'specified'}) and focus areas to prepare a targeted diagnostic roadmap.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setSelectedTopics([]);
                      setNotes('');
                    }}
                    className="px-5 py-2.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-[#4E4E4E] rounded-xl transition-colors cursor-pointer"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="block text-xs font-semibold text-[#4E4E4E]">
                      Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:border-[#ce2124] focus:ring-2 focus:ring-[#ce2124]/20 outline-none transition-all placeholder:text-stone-400 text-[#4E4E4E]"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="block text-xs font-semibold text-[#4E4E4E]">
                      Work email
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:border-[#ce2124] focus:ring-2 focus:ring-[#ce2124]/20 outline-none transition-all placeholder:text-stone-400 text-[#4E4E4E]"
                      required
                    />
                  </div>
                </div>

                {/* Help Topics Multi-select */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#4E4E4E]">
                    What do you need help with?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {helpTopics.map((topic) => {
                      const isSelected = selectedTopics.includes(topic.label);
                      return (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => toggleTopic(topic.label)}
                          className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#ce2124]/10 border-[#ce2124] text-[#ce2124] shadow-2xs font-semibold'
                              : 'bg-stone-50/60 border-stone-200 text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          <span className="flex-1 pr-2">{topic.label}</span>
                          <span className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 text-xs font-bold ${
                            isSelected ? 'bg-[#ce2124] text-white' : 'text-stone-400'
                          }`}>
                            {isSelected ? <Check className="w-3 h-3" /> : '+'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Team Size & Revenue Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="team-size-select" className="block text-xs font-semibold text-[#4E4E4E]">
                      Team size
                    </label>
                    <select
                      id="team-size-select"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:border-[#ce2124] focus:ring-2 focus:ring-[#ce2124]/20 outline-none transition-all text-[#4E4E4E] bg-white cursor-pointer"
                    >
                      <option value="">Select range</option>
                      <option value="1–10">1–10</option>
                      <option value="11–50">11–50</option>
                      <option value="51–200">51–200</option>
                      <option value="201–1,000">201–1,000</option>
                      <option value="1,000+">1,000+</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="revenue-select" className="block text-xs font-semibold text-[#4E4E4E]">
                      Annual revenue
                    </label>
                    <select
                      id="revenue-select"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:border-[#ce2124] focus:ring-2 focus:ring-[#ce2124]/20 outline-none transition-all text-[#4E4E4E] bg-white cursor-pointer"
                    >
                      <option value="">Select range</option>
                      <option value="Pre-revenue">Pre-revenue</option>
                      <option value="<$1M">&lt;$1M</option>
                      <option value="$1M–$10M">$1M–$10M</option>
                      <option value="$10M–$50M">$10M–$50M</option>
                      <option value="$50M–$250M">$50M–$250M</option>
                      <option value="$250M+">$250M+</option>
                    </select>
                  </div>
                </div>

                {/* Tell Us More Textarea */}
                <div className="space-y-1.5">
                  <label htmlFor="notes-textarea" className="block text-xs font-semibold text-[#4E4E4E]">
                    Tell us more
                  </label>
                  <textarea
                    id="notes-textarea"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Team size, current AI usage, what you’re hoping to change..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:border-[#ce2124] focus:ring-2 focus:ring-[#ce2124]/20 outline-none transition-all placeholder:text-stone-400 text-[#4E4E4E]"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-sans">
                    Responses are confidential.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ce2124] text-white font-semibold text-sm hover:bg-[#b01b1e] transition-all shadow-xs hover:shadow cursor-pointer group"
                  >
                    <span>Send enquiry</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
