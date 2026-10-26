import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b-2 border-[#191919] bg-[#F7F4EE]"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 4 Columns: Section Index & Heading */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.08em] text-[#E53935] mb-3">
              <span className="inline-block w-2 h-2 bg-[#E53935]" aria-hidden="true" />
              <span>02. Academic Record &amp; Honors</span>
            </div>
            <h2
              id="education-heading"
              className="text-[36px] leading-[40px] md:text-[56px] md:leading-[58px] font-bold tracking-[-0.03em] text-[#191919] mb-4"
            >
              Education
            </h2>
            <p className="text-[15px] leading-[24px] text-[#444748] max-w-sm">
              Undergraduate computer science curriculum grounded in algorithms, competitive programming, systems programming, and computer architecture.
            </p>
          </div>

          {/* Right 8 Columns: Asymmetric Architectural Ledger */}
          <div className="lg:col-span-8">
            <div className="border-2 border-[#191919] bg-[#F7F4EE]">
              {/* Primary Institution & Degree Row */}
              <div className="p-6 md:p-10 border-b border-[#191919] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <div className="text-xs font-mono uppercase tracking-[0.08em] text-[#767167] mb-2">
                    {EDUCATION_DATA.period} · GANDHINAGAR, INDIA
                  </div>
                  <h3 className="text-[26px] md:text-[32px] leading-[36px] font-bold tracking-[-0.02em] text-[#191919] mb-2">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="text-[18px] leading-[26px] font-medium text-[#444748]">
                    {EDUCATION_DATA.institution}
                  </p>
                </div>

                {/* CPI Monumental Tabular Readout */}
                <div className="md:col-span-4 bg-[#EFECE4] border border-[#191919] p-5 flex flex-col justify-between">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#767167]">
                    CUMULATIVE PERFORMANCE INDEX
                  </span>
                  <div className="mt-3 flex items-baseline gap-1.5 font-mono tabular-nums">
                    <span className="text-[40px] leading-[42px] font-bold text-[#191919]">
                      {EDUCATION_DATA.cpi}
                    </span>
                    <span className="text-sm text-[#767167]">
                      / {EDUCATION_DATA.cpiScale}
                    </span>
                  </div>
                </div>
              </div>

              {/* Honors & Academic Distinction Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#D8D3C8]">
                <div className="md:col-span-7 p-6 md:p-8 bg-[#EFECE4] space-y-4">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#767167]">
                    ACADEMIC &amp; COMPETITIVE HONORS
                  </div>

                  {EDUCATION_DATA.honors.map((honor) => (
                    <div
                      key={honor.title}
                      className="flex items-start gap-3.5 p-4 bg-[#F7F4EE] border border-[#191919]"
                    >
                      <span
                        className="inline-block w-2.5 h-2.5 bg-[#E53935] mt-1.5 shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-[18px] leading-[24px] font-semibold text-[#191919]">
                          {honor.title}
                        </div>
                        <div className="text-xs font-mono text-[#767167] mt-1">
                          {honor.term} · {honor.academicYear}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Domains */}
                <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#767167] mb-4">
                      KEY FOCUS AREAS
                    </div>
                    <ul className="space-y-2.5 text-sm font-mono text-[#191919]">
                      {EDUCATION_DATA.focusAreas.map((area, index) => (
                        <li key={area} className="flex items-center gap-2.5">
                          <span className="text-xs text-[#767167]">0{index + 1}.</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
