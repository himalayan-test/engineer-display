
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import { useEffect } from 'react';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (
        anchor && 
        anchor.href.includes('#') && 
        anchor.href.split('#')[0] === window.location.href.split('#')[0]
      ) {
        e.preventDefault();
        const id = anchor.href.split('#')[1];
        const element = document.getElementById(id);
        
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 80,
          });
          
          // Update URL without triggering a page reload
          window.history.pushState(null, '', `#${id}`);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  // Scroll to hash on initial load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 80,
          });
        }, 500);
      }
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
