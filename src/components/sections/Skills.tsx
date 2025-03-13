
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { skills } from '@/lib/data';
import { cn } from '@/lib/utils';
import SkillBadge from '@/components/ui-custom/SkillBadge';

const Skills = () => {
  const [headerRef, isHeaderVisible] = useFadeIn();
  const [skillsRef, isSkillsVisible] = useFadeIn(0.1);
  
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  const categoryNames = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    devops: 'DevOps & Infrastructure',
    other: 'Other Skills'
  };
  
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div 
          // @ts-ignore - ref type mismatch is fine here
          ref={headerRef}
          className={cn(
            "max-w-2xl mx-auto text-center mb-16 transition-all duration-700",
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Expertise
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          
          <p className="text-muted-foreground">
            A comprehensive showcase of my technical skills and proficiency in various programming languages, 
            frameworks, and tools that I've mastered throughout my career.
          </p>
        </div>
        
        {/* Skills grid by category */}
        <div 
          // @ts-ignore - ref type mismatch is fine here
          ref={skillsRef}
          className={cn(
            "transition-all duration-700",
            isSkillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
              <div key={category} className="space-y-6">
                <h3 className="text-xl font-semibold text-primary">
                  {categoryNames[category as keyof typeof categoryNames] || category}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <SkillBadge 
                      key={skill.name} 
                      skill={skill} 
                      index={categoryIndex * 10 + skillIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
