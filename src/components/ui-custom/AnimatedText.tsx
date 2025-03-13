
import { useTypewriter } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  gradient?: boolean;
}

const AnimatedText = ({
  text,
  className,
  typingSpeed = 40,
  delay = 0,
  as = 'span',
  gradient = false
}: AnimatedTextProps) => {
  const { displayText, isTyping } = useTypewriter(text, typingSpeed, delay);
  
  const Component = as;
  
  return (
    <Component
      className={cn(
        "inline-block relative",
        gradient && "text-gradient",
        className
      )}
    >
      {displayText}
      {isTyping && (
        <span className="absolute ml-[2px] animate-pulse-slow">|</span>
      )}
    </Component>
  );
};

export default AnimatedText;
