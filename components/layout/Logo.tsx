import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="ContentWhizz"
      width={1917}
      height={446}
      className={className}
      style={{ filter: "invert(1)", mixBlendMode: "screen" }}
      priority
    />
  );
}
