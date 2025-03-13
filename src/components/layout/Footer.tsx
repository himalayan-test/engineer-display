
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { about } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-gradient">
            {about.name.split(' ')[0]}.
          </h2>
          <p className="text-muted-foreground max-w-xs">
            Software engineer focused on creating elegant solutions to complex problems.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Navigation
          </h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <MapPinIcon size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">{about.location}</span>
            </li>
            <li className="flex items-center space-x-3">
              <MailIcon size={16} className="text-muted-foreground" />
              <a 
                href={`mailto:${about.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {about.email}
              </a>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Social
          </h3>
          <div className="flex items-center space-x-4">
            <a 
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mt-16 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {about.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
            Designed and built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
