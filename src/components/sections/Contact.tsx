
import { useState } from 'react';
import { useFadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon } from 'lucide-react';
import { about } from '@/lib/data';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [leftColRef, isLeftColVisible] = useFadeIn();
  const [rightColRef, isRightColVisible] = useFadeIn(0.1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left column - Contact info */}
            <div 
              // @ts-ignore - ref type mismatch is fine here
              ref={leftColRef}
              className={cn(
                "w-full md:w-2/5 transition-all duration-700",
                isLeftColVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Get In Touch
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
              
              <p className="text-muted-foreground mb-8">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs my expertise or if you're looking 
                to hire a software engineer, please don't hesitate to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MailIcon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Email</h3>
                    <a href={`mailto:${about.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {about.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <LinkedinIcon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">LinkedIn</h3>
                    <a 
                      href={about.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GithubIcon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">GitHub</h3>
                    <a 
                      href={about.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Contact form */}
            <div 
              // @ts-ignore - ref type mismatch is fine here
              ref={rightColRef}
              className={cn(
                "w-full md:w-3/5 transition-all duration-700 delay-300",
                isRightColVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
                
                {isSubmitted ? (
                  <div className="p-6 bg-green-50 rounded-lg border border-green-100 text-center">
                    <h4 className="text-green-800 font-medium mb-2">Message sent successfully!</h4>
                    <p className="text-green-700 text-sm">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                        placeholder="Your message"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full py-3 px-4 bg-primary text-white font-medium rounded-md transition-all",
                        isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
                      )}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <SendIcon size={16} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
