import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Layers, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200 rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.year}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 mb-6">
            {!imgError ? (
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-600">
                <Layers className="w-10 h-10 mb-2 text-zinc-400" aria-hidden="true" />
                <span className="font-display text-xl font-medium text-zinc-800">
                  {project.title}
                </span>
              </div>
            )}
          </div>

          <h3
            id="project-modal-title"
            className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900"
          >
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-zinc-500">{project.stack}</p>

          <p className="mt-4 text-base text-zinc-700 leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="mt-6 pt-6 border-t border-zinc-200">
            <h4 className="text-sm font-semibold text-zinc-900 mb-3">
              Engineering Highlights
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5">
                  <span className="text-[#2563EB] font-semibold" aria-hidden="true">
                    —
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-5 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-zinc-500 block">
                Measured Outcome
              </span>
              <span className="text-sm font-semibold text-zinc-900">
                {project.outcome}
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-sm font-medium text-zinc-800 hover:border-zinc-900 transition-colors whitespace-nowrap shrink-0"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>Source Code</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#111827] text-white text-sm font-medium hover:bg-[#2563EB] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
