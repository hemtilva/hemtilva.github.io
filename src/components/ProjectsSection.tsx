import React, { useState } from 'react';
import {
  PROJECTS_DATA,
  ProjectCategory,
  ProjectEntry,
  filterProjectsByCategory,
} from '../data/portfolioData';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Data Structures',
  'OS Kernel',
  'Systems & Web',
];

interface ProjectsSectionProps {
  onBackToHome?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const filteredProjects = filterProjectsByCategory(PROJECTS_DATA, selectedCategory);

  const renderProjectEntry = (project: ProjectEntry) => {
    if (project.gridAlignment === 'left-heavy') {
      return (
        <article
          key={project.id}
          aria-labelledby={`project-title-${project.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 pb-16 border-t-2 border-[#191919]"
        >
          {/* Left 8 Columns: Main Project Specification Card */}
          <div className="lg:col-span-8 bg-[#F7F4EE] border border-[#191919] p-6 md:p-10 swiss-hard-offset flex flex-col justify-between">
            <div>
              {/* Top Technical Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-[#191919] text-xs font-mono">
                <div className="flex items-center gap-2 text-[#191919] font-semibold uppercase tracking-[0.08em]">
                  <span className="inline-block w-2 h-2 bg-[#E53935]" aria-hidden="true" />
                  <span>PROJECT {project.index}</span>
                  <span aria-hidden="true" className="text-[#767167]">·</span>
                  <span className="text-[#767167]">{project.category}</span>
                </div>
                <span className="text-[11px] text-[#767167] uppercase tracking-[0.08em]">
                  {project.stack.join(' · ')}
                </span>
              </div>

              <h3
                id={`project-title-${project.id}`}
                className="text-[28px] md:text-[36px] leading-[38px] font-bold tracking-[-0.02em] text-[#191919] mb-4"
              >
                {project.title}
              </h3>

              <p className="text-[16px] md:text-[18px] leading-[28px] text-[#191919] mb-8 max-w-2xl">
                {project.conciseDescription}
              </p>

              {/* Key-Value Technical Details Matrix */}
              <dl className="border-t border-[#D8D3C8] divide-y divide-[#D8D3C8]">
                {project.technicalDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 hover:bg-[#EFECE4] transition-colors px-2 -mx-2"
                  >
                    <dt className="md:col-span-4 text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#767167] pt-0.5">
                      {detail.label}
                    </dt>
                    <dd className="md:col-span-8 text-[14px] leading-[22px] text-[#191919]">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Direct Repository Link Footer */}
            <div className="pt-6 mt-8 border-t border-[#191919] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#767167]">
                {project.githubLabel}
              </span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#191919] text-[#F7F4EE] text-xs font-mono font-semibold uppercase tracking-[0.08em] hover:bg-[#E53935] hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>View on GitHub</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right 4 Columns: Asymmetric Architectural Trade-off Block */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#EFECE4] border border-[#D8D3C8] p-6 md:p-8">
            <div>
              <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#767167] pb-3 mb-4 border-b border-[#D8D3C8]">
                01.A · ENGINEERING TRADE-OFF
              </div>
              <p className="text-[15px] leading-[24px] text-[#191919] mb-6">
                {project.engineeringTradeoffs}
              </p>
            </div>

            <div className="pt-4 border-t border-[#D8D3C8] text-xs font-mono text-[#767167]">
              <div>FOCUS: SPATIAL EFFICIENCY</div>
              <div className="mt-1">COMPLEXITY: O(k) LOOKUP · BOUNDED FALSE POSITIVES</div>
            </div>
          </div>
        </article>
      );
    }

    if (project.gridAlignment === 'right-offset') {
      return (
        <article
          key={project.id}
          aria-labelledby={`project-title-${project.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 pb-16 border-t-2 border-[#191919]"
        >
          {/* Left 4 Columns: Offset Index & Kernel Trade-off Note */}
          <div className="lg:col-span-4 flex flex-col justify-between order-2 lg:order-1 bg-[#EFECE4] border border-[#D8D3C8] p-6 md:p-8">
            <div>
              <div className="text-[48px] leading-[48px] font-mono font-bold text-[#191919] mb-4">
                {project.index}
              </div>
              <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#E53935] pb-3 mb-4 border-b border-[#D8D3C8]">
                02.A · KERNEL TRADE-OFF ANALYSIS
              </div>
              <p className="text-[15px] leading-[24px] text-[#191919]">
                {project.engineeringTradeoffs}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-[#D8D3C8] text-xs font-mono text-[#767167]">
              <div>SUBSYSTEM: XV6 VIRTUAL MEMORY</div>
              <div className="mt-1">MECHANISM: PTE DEDUPLICATION + COW FAULT TRAP</div>
            </div>
          </div>

          {/* Right 8 Columns: Offset Primary Project Showcase */}
          <div className="lg:col-span-8 order-1 lg:order-2 bg-[#F7F4EE] border border-[#191919] p-6 md:p-10 swiss-hard-offset flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-[#191919] text-xs font-mono">
                <div className="flex items-center gap-2 text-[#191919] font-semibold uppercase tracking-[0.08em]">
                  <span className="inline-block w-2 h-2 bg-[#E53935]" aria-hidden="true" />
                  <span>PROJECT {project.index}</span>
                  <span aria-hidden="true" className="text-[#767167]">·</span>
                  <span className="text-[#767167]">{project.category}</span>
                </div>
                <span className="text-[11px] text-[#767167] uppercase tracking-[0.08em]">
                  {project.stack.join(' · ')}
                </span>
              </div>

              <h3
                id={`project-title-${project.id}`}
                className="text-[28px] md:text-[36px] leading-[38px] font-bold tracking-[-0.02em] text-[#191919] mb-4"
              >
                {project.title}
              </h3>

              <p className="text-[16px] md:text-[18px] leading-[28px] text-[#191919] mb-8 max-w-2xl">
                {project.conciseDescription}
              </p>

              <dl className="border-t border-[#D8D3C8] divide-y divide-[#D8D3C8]">
                {project.technicalDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 hover:bg-[#EFECE4] transition-colors px-2 -mx-2"
                  >
                    <dt className="md:col-span-4 text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#767167] pt-0.5">
                      {detail.label}
                    </dt>
                    <dd className="md:col-span-8 text-[14px] leading-[22px] text-[#191919]">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="pt-6 mt-8 border-t border-[#191919] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#767167]">
                {project.githubLabel}
              </span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#191919] text-[#F7F4EE] text-xs font-mono font-semibold uppercase tracking-[0.08em] hover:bg-[#E53935] hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>View on GitHub</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </article>
      );
    }

    return (
      <article
        key={project.id}
        aria-labelledby={`project-title-${project.id}`}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 pb-8 border-t-2 border-[#191919]"
      >
        <div className="lg:col-span-9 bg-[#F7F4EE] border border-[#191919] p-6 md:p-10 swiss-hard-offset">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-[#191919] text-xs font-mono">
            <div className="flex items-center gap-2 text-[#191919] font-semibold uppercase tracking-[0.08em]">
              <span className="inline-block w-2 h-2 bg-[#E53935]" aria-hidden="true" />
              <span>PROJECT {project.index}</span>
              <span aria-hidden="true" className="text-[#767167]">·</span>
              <span className="text-[#767167]">{project.category}</span>
            </div>
            <span className="text-[11px] text-[#767167] uppercase tracking-[0.08em]">
              {project.stack.join(' · ')}
            </span>
          </div>

          <h3
            id={`project-title-${project.id}`}
            className="text-[28px] md:text-[36px] leading-[38px] font-bold tracking-[-0.02em] text-[#191919] mb-4"
          >
            {project.title}
          </h3>

          <p className="text-[16px] md:text-[18px] leading-[28px] text-[#191919] mb-8 max-w-3xl">
            {project.conciseDescription}
          </p>

          <dl className="border-t border-[#D8D3C8] divide-y divide-[#D8D3C8]">
            {project.technicalDetails.map((detail) => (
              <div
                key={detail.label}
                className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 hover:bg-[#EFECE4] transition-colors px-2 -mx-2"
              >
                <dt className="md:col-span-4 text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#767167] pt-0.5">
                  {detail.label}
                </dt>
                <dd className="md:col-span-8 text-[14px] leading-[22px] text-[#191919]">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 3-Column Vertical Action & Trade-off Column */}
        <div className="lg:col-span-3 flex flex-col justify-between bg-[#EFECE4] border border-[#191919] p-6">
          <div>
            <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#767167] pb-3 mb-4 border-b border-[#D8D3C8]">
              03.A · SYSTEM TRADE-OFF
            </div>
            <p className="text-[14px] leading-[22px] text-[#191919] mb-6">
              {project.engineeringTradeoffs}
            </p>
          </div>

          <div className="pt-6 border-t border-[#191919]">
            <p className="text-[11px] font-mono text-[#767167] break-all mb-4">
              {project.githubLabel}
            </p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between px-4 py-3 bg-[#191919] text-[#F7F4EE] text-xs font-mono font-semibold uppercase tracking-[0.08em] hover:bg-[#E53935] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              <span>View on GitHub</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      {/* Top Projects Page Hero */}
      <div className="border-b-2 border-[#191919] bg-[#EFECE4]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.08em] text-[#E53935] mb-3">
                <span className="inline-block w-2 h-2 bg-[#E53935]" aria-hidden="true" />
                <span>Architectural Ledger · Selected Works</span>
              </div>
              <h1 className="text-[40px] md:text-[60px] font-bold tracking-[-0.03em] text-[#191919] leading-tight">
                Selected Projects
              </h1>
              <p className="text-[16px] md:text-[18px] text-[#444748] mt-3 max-w-2xl leading-[26px]">
                Low-level systems implementations, kernel memory deduplication, probabilistic data structures, and web architecture built with first-principles trade-offs.
              </p>
            </div>

            <a
              href="#/"
              onClick={(e) => {
                if (onBackToHome) {
                  e.preventDefault();
                  onBackToHome();
                }
              }}
              className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-[0.08em] bg-[#191919] text-[#F7F4EE] hover:bg-[#E53935] hover:text-white transition-colors self-start md:self-auto shrink-0 swiss-hard-offset"
            >
              <span>← Back to Overview</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 py-12 md:py-20">
        {/* Category Filter Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#D8D3C8]">
          <span className="text-[12px] font-mono uppercase tracking-[0.08em] text-[#767167]">
            FILTER BY DOMAIN ({filteredProjects.length} AVAILABLE)
          </span>

          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={active}
                  className={`px-3.5 py-2 text-[11px] font-mono font-semibold uppercase tracking-[0.08em] border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#191919] text-[#F7F4EE] border-[#191919]'
                      : 'bg-[#F7F4EE] text-[#191919] border-[#D8D3C8] hover:border-[#191919]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Specification Cards */}
        <div className="space-y-4">
          {filteredProjects.map((project) => renderProjectEntry(project))}
        </div>

        {/* Bottom Navigation Strip */}
        <div className="mt-16 pt-12 border-t-2 border-[#191919] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="text-sm font-mono text-[#767167]">
            Source code and documentation hosted on{' '}
            <a
              href="https://github.com/hemtilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#191919] underline font-semibold hover:text-[#E53935]"
            >
              github.com/hemtilva
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#/"
              onClick={(e) => {
                if (onBackToHome) {
                  e.preventDefault();
                  onBackToHome();
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F7F4EE] text-[#191919] border border-[#191919] text-xs font-mono font-semibold uppercase tracking-[0.08em] hover:bg-[#191919] hover:text-[#F7F4EE] transition-colors"
            >
              <span>← Home</span>
            </a>

            <a
              href="#contact"
              onClick={() => {
                if (onBackToHome) {
                  onBackToHome();
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E53935] text-white border border-[#191919] text-xs font-mono font-semibold uppercase tracking-[0.08em] hover:bg-[#191919] transition-colors"
            >
              <span>Get in Touch →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
