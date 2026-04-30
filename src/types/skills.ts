export type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
};

export type Category = {
  id: string;
  label: string;
  emoji: string;
  skills: Skill[];
};

export interface SkillCardProps{
    skill: Skill;
    index: number;
}

export interface AnimatedBarProps {
    level: number;
    color: string;
    delay: number;
}

export type Stats = {
    num: string;
    label: string;
}