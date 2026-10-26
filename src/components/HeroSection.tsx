import React from 'react';
import { HERO_DATA, EDUCATION_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigateToProjects?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToProjects }) => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="border-b-2 border-[#191919] bg-[#F7F4EE]"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 py-12 md:py-20 lg:py-28">
        {/* Top Editorial Metadata Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 pb-6 md:pb-8 mb-10 md:mb-12 border-b border-[#D8D3C8] text-[11px] font-mono uppercase tracking-[0.08em] text-[#767167]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-block w-2 h-2 bg-[#E53935] shrink-0" aria-hidden="true" />
            <span className="text-[#191919] font-semibold whitespace-nowrap">01. Index &amp; Statement</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="w-full sm:w-auto text-[#767167]">{HERO_DATA.roleKicker}</span>
          </div>
          <div className="font-mono tabular-nums text-[#191919] sm:text-[#767167]">
            <span>B.TECH CSE (2024–PRESENT) · CPI {EDUCATION_DATA.cpi}/10</span>
          </div>
        </div>

        {/* 12-Column Asymmetric Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-stretch">
          {/* Left 8 Columns: Monumental Name, Systems Philosophy, Primary & Contact CTAs */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.08em] text-[#767167] mb-4">
                Software Engineer · Systems &amp; Architecture
              </p>

              <h1
                id="hero-heading"
                className="text-[52px] leading-[52px] md:text-[80px] md:leading-[78px] xl:text-[96px] xl:leading-[92px] font-bold tracking-[-0.04em] text-[#191919] mb-8"
              >
                {HERO_DATA.name}
              </h1>

              <p
                className="text-[22px] leading-[30px] md:text-[30px] md:leading-[36px] font-semibold tracking-[-0.02em] text-[#191919] max-w-3xl mb-6"
                style={{ textWrap: 'balance' }}
              >
                {HERO_DATA.headline}
              </p>

              <p className="text-[16px] md:text-[18px] leading-[28px] text-[#444748] max-w-2xl mb-10">
                {HERO_DATA.lead}
              </p>
            </div>

            {/* Hero Action Bar — Clear links to Projects and Contact */}
            <div className="pt-8 border-t border-[#D8D3C8] flex flex-wrap items-center gap-4">
              <a
                href="#/projects"
                onClick={(e) => {
                  if (onNavigateToProjects) {
                    e.preventDefault();
                    onNavigateToProjects();
                  }
                }}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#191919] text-[#F7F4EE] text-xs font-mono font-semibold uppercase tracking-[0.08em] border border-[#191919] hover:bg-[#E53935] hover:border-[#E53935] hover:text-white transition-colors whitespace-nowrap shrink-0 swiss-hard-offset"
              >
                <span>Explore Projects Page</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#F7F4EE] text-[#191919] text-xs font-mono font-semibold uppercase tracking-[0.08em] border-2 border-[#191919] hover:bg-[#191919] hover:text-[#F7F4EE] transition-colors whitespace-nowrap shrink-0 swiss-hard-offset"
              >
                <span className="inline-block w-2 h-2 bg-[#E53935]" aria-hidden="true" />
                <span>Initiate Contact</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right 4 Columns: Architectural Specification & Systems Matrix */}
          <aside
            aria-label="Engineering Focus and Academic Summary"
            className="lg:col-span-4 bg-[#EFECE4] border border-[#191919] p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#191919]">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#191919]">
                  PROFILE OVERVIEW
                </span>
                <span className="inline-block w-2 h-2 bg-[#E53935]" aria-hidden="true" />
              </div>

              <dl className="divide-y divide-[#D8D3C8] text-sm">
                <div className="py-3.5 flex flex-col gap-1">
                  <dt className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#767167]">
                    Core Discipline
                  </dt>
                  <dd className="font-medium text-[#191919]">
                    Operating Systems · Kernel Internals · Systems Programming
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col gap-1">
                  <dt className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#767167]">
                    Institution &amp; Academics
                  </dt>
                  <dd className="font-medium text-[#191919] font-mono tabular-nums">
                    IIT Gandhinagar · CPI 9.34 / 10.00
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col gap-1">
                  <dt className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#767167]">
                    Engineering Approach
                  </dt>
                  <dd className="text-[#444748] text-[13px] leading-[20px]">
                    Deliberate space-time trade-offs, page-level memory allocation, cache locality, and low-level abstractions.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="pt-6 mt-6 border-t border-[#191919] flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#767167]">
                PROJECTS ARCHIVE
              </span>
              <a
                href="#/projects"
                onClick={(e) => {
                  if (onNavigateToProjects) {
                    e.preventDefault();
                    onNavigateToProjects();
                  }
                }}
                className="text-xs font-mono font-semibold text-[#E53935] hover:underline whitespace-nowrap shrink-0"
              >
                Go to Projects Page →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
