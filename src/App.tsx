import Navbar from "./components/Navbar";
import useActiveSection from "./hooks/useActiveSection";
import { profile } from "./data/profile";
import { sections } from "./sections";

const ids = sections.map((s) => s.id);

export default function App() {
  const active = useActiveSection(ids);

  return (
    <>
      <Navbar brand={profile.brand} links={sections} active={active} />
      <main>
        {sections.map(({ id, Component }) => (
          <section key={id} id={id} className="section">
            <Component />
          </section>
        ))}
      </main>
    </>
  );
}