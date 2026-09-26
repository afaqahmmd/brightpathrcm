// BrightPathRCM mark: a rising path ending in a point of light.
const Logo = ({ className = "" }) => {
  return (
    <span className={`logo ${className}`}>
      <svg className="logo-mark" viewBox="0 0 36 36" aria-hidden="true" focusable="false">
        <rect x="0.75" y="0.75" width="34.5" height="34.5" rx="8" className="logo-mark-bg" />
        <path
          d="M8 27c6.5 0 6-9 11-9 4 0 5-4.5 8-8.5"
          fill="none"
          stroke="#F26B1D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="27.5" cy="9" r="2.8" fill="#FFFFFF" />
      </svg>
      <span className="logo-word">
        BrightPath<span className="logo-rcm">RCM</span>
      </span>
    </span>
  );
};

export default Logo;
