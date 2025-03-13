
import { ArrowDownIcon } from 'lucide-react';
import { useFadeIn } from '@/lib/animations';
import AnimatedText from '@/components/ui-custom/AnimatedText';
import { about } from '@/lib/data';

const Hero = () => {
  const [containerRef, isContainerVisible] = useFadeIn();
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div 
        // @ts-ignore - ref type mismatch is fine here
        ref={containerRef} 
        className="container flex flex-col items-center text-center space-y-8"
      >
        {/* Subtitle */}
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <span>Hello, I'm {about.name.split(' ')[0]}</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight md:leading-tight tracking-tight max-w-3xl">
          <AnimatedText
            text={`${about.name} —`}
            as="span"
            typingSpeed={60}
            className="block mb-2"
          />
          <AnimatedText
            text={about.title}
            as="span"
            typingSpeed={60}
            delay={1500}
            gradient
            className="block"
          />
        </h1>
        
        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "600ms" }}>
          {about.summary}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "900ms" }}>
          <a 
            href="#projects" 
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/70 transition-colors border border-border"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium mb-2">Scroll</span>
          <ArrowDownIcon size={16} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
