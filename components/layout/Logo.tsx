export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ContentWhizz"
    >
      {/* C mark — stacked horizontal bars */}
      <rect x="0" y="4"  width="26" height="7" rx="1" fill="currentColor" />
      <rect x="0" y="16" width="18" height="7" rx="1" fill="currentColor" />
      <rect x="0" y="28" width="18" height="7" rx="1" fill="currentColor" />
      <rect x="0" y="40" width="18" height="7" rx="1" fill="currentColor" />
      <rect x="0" y="52" width="26" height="7" rx="1" fill="currentColor" />

      {/* W mark — three vertical bars forming a W */}
      <rect x="34" y="4"  width="7" height="58" rx="1" fill="currentColor" />
      <rect x="47" y="28" width="7" height="34" rx="1" fill="currentColor" />
      <rect x="60" y="4"  width="7" height="58" rx="1" fill="currentColor" />

      {/* CONTENTWHIZZ wordmark */}
      <text
        x="84"
        y="42"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="500"
        fontSize="22"
        letterSpacing="3"
        fill="currentColor"
      >
        CONTENTWHIZZ
      </text>
    </svg>
  );
}
