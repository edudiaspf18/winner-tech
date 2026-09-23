type BrandMarkProps = {
  className?: string;
};

/** Geometric W — white mark, no blue field. */
export function BrandMark({ className = "h-8 w-8" }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 12 L18 52 L32 28 L46 52 L58 12 L48 12 L40 36 L32 20 L24 36 L16 12 Z"
        fill="currentColor"
      />
    </svg>
  );
}
