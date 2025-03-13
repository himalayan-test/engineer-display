
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { useFadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();
  const [containerRef, isVisible] = useFadeIn();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div 
        // @ts-ignore - ref type mismatch is fine here
        ref={containerRef}
        className={cn(
          "max-w-md w-full text-center p-8 transition-all duration-700",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
        
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <ArrowLeftIcon size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
