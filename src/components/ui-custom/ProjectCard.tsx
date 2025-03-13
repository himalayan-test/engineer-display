
import { useState } from 'react';
import { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
import { useFadeIn } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isVisible] = useFadeIn(0.1);
  
  const isEven = index % 2 === 0;
  
  return (
    <div 
      // @ts-ignore - ref type mismatch is fine here
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-500 hover-lift",
        isVisible ? "opacity-100" : "opacity-0 translate-y-10",
        isEven ? "animate-slide-in-left" : "animate-slide-in-right"
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
          loading="lazy"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity duration-500",
          isHovered ? "opacity-90" : "opacity-70"
        )} />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className={cn(
          "text-xl font-bold mb-2 transition-transform duration-500",
          isHovered ? "translate-y-0" : "translate-y-0"
        )}>
          {project.title}
        </h3>
        
        <p className={cn(
          "text-sm text-white/90 mb-4 line-clamp-2 transition-all duration-500",
          isHovered ? "opacity-100 max-h-20" : "opacity-90 max-h-20"
        )}>
          {project.description}
        </p>
        
        {/* Tech stack */}
        <div className={cn(
          "flex flex-wrap gap-2 mb-4 transition-all duration-500",
          isHovered ? "opacity-100 translate-y-0" : "opacity-80 translate-y-4"
        )}>
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-full"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        
        {/* Links */}
        <div className={cn(
          "flex space-x-4 transition-all duration-500",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              aria-label="View GitHub Repository"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLinkIcon size={16} />
            </a>
          )}
        </div>
      </div>
      
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <div className="text-xs py-1 px-2 rounded-full bg-primary text-white font-medium">
            Featured
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
