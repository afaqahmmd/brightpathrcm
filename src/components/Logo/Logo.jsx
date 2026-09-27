import Image from "next/image";

// BrightPathRCM mark: a rising path ending in a point of light.
const Logo = ({ className = "" }) => {
  return (
    <Image
      src="/logo.jpeg"
      alt="BrightPath RCM Logo"
      width={230}
      height={67}
      className={`logo ${className}`}
    />
  );
};

export default Logo;
