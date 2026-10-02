type BrandMarkProps = {
  className?: string;
};

/**
 * Winner Tech monogram — W only.
 * Dual-chevron construction from the original blue-field logo,
 * stripped to a pure mark (currentColor, any surface).
 */
export function BrandMark({ className = "h-8 w-8" }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left chevron */}
      <path
        d="M8 14 L24 52 L33.5 28"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right chevron — slight overlap at the center peak */}
      <path
        d="M30.5 28 L40 52 L56 14"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
