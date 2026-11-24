import { profile } from "../data/profile";
import "./About.css";

export default function About() {
  return (
    <div className="container about">
      <h2 className="section__title">About <span className="accent">Me</span></h2>
      {profile.about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}