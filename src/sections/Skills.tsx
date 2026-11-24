import { skills } from "../data/Skills";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="container">
      <h2 className="section__title">My <span className="accent">Skills</span></h2>
      <div className="skills">
        {skills.map(({ group, items }) => (
          <div className="skills__group" key={group}>
            <h3>{group}</h3>
            <ul>
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}