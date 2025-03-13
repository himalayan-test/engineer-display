import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date using the specified format
 */
export function formatDate(date: Date, format: string = 'PP'): string {
  return format ? format : new Intl.DateTimeFormat('en-US').format(date);
}

/**
 * Generates META tags for better SEO
 */
export function generateMetaTags(title: string, description: string, imageUrl?: string) {
  const head = document.head;
  
  // Title
  const titleTag = document.createElement('title');
  titleTag.textContent = title;
  head.appendChild(titleTag);
  
  // Description
  const descTag = document.createElement('meta');
  descTag.setAttribute('name', 'description');
  descTag.setAttribute('content', description);
  head.appendChild(descTag);
  
  // Open Graph tags
  if (imageUrl) {
    const ogImageTag = document.createElement('meta');
    ogImageTag.setAttribute('property', 'og:image');
    ogImageTag.setAttribute('content', imageUrl);
    head.appendChild(ogImageTag);
  }
  
  const ogTitleTag = document.createElement('meta');
  ogTitleTag.setAttribute('property', 'og:title');
  ogTitleTag.setAttribute('content', title);
  head.appendChild(ogTitleTag);
  
  const ogDescTag = document.createElement('meta');
  ogDescTag.setAttribute('property', 'og:description');
  ogDescTag.setAttribute('content', description);
  head.appendChild(ogDescTag);
}
