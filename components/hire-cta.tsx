type HireCtaProps = {
  href: string;
  label: string;
};

export function HireCta({ href, label }: HireCtaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
    >
      {label}
    </a>
  );
}
