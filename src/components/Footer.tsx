import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('landing-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#111827] text-zinc-300 border-t border-zinc-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm">
          <span className="font-display font-semibold text-white">
            {PROFILE.name}
          </span>
          <span className="text-zinc-600" aria-hidden="true">
            ·
          </span>
          <span className="text-zinc-400">
            &copy; {new Date().getFullYear()} All rights reserved
          </span>
        </div>

        <div className="flex items-center gap-5 text-sm">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.platform === 'email' ? undefined : '_blank'}
              rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
              className="text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {link.platform === 'email' ? 'Email' : link.label}
            </a>
          ))}
          <a
            href="#landing-section"
            onClick={scrollToTop}
            className="text-zinc-300 hover:text-white underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};
