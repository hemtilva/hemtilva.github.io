/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { PORTFOLIO_SECTIONS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const updateActiveFromScroll = () => {
      const offset = 180;
      let currentId = PORTFOLIO_SECTIONS[0].id as string;

      for (const section of PORTFOLIO_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            currentId = section.id;
          }
        }
      }

      // If scrolled near the bottom of the page, highlight contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        currentId = 'contact';
      }

      setActiveSection(currentId);
    };

    updateActiveFromScroll();
    window.addEventListener('scroll', updateActiveFromScroll, { passive: true });
    window.addEventListener('hashchange', updateActiveFromScroll);
    return () => {
      window.removeEventListener('scroll', updateActiveFromScroll);
      window.removeEventListener('hashchange', updateActiveFromScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#191919]">
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Minimal Swiss Archival Footer */}
      <footer className="bg-[#F7F4EE] text-[#767167]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
          <div>
            <span className="text-[#191919] font-semibold">Hem Tilva</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>B.Tech. CSE, IIT Gandhinagar</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="text-[#191919] hover:text-[#E53935] transition-colors whitespace-nowrap"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
