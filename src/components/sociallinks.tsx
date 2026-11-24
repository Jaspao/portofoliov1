import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import type { Social, SocialIcon } from "../types";
import "./sociallinks.css";


const icons: Record<SocialIcon, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  x: FaXTwitter,
};

export default function SocialLinks({ items }: { items: Social[] }) {
  return (
    <ul className="socials">
      {items.map(({ label, href, icon }) => {
        const Icon = icons[icon];
        return (
          <li key={label}>
            <a href={href} aria-label={label} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}