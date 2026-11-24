import type { Project } from "../types";
import "./ProjectCard.css";

export default function ProjectCard({ title, description, image, tags, live, repo }: Project) {
  return (
    <article className="card">
      <img className="card__img" src={image} alt={`${title} screenshot`} loading="lazy" />
      <div className="card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="card__tags">
          {tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="card__links">
          {live && <a href={live} target="_blank" rel="noreferrer">Live demo</a>}
          {repo && <a href={repo} target="_blank" rel="noreferrer">Github</a>}
        </div>
      </div>
    </article>
  );
}