import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="container">
      <h2 className="section__title">My <span className="accent">Projects</span></h2>
      <div className="projects">
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </div>
  );
}