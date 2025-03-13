
import { useEffect, useState, useRef } from 'react';

// Hook for fade in animation when element is in viewport
export function useFadeIn(threshold = 0.1, rootMargin = '0px') {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold, rootMargin }
    );
    
    const { current } = domRef;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold, rootMargin]);
  
  return [domRef, isVisible] as const;
}

// Hook for staggered animation of children
export function useStaggeredAnimation(itemCount: number, delayBetween = 0.1) {
  const delays = Array.from({ length: itemCount }, (_, i) => i * delayBetween);
  return delays;
}

// Hook for typing animation
export function useTypewriter(text: string, speed = 50, delay = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (delay > 0) {
      timer = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }
    
    function startTyping() {
      let i = 0;
      setIsTyping(true);
      
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prev => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, speed);
      
      return () => clearInterval(typingInterval);
    }
    
    return () => clearTimeout(timer);
  }, [text, speed, delay]);
  
  return { displayText, isTyping };
}

// Hook for scroll position
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return scrollPosition;
}

// Hook for parallax effect
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the viewport center
      const distanceFromCenter = elementTop - windowHeight / 2;
      
      // Apply parallax effect
      setOffset(distanceFromCenter * speed);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return [ref, offset] as const;
}
