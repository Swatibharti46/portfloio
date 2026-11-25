import React, { useState } from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const LandingSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="landing-section"
      className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Identity, Headline, Bio, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-[#2563EB] tracking-tight mb-4">
                {PROFILE.role} · {PROFILE.location}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-zinc-900 leading-[1.08] [text-wrap:balance] max-w-2xl">
                {PROFILE.headline}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                Hello, I&apos;m <strong className="font-semibold text-zinc-900">{PROFILE.name}</strong>.{' '}
                {PROFILE.bio}
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects-section')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#111827] text-white text-sm font-medium hover:bg-[#2563EB] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                <span>View Featured Projects</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contactme-section')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm font-medium hover:border-zinc-900 hover:text-zinc-900 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Studio Avatar Portrait */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="w-full bg-white border border-zinc-200 rounded-2xl p-3 flex flex-col">
              <div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-[280px] rounded-xl overflow-hidden bg-zinc-100">
                {!imgError ? (
                  <img
                    src={PROFILE.avatarSrc}
                    alt={PROFILE.avatarAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-700 p-6 text-center">
                    <span className="font-display text-4xl font-semibold tracking-tight">
                      CH
                    </span>
                    <span className="mt-2 text-sm text-zinc-500">{PROFILE.name}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metrics Row Below Split */}
        <div className="mt-12 pt-8 border-t border-zinc-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-semibold text-zinc-900 tabular-nums tracking-tight">
                {metric.value}
              </span>
              <span className="mt-1 text-sm text-zinc-500">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
