
import { Skill } from '@/lib/data';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  // Color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'backend':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'devops':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'other':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  // Skill level indicator
  const renderLevelIndicator = (level: number) => {
    return (
      <div className="flex space-x-[2px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              i < level ? "bg-current opacity-90" : "bg-current opacity-20"
            )}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between py-2 px-3 rounded-lg border animate-fade-in hover-lift",
        getCategoryColor(skill.category)
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <span className="font-medium">{skill.name}</span>
      <div className="ml-2">{renderLevelIndicator(skill.level)}</div>
    </div>
  );
};

export default SkillBadge;
