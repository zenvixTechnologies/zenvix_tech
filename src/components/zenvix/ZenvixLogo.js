import Image from "next/image";

const sizes = {
  nav: "h-14 w-14 sm:h-16 sm:w-16",
  menu: "h-16 w-16",
  footer: "h-28 w-28 md:h-32 md:w-32",
};

/**
 * The logo PNG is a 1024² canvas with generous transparent padding;
 * scaling inside a clipped box keeps the mark crisp and properly sized.
 */
export default function ZenvixLogo({ placement = "nav", className = "", priority = false }) {
  return (
    <span className={`relative block overflow-hidden ${sizes[placement]} ${className}`}>
      <Image
        alt="Zenvix logo"
        className="scale-[1.42] object-contain"
        draggable="false"
        fill
        priority={priority}
        sizes="(max-width: 768px) 96px, 128px"
        src="/zenvix/logo.png"
      />
    </span>
  );
}
