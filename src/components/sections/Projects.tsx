
import { useState } from 'react';
import { useFadeIn } from '@/lib/animations';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ui-custom/ProjectCard';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [headerRef, isHeaderVisible] = useFadeIn();
  
  const filteredProjects = filter 
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;
  
  // Get unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();
  
  return (
    <section id="projects" className="py-24">
      <div className="container">
        {/* Header */}
        <div 
          // @ts-ignore - ref type mismatch is fine here
          ref={headerRef}
          className={cn(
            "max-w-2xl mx-auto text-center mb-16 transition-all duration-700",
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          
          <p className="text-muted-foreground mb-8">
            A collection of projects that showcase my skills and experience in software development.
            Each project reflects my ability to solve complex problems and work with different technologies.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <button
              onClick={() => setFilter(null)}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-colors",
                !filter ? "bg-primary text-white" : "bg-secondary hover:bg-secondary/70"
              )}
            >
              All
            </button>
            
            {allTechnologies.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech === filter ? null : tech)}
                className={cn(
                  "px-3 py-1 text-sm rounded-full transition-colors",
                  filter === tech ? "bg-primary text-white" : "bg-secondary hover:bg-secondary/70"
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
        
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found with the selected technology.
            </p>
            <button
              onClick={() => setFilter(null)}
              className="mt-4 text-primary hover:underline"
            >
              View all projects
            </button>
          </div>
        )}
        
        {/* View more projects button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors"
          >
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
