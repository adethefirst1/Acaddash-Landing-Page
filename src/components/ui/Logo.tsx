import Image from "next/image";

export interface LogoProps {
  variant?: "light" | "dark";
  height?: number;
  className?: string;
  priority?: boolean;
}

export function Logo({
  variant = "light",
  height = 32,
  className = "",
  priority = false,
}: LogoProps) {
  // Original SVG viewBox: 4 0 250.24 64 (aspect ratio ~ 3.91)
  const width = Math.round(height * (250.24 / 64));
  const src =
    variant === "dark"
      ? "/brand/logo_full_dark.svg"
      : "/brand/logo_full.svg";

  return (
    <Image
      src={src}
      alt="Acaddash"
      width={width}
      height={height}
      className={`inline-block h-auto w-auto ${className}`.trim()}
      style={{ height: `${height}px`, width: "auto" }}
      priority={priority}
      unoptimized
    />
  );
}

