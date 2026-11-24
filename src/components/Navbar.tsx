import "./Navbar.css";

interface NavLink {
  id: string;
  label: string;
}

interface NavbarProps {
  brand: string;
  links: NavLink[];
  active: string;
}

export default function Navbar({ brand, links, active }: NavbarProps) {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="nav__brand">{brand}</a>
        <nav aria-label="Main">
          <ul className="nav__links">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? "is-active" : ""}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}