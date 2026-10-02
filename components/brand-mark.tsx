import { W_MARK_PATH, W_MARK_VIEWBOX } from "@/lib/brand";

type BrandMarkProps = {
  className?: string;
};

/** Winner Tech "W" — official logo, traced to vector. Uses currentColor. */
export function BrandMark({ className = "h-8 w-8" }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox={W_MARK_VIEWBOX}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d={W_MARK_PATH} />
    </svg>
  );
}
