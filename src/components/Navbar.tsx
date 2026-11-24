import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="nav__brand">{brand}</a>

        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>

        <nav aria-label="Main" className={`nav__menu ${open ? "is-open" : ""}`}>
          <ul className="nav__links">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "is-active" : ""}
                  onClick={() => setOpen(false)}
                >
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