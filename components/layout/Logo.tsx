import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <>
      {/* SVG filter: converts white→transparent, then invert makes black logo text white */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id="cw-logo-filter" colorInterpolationFilters="sRGB">
            {/* Make white pixels transparent: alpha = 3 - R - G - B */}
            <feColorMatrix type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                     -1 -1 -1 3 0" />
            {/* Invert RGB so black logo marks become white */}
            <feComponentTransfer>
              <feFuncR type="linear" slope="-1" intercept="1" />
              <feFuncG type="linear" slope="-1" intercept="1" />
              <feFuncB type="linear" slope="-1" intercept="1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <Image
        src="/logo.png"
        alt="ContentWhizz"
        width={1917}
        height={446}
        className={className}
        style={{ filter: "url(#cw-logo-filter)" }}
        priority
      />
    </>
  );
}
