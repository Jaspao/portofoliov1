import type { ComponentType } from "react";
import Hero from "../sections/Hero";
import About from "./About";
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
export interface Section {
  id: string;
  label: string;
  Component: ComponentType;
}

export const sections: Section[] = [
  { id: "home", label: "Home", Component: Hero },
  { id: "about", label: "About", Component: About },
  { id: "skills", label: "Skills", Component: Skills },
  { id: "projects", label: "Projects", Component: Projects },
];