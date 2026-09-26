"use client";
import { useEffect, useState } from "react";
import { PiMoon, PiSun } from "react-icons/pi";

// The initial theme is applied before paint by the inline script in app/layout.js.
const ThemeToggleButton = ({ className = "" }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("bp-theme", next);
    } catch (e) {}
    setTheme(next);
  };

  if (theme === null) return <span className={`theme-toggle ${className}`} aria-hidden="true" />;

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? <PiSun /> : <PiMoon />}
    </button>
  );
};

export default ThemeToggleButton;
