import type { Profile } from "../types";

export const profile: Profile = {
  brand: "Portfolio.",
  greeting: "Hello, It's Me",
  name: "Your Name",
  rolePrefix: "And I'm a",
  role: "Frontend Developer",
  bio: "Write two sentences about what you build and what you care about.",
  photo: "/profile.jpg",
  cv: "/cv.pdf",
  email: "you@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Jaspao", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: "linkedin" },
    { label: "Instagram", href: "https://instagram.com/your-username", icon: "instagram" },
  ],
};