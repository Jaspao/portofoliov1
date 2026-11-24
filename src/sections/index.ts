import type { ComponentType } from "react";
import Hero from "../sections/Hero";
import About from "./About";
export interface Section {
  id: string;
  label: string;
  Component: ComponentType;
}

export const sections: Section[] = [
  { id: "home", label: "Home", Component: Hero },
  { id: "about", label: "About", Component: About },
];