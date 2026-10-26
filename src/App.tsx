/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { PORTFOLIO_SECTIONS } from './data/portfolioData';

type ViewMode = 'home' | 'projects';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash.includes('project') || path.endsWith('/projects') || path.endsWith('/projects/')) {
        return 'projects';
      }
    }
    return 'home';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');

  // Sync route on browser navigation (back/forward and hash changes)
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (hash.includes('project') || path.endsWith('/projects') || path.endsWith('/projects/')) {
        setCurrentView('projects');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
        if (hash === '#education' || hash === '#contact' || hash === '#hero') {
          const targetId = hash.replace('#', '');
          setActiveSection(targetId);
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Update active section on scroll when on Home page
  useEffect(() => {
    if (currentView !== 'home') return;

    const updateActiveFromScroll = () => {
      const offset = 200;
      let currentId = 'hero';

      for (const section of PORTFOLIO_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            currentId = section.id;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        currentId = 'contact';
      }

      setActiveSection(currentId);
    };

    updateActiveFromScroll();
    window.addEventListener('scroll', updateActiveFromScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateActiveFromScroll);
    };
  }, [currentView]);

  const handleNavigate = (view: ViewMode, targetSectionId?: string) => {
    setCurrentView(view);
    if (view === 'projects') {
      window.location.hash = '#/projects';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (targetSectionId && targetSectionId !== 'hero') {
        window.location.hash = `#${targetSectionId}`;
        setTimeout(() => {
          const el = document.getElementById(targetSectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.location.hash = '#/';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#191919]">
      <Navbar
        currentView={currentView}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            <HeroSection onNavigateToProjects={() => handleNavigate('projects')} />
            <EducationSection />
            <ContactSection />
          </>
        ) : (
          <ProjectsSection onBackToHome={() => handleNavigate('home')} />
        )}
      </main>

      {/* Minimal Swiss Archival Footer */}
      <footer className="bg-[#F7F4EE] border-t border-[#D8D3C8] text-[#767167]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
          <div>
            <span className="text-[#191919] font-semibold">Hem Tilva</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>B.Tech. CSE, IIT Gandhinagar</span>
          </div>

          <div className="flex items-center gap-6">
            {currentView === 'projects' ? (
              <button
                type="button"
                onClick={() => handleNavigate('home')}
                className="text-[#191919] hover:text-[#E53935] transition-colors cursor-pointer"
              >
                ← Back to Overview
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleNavigate('projects')}
                className="text-[#191919] hover:text-[#E53935] transition-colors cursor-pointer"
              >
                Selected Projects Page →
              </button>
            )}

            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
