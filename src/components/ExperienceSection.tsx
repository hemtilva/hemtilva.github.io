import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b-2 border-[#191919] bg-[#F7F4EE]"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 4 Columns: Section Header & Editorial Index */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.08em] text-[#E53935] mb-3">
                <span className="inline-block w-2 h-2 bg-[#E53935]" aria-hidden="true" />
                <span>02. Professional Timeline</span>
              </div>
              <h2
                id="experience-heading"
                className="text-[36px] leading-[40px] md:text-[56px] md:leading-[58px] font-bold tracking-[-0.03em] text-[#191919] mb-6"
              >
                Experience
              </h2>
              <p className="text-[15px] leading-[24px] text-[#444748] max-w-sm">
                Industry engineering experience. Unconfirmed dates, formal role titles, and team-specific deliverables are marked with explicit placeholders.
              </p>
            </div>

            <div className="hidden lg:block pt-6 border-t border-[#D8D3C8] mt-12">
              <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#767167]">
                VERIFICATION POLICY · NO UNCONFIRMED DETAILS INVENTED
              </p>
            </div>
          </div>

          {/* Right 8 Columns: Editorial Timeline */}
          <div className="lg:col-span-8">
            <div className="border-t-2 border-[#191919]">
              {EXPERIENCE_DATA.map((entry) => (
                <article
                  key={entry.id}
                  className="py-8 md:py-10 border-b border-[#D8D3C8] relative"
                >
                  {/* Top Metadata Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.08em]">
                      <span className="px-2 py-1 bg-[#191919] text-[#F7F4EE] font-semibold">
                        ENTRY {entry.index}
                      </span>
                      <span className="text-[#767167] font-mono">
                        {entry.datesPlaceholder}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.08em] text-[#E53935]">
                      <span className="inline-block w-1.5 h-1.5 bg-[#E53935]" aria-hidden="true" />
                      <span>{entry.isPlaceholderNote}</span>
                    </div>
                  </div>

                  {/* Organization & Role Title Placeholder */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                    <div className="md:col-span-7">
                      <h3 className="text-[28px] md:text-[32px] leading-[36px] font-semibold tracking-[-0.02em] text-[#191919] mb-2">
                        {entry.organization}
                      </h3>
                      <p className="text-sm font-mono font-medium text-[#191919] bg-[#EFECE4] border border-[#D8D3C8] px-3 py-2 inline-block">
                        {entry.titlePlaceholder}
                      </p>
                    </div>
                    <div className="md:col-span-5 flex flex-col justify-end md:items-end text-left md:text-right">
                      <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#767167]">
                        LOCATION
                      </span>
                      <span className="text-xs font-mono text-[#191919] mt-1">
                        {entry.locationPlaceholder}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Summary */}
                  <p className="text-[15px] leading-[24px] text-[#444748] mb-6 max-w-2xl">
                    {entry.summary}
                  </p>

                  {/* Structured Responsibilities Placeholder Matrix */}
                  <div className="bg-[#EFECE4] border border-[#191919] p-5 md:p-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D8D3C8]">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#191919]">
                        SCOPE &amp; ENGINEERING DELIVERABLES (PLACEHOLDERS)
                      </span>
                      <span className="text-[11px] font-mono text-[#767167]">
                        PENDING FINALIZATION
                      </span>
                    </div>
                    <ul className="divide-y divide-[#D8D3C8]">
                      {entry.responsibilitiesPlaceholder.map((item, idx) => (
                        <li
                          key={idx}
                          className="py-3 first:pt-0 last:pb-0 flex items-start gap-3 text-[13px] leading-[20px] font-mono text-[#444748]"
                        >
                          <span className="text-[#E53935] font-semibold shrink-0">
                            0{idx + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
