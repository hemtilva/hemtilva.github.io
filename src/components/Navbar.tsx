import React, { useState } from 'react';
import { PORTFOLIO_SECTIONS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = PORTFOLIO_SECTIONS.filter((section) => section.id !== 'contact');

  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EE] border-b-2 border-[#191919]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (single text element, one line) */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-[#191919] hover:text-[#E53935] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191919]"
        >
          Hem Tilva
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-[0.08em]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={` py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                  isActive
                    ? 'text-[#191919] border-[#E53935] font-semibold'
                    : 'text-[#767167] border-transparent hover:text-[#191919] hover:border-[#191919]'
                }`}
              >
                {item.number}. {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Visible Contact CTA with Signal Red emphasis) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
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

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#F7F4EE] border-t border-[#191919] px-4 py-3"
        >
          <ul className="grid grid-cols-2 gap-2">
            {PORTFOLIO_SECTIONS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-xs font-mono uppercase tracking-[0.08em] border ${
                    item.id === 'contact'
                      ? 'bg-[#E53935] text-white border-[#191919] font-semibold'
                      : activeSection === item.id
                      ? 'bg-[#191919] text-[#F7F4EE] border-[#191919]'
                      : 'bg-[#EFECE4] text-[#191919] border-[#D8D3C8]'
                  }`}
                >
                  {item.number}. {item.label} →
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
