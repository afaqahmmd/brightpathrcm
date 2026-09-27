"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link, onClick, className = "nav-link", children }) => {
  const pathname = usePathname();
  const isActive = pathname === link.path || pathname.startsWith(link.path + "/");

  return (
    <Link
      href={link.href || link.path}
      className={className + (isActive ? " active" : "")}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
    >
      {children || link.name}
    </Link>
  );
};

export default NavLink;
