import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col transition-colors duration-200 hover:border-zinc-300">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="text-left flex flex-col h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB]"
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100 border-b border-zinc-200">
          {!imgError ? (
            <img
              src={project.imageSrc}
              alt={project.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-600 p-6 text-center">
              <Layers className="w-8 h-8 mb-2 text-zinc-400" aria-hidden="true" />
              <span className="font-display text-lg font-medium text-zinc-800">
                {project.title}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{project.stack}</span>
            </div>

            <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 group-hover:text-[#2563EB] transition-colors duration-150">
              {project.title}
            </h3>

            <p className="mt-2.5 text-sm sm:text-[15px] text-zinc-600 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-sm font-medium text-zinc-900">
            <span>See project details</span>
            <ArrowUpRight
              className="w-4 h-4 text-zinc-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2563EB]"
              aria-hidden="true"
            />
          </div>
        </div>
      </button>
    </article>
  );
};
