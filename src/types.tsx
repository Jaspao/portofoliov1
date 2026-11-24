export type SocialIcon = "github" | "linkedin" | "instagram" | "x";

export interface Social {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface Profile {
  brand: string;
  greeting: string;
  name: string;
  rolePrefix: string;
  role: string;
  bio: string;
  photo: string;
  cv: string;
  email: string;
  socials: Social[];
  about: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}