import NavLink from "./NavLink/NavLink";
import { useState, useEffect, useRef } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";

import { FaPhone, FaBloggerB, FaInfo } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import ThemeToggleButton from "@/components/ThemeToggleButton/ThemeToggleButton";
const links = [
  {
    id: "home",
    name: "Home",
    path: "/",
    icon: <GoHomeFill />,
  },
  {
    id: "services",
    name: "Services",
    path: "/services",
    icon: <FaGear />,
  },
  {
    id: "specialities",
    name: "Specialities",
    path: "/specialities",
    icon: <FaGear />,
  },
  {
    id: "blog",
    name: "Blog",
    path: "/blog",
    icon: <FaBloggerB />,
  },
  {
    id: "about",
    name: "About Us",
    path: "/about",
    icon: <FaInfo />,
  },
  {
    id: "contact",
    name: "Contact Us",
    path: "/contact",
    icon: <FaPhone />,
  },
];

const Links = () => {
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuRef]);
  const handleMenuClick = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };
  const handleLinkClick = () => {
    setOpen(false);
  };
  const LinkElement = links.map((link) => {
    return <NavLink link={link} key={link.id} onClick={handleLinkClick} />;
  });
  return (
    <>
      <div className="links">{LinkElement}</div>
      <div className="menu-icon">
        {isOpen ? (
          <MdOutlineClose onClick={(e) => handleMenuClick(e)} />
        ) : (
          <MdMenu onClick={(e) => handleMenuClick(e)} />
        )}
      </div>
      {isOpen && (
        <div className="mobile-links" ref={menuRef}>
          {LinkElement}
        </div>
      )}
    </>
  );
};

export default Links;
