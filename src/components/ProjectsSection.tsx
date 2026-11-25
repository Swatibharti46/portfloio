import React, { useState } from 'react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects-section"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium text-[#2563EB] tracking-tight mb-2">
              Selected Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 [text-wrap:balance]">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-md">
            Four engineering case studies spanning design token systems, real-time browser audio, geospatial telemetry, and digital publishing.
          </p>
        </div>

        {/* 2x2 Grid of Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(item) => setSelectedProject(item)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
