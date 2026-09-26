"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiArrowRight, PiList, PiX } from "react-icons/pi";
import NavLink from "./Links/NavLink/NavLink";
import Logo from "@/components/Logo/Logo";
import ThemeToggleButton from "@/components/ThemeToggleButton/ThemeToggleButton";
import { navLinks, siteConfig } from "@/lib/siteConfig";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "") + (isOpen ? " menu-open" : "")}>
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label={`${siteConfig.name} home`}>
          <Logo />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink link={link} key={link.id} />
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggleButton />
          <Link href="/contact" className="btn site-header__cta">
            Book a revenue review
          </Link>
          <button
            type="button"
            className="menu-button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {isOpen ? <PiX /> : <PiList />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!isOpen}>
        <div className="container mobile-menu__inner">
          <nav aria-label="Mobile">
            <ol className="mobile-menu__links">
              {[...navLinks, { id: "contact", name: "Contact", path: "/contact" }].map((link, i) => (
                <li key={link.id}>
                  <NavLink link={link} className="mobile-menu__link">
                    <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ol>
          </nav>
          <div className="mobile-menu__footer">
            <Link href="/contact" className="btn btn--lg btn--block">
              Book a revenue review <PiArrowRight />
            </Link>
            <div className="mobile-menu__contact">
              {siteConfig.contact.phone && <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>}
              {siteConfig.contact.email && (
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
