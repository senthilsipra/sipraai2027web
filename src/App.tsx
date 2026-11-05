/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NoticeBanner } from './components/NoticeBanner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FoundersSection } from './components/FoundersSection';
import { SystemSection } from './components/SystemSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { PathsInSection } from './components/PathsInSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlaceholderModal } from './components/PlaceholderModal';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    destination: string;
  }>({
    isOpen: false,
    title: '',
    destination: '',
  });

  const handleOpenPlaceholder = (title: string, destination: string) => {
    setModalState({
      isOpen: true,
      title,
      destination,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#4E4E4E] flex flex-col font-sans selection:bg-[#ce2124]/15 selection:text-[#ce2124] antialiased">
      {/* 1. Announcement Strip */}
      <NoticeBanner onOpenPlaceholder={handleOpenPlaceholder} />

      {/* 2. Header and Navigation */}
      <Header onOpenPlaceholder={handleOpenPlaceholder} />

      {/* Main Content Area in exact reference section order */}
      <main className="flex-1">
        {/* 3. Hero Section (Headline, Value Prop, CTAs, Diagnostic Dashboard, Clients & Ecosystem) */}
        <HeroSection onOpenPlaceholder={handleOpenPlaceholder} />

        {/* 4. Founder / Team Introduction & Operator Network */}
        <FoundersSection onOpenPlaceholder={handleOpenPlaceholder} />

        {/* 5. The System (Pillars & Where we go deepest) */}
        <SystemSection onOpenPlaceholder={handleOpenPlaceholder} />

        {/* 6. How We Work (Engagement Formats: Assessment, Advisory, Workshops, Implementation) */}
        <HowWeWorkSection onOpenPlaceholder={handleOpenPlaceholder} />

        {/* 7. Service-Specific Pathways (Paths in & Repo Readiness Checklist) */}
        <PathsInSection onOpenPlaceholder={handleOpenPlaceholder} />

        {/* 8. Testimonials and Proof */}
        <TestimonialsSection />

        {/* 9. Contact Form ("Let's go.") */}
        <ContactSection onOpenPlaceholder={handleOpenPlaceholder} />
      </main>

      {/* 10. Footer */}
      <Footer onOpenPlaceholder={handleOpenPlaceholder} />

      {/* Prototype Review Dialogue for Subpages */}
      <PlaceholderModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        title={modalState.title}
        destination={modalState.destination}
      />
    </div>
  );
}
