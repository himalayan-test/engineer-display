
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/lib/animations';
import { GithubIcon, LinkedinIcon, MenuIcon, XIcon } from 'lucide-react';
import { about } from '@/lib/data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 10;
  
  // Close menu when clicking outside or on mobile link
  useEffect(() => {
    const handleClickOutside = () => setIsMenuOpen(false);
    
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];
  
  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-xl font-semibold tracking-tight text-gradient"
        >
          {about.name.split(' ')[0]}
          <span className="hidden sm:inline">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-3">
            <a 
              href={about.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href={about.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="p-2 md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 flex flex-col p-8 pt-24 space-y-8 transform transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <ul className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center space-x-6 pt-4 border-t">
          <a 
            href={about.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={24} />
          </a>
          <a 
            href={about.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
