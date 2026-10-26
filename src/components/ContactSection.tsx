import React, { useState } from 'react';
import { CONTACT_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(CONTACT_DATA.emailPlaceholder);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#F7F4EE] border-b-2 border-[#191919]"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 xl:px-16 py-24 md:py-36 lg:py-44">
        {/* Section Index Kicker */}
        <div className="flex items-center gap-3 text-xs font-mono font-semibold uppercase tracking-[0.08em] text-[#E53935] mb-6">
          <span className="inline-block w-2.5 h-2.5 bg-[#E53935]" aria-hidden="true" />
          <span>05. Direct Channel &amp; Correspondence</span>
        </div>

        {/* Asymmetric Monumental Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left 7 Columns: Monumental Heading & Primary Email Action */}
          <div className="lg:col-span-7">
            <h2
              id="contact-heading"
              className="text-[44px] leading-[48px] md:text-[64px] md:leading-[66px] xl:text-[76px] xl:leading-[76px] font-bold tracking-[-0.03em] text-[#191919] mb-8"
              style={{ textWrap: 'balance' }}
            >
              {CONTACT_DATA.heading}
            </h2>

            <p className="text-[17px] md:text-[19px] leading-[30px] text-[#444748] max-w-xl mb-12">
              {CONTACT_DATA.subcopy}
            </p>

            {/* High-Visibility Email Module */}
            <div className="border-2 border-[#191919] bg-[#EFECE4] p-6 md:p-8">
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#D8D3C8]">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-[#767167]">
                  PRIMARY EMAIL ADDRESS (PLACEHOLDER)
                </span>
                <span className="inline-block w-2 h-2 bg-[#E53935]" aria-hidden="true" />
              </div>

              <a
                href={CONTACT_DATA.emailHref}
                className="block text-[22px] sm:text-[28px] md:text-[34px] leading-[38px] font-mono font-bold text-[#191919] hover:text-[#E53935] transition-colors break-all mb-6"
              >
                {CONTACT_DATA.emailPlaceholder}
              </a>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT_DATA.emailHref}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#E53935] text-white text-xs font-mono font-semibold uppercase tracking-[0.08em] border border-[#191919] hover:bg-[#191919] hover:text-[#F7F4EE] transition-colors whitespace-nowrap shrink-0 swiss-hard-offset"
                >
                  <span>Send Email</span>
                  <span aria-hidden="true">→</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 bg-[#F7F4EE] text-[#191919] text-xs font-mono font-semibold uppercase tracking-[0.08em] border border-[#191919] hover:bg-[#191919] hover:text-[#F7F4EE] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>
                    {copied
                      ? `Copied: ${CONTACT_DATA.emailPlaceholder}`
                      : 'Copy Email Address'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Direct Profiles Matrix (GitHub & LinkedIn) */}
          <div className="lg:col-span-5 lg:pt-4">
            <div className="border-t-2 border-[#191919]">
              <div className="py-4 border-b border-[#D8D3C8] flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.08em] text-[#191919]">
                  EXTERNAL PROFILES &amp; REPOSITORIES
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#767167]">
                  PLACEHOLDER URLS
                </span>
              </div>

              <div className="divide-y divide-[#D8D3C8]">
                {CONTACT_DATA.links.map((link, index) => (
                  <a
                    key={link.platform}
                    href={link.hrefPlaceholder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-6 px-4 -mx-4 flex items-center justify-between gap-4 hover:bg-[#191919] hover:text-[#F7F4EE] transition-colors"
                  >
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#767167] group-hover:text-[#D8D3C8] mb-1">
                        0{index + 1} · {link.platform}
                      </div>
                      <div className="text-[22px] leading-[28px] font-semibold text-[#191919] group-hover:text-[#F7F4EE]">
                        {link.platform}
                      </div>
                      <div className="text-xs font-mono text-[#767167] group-hover:text-[#D8D3C8] mt-1">
                        {link.handlePlaceholder}
                      </div>
                    </div>

                    <span
                      className="text-xl font-mono text-[#191919] group-hover:text-[#E53935] transition-colors shrink-0"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
