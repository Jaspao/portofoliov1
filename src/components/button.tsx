import type { AnchorHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export default function Button({ href, children, ...rest }: ButtonProps) {
  return (
    <a className="btn" href={href} {...rest}>
      {children}
    </a>
  );
}