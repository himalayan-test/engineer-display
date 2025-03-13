
import { useFadeIn } from '@/lib/animations';
import { about, experiences } from '@/lib/data';
import { cn } from '@/lib/utils';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';

const About = () => {
  const [leftColRef, isLeftColVisible] = useFadeIn();
  const [rightColRef, isRightColVisible] = useFadeIn(0.1, '30px');
  
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column - Image and Basic Info */}
          <div 
            // @ts-ignore - ref type mismatch is fine here
            ref={leftColRef}
            className={cn(
              "w-full md:w-2/5 transition-all duration-700",
              isLeftColVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="relative">
              {/* Image with decorative elements */}
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img 
                  src={about.image} 
                  alt={about.name} 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              
              {/* Decorative pattern */}
              <div className="absolute top-6 -left-6 w-full h-full border-2 border-primary rounded-lg -z-10" />
            </div>
            
            {/* Experience timeline */}
            <div className="mt-12 space-y-6">
              <h3 className="text-xl font-bold">Professional Experience</h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 pb-6 border-l-2 border-muted last:border-l-transparent"
                  >
                    {/* Circle marker */}
                    <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-primary" />
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon size={14} className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      
                      <h4 className="font-semibold">{exp.position}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - About Text */}
          <div 
            // @ts-ignore - ref type mismatch is fine here
            ref={rightColRef}
            className={cn(
              "w-full md:w-3/5 transition-all duration-700 delay-300",
              isRightColVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              Passionate Software Engineer with a focus on creating exceptional digital experiences
            </h2>
            
            <div className="prose text-muted-foreground max-w-none mb-8">
              {about.longDescription.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            {/* Skills highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-3">Frontend Development</h3>
                <p className="text-sm text-muted-foreground">
                  Building responsive and intuitive user interfaces using modern JavaScript frameworks.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-3">Backend Development</h3>
                <p className="text-sm text-muted-foreground">
                  Creating scalable and secure server-side applications and APIs.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-3">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Fine-tuning applications for maximum speed and efficiency.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-3">DevOps & CI/CD</h3>
                <p className="text-sm text-muted-foreground">
                  Implementing automated workflows for continuous integration and deployment.
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex gap-4 mt-8">
              <a 
                href={about.resume} 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BriefcaseIcon size={16} className="mr-2" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
