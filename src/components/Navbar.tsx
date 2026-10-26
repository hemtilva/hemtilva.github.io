import React, { useState } from 'react';

interface NavbarProps {
  currentView: 'home' | 'projects';
  activeSection: string;
  onNavigate: (view: 'home' | 'projects', targetSectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHomeSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('home', sectionId);
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('projects');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EE] border-b-2 border-[#191919]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 h-16 flex items-center justify-between gap-8">
        {/* Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => handleHomeSectionClick(e, 'hero')}
          className="text-lg font-bold tracking-tight text-[#191919] hover:text-[#E53935] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>Hem Tilva</span>
          <span className="text-xs font-mono font-normal text-[#767167]">/ IITGN</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-[0.08em]"
        >
          <a
            href="#hero"
            onClick={(e) => handleHomeSectionClick(e, 'hero')}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentView === 'home' && activeSection === 'hero'
                ? 'text-[#191919] border-[#E53935] font-semibold'
                : 'text-[#767167] border-transparent hover:text-[#191919] hover:border-[#191919]'
            }`}
          >
            01. Overview
          </a>

          <a
            href="#education"
            onClick={(e) => handleHomeSectionClick(e, 'education')}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentView === 'home' && activeSection === 'education'
                ? 'text-[#191919] border-[#E53935] font-semibold'
                : 'text-[#767167] border-transparent hover:text-[#191919] hover:border-[#191919]'
            }`}
          >
            02. Education &amp; Honors
          </a>

          {/* Dedicated Projects Page Link */}
          <a
            href="#/projects"
            onClick={handleProjectsClick}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 flex items-center gap-1.5 ${
              currentView === 'projects'
                ? 'text-[#191919] border-[#E53935] font-semibold'
                : 'text-[#767167] border-transparent hover:text-[#191919] hover:border-[#191919]'
            }`}
          >
            <span>Projects</span>
            <span className="text-[10px] bg-[#EFECE4] border border-[#D8D3C8] px-1.5 py-0.5 text-[#191919] font-semibold">
              Page ↗
            </span>
          </a>
        </nav>

        {/* Right Action: Contact CTA & Mobile Menu */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleHomeSectionClick(e, 'contact')}
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-mono font-semibold uppercase tracking-[0.08em] bg-[#E53935] text-white border border-[#191919] hover:bg-[#191919] hover:text-[#F7F4EE] transition-colors whitespace-nowrap shrink-0 swiss-hard-offset"
          >
            <span>Contact</span>
            <span aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden px-3 py-2 text-[11px] font-mono font-semibold uppercase tracking-[0.08em] bg-[#F7F4EE] text-[#191919] border border-[#191919] hover:bg-[#191919] hover:text-[#F7F4EE] transition-colors whitespace-nowrap shrink-0"
          >
            {mobileMenuOpen ? 'Close [×]' : 'Menu [+]'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#F7F4EE] border-t border-[#191919] px-4 py-4"
        >
          <ul className="grid grid-cols-1 gap-2.5">
            <li>
              <button
                type="button"
                onClick={(e) => handleHomeSectionClick(e, 'hero')}
                className={`w-full text-left px-3.5 py-2.5 text-xs font-mono uppercase tracking-[0.08em] border ${
                  currentView === 'home' && activeSection === 'hero'
                    ? 'bg-[#191919] text-[#F7F4EE] border-[#191919]'
                    : 'bg-[#EFECE4] text-[#191919] border-[#D8D3C8]'
                }`}
              >
                01. Overview →
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => handleHomeSectionClick(e, 'education')}
                className={`w-full text-left px-3.5 py-2.5 text-xs font-mono uppercase tracking-[0.08em] border ${
                  currentView === 'home' && activeSection === 'education'
                    ? 'bg-[#191919] text-[#F7F4EE] border-[#191919]'
                    : 'bg-[#EFECE4] text-[#191919] border-[#D8D3C8]'
                }`}
              >
                02. Education &amp; Honors →
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleProjectsClick}
                className={`w-full text-left px-3.5 py-2.5 text-xs font-mono uppercase tracking-[0.08em] border flex items-center justify-between ${
                  currentView === 'projects'
                    ? 'bg-[#191919] text-[#F7F4EE] border-[#191919]'
                    : 'bg-[#EFECE4] text-[#191919] border-[#D8D3C8]'
                }`}
              >
                <span>Selected Projects Page</span>
                <span className="text-[10px] bg-[#E53935] text-white px-1.5 py-0.5">PAGE ↗</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => handleHomeSectionClick(e, 'contact')}
                className="w-full text-left px-3.5 py-2.5 text-xs font-mono uppercase tracking-[0.08em] bg-[#E53935] text-white border border-[#191919] font-semibold"
              >
                03. Contact →
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
