import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);
    return (
    <header className="nav" ref={ref}>
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