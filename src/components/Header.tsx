import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Globe, Mail } from 'lucide-react';
import { NAV_LINKS, PROFILE, SOCIAL_LINKS, SocialLink } from '../data/portfolioData';

const renderSocialIcon = (platform: SocialLink['platform']) => {
  switch (platform) {
    case 'github':
      return <Github className="w-4 h-4" aria-hidden="true" />;
    case 'linkedin':
      return <Linkedin className="w-4 h-4" aria-hidden="true" />;
    case 'dribbble':
      return <Globe className="w-4 h-4" aria-hidden="true" />;
    case 'email':
      return <Mail className="w-4 h-4" aria-hidden="true" />;
  }
};

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 40) {
          setIsVisible(true);
        } else if (currentScrollY > prevScrollY.current + 4 && currentScrollY > 80) {
          setIsVisible(false);
        } else if (currentScrollY < prevScrollY.current - 4) {
          setIsVisible(true);
        }

        prevScrollY.current = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInternalClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-16 bg-[#F8F9FA]/92 backdrop-blur-md border-b border-zinc-200 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#landing-section"
          onClick={(e) => handleInternalClick(e, 'landing-section')}
          className="font-display text-base sm:text-lg font-semibold tracking-tight text-zinc-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
        >
          {PROFILE.name}
        </a>

        {/* Zone 2: Internal Smooth-Scroll Navigation Links */}
        <nav
          aria-label="Primary section navigation"
          className="flex items-center gap-4 sm:gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.targetId}`}
              onClick={(e) => handleInternalClick(e, link.targetId)}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 underline-offset-4 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: External Social Links */}
        <nav
          aria-label="Social media profiles"
          className="flex items-center gap-1 sm:gap-2 shrink-0"
        >
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target={social.platform === 'email' ? undefined : '_blank'}
              rel={social.platform === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={social.label}
              title={social.label}
              className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-zinc-600 hover:text-[#2563EB] hover:bg-zinc-200/60 transition-colors duration-150 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              {renderSocialIcon(social.platform)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
