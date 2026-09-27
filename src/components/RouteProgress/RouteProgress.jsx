"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const SHOW_DELAY = 120; // skip the bar entirely for near-instant (prefetched) navigations
const MAX_DURATION = 10000; // never leave the bar stuck if a navigation is abandoned

// Top-of-viewport progress bar: starts when an internal link is clicked (or back/forward
// is used) and completes when the new route renders.
const RouteProgress = () => {
  const pathname = usePathname();
  const [state, setState] = useState("idle"); // idle | loading | done
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    const start = () => {
      clearTimers();
      timers.current.push(setTimeout(() => setState("loading"), SHOW_DELAY));
      timers.current.push(setTimeout(() => setState("idle"), MAX_DURATION));
    };

    // next/link calls preventDefault, so don't bail on defaultPrevented
    const onClick = (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target.closest?.("a[href]");
      if (!anchor || (anchor.target && anchor.target !== "_self") || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page or hash jump
      start();
    };

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", start);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", start);
      clearTimers();
    };
  }, []);

  useEffect(() => {
    clearTimers();
    setState((prev) => (prev === "loading" ? "done" : "idle"));
    timers.current.push(setTimeout(() => setState("idle"), 400));
  }, [pathname]);

  return (
    <div className={`route-progress route-progress--${state}`} aria-hidden="true">
      <span className="route-progress__bar" />
    </div>
  );
};

export default RouteProgress;
