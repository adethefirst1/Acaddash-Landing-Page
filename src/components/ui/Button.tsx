import Link from "next/link";
import clsx from "clsx";
import React from "react";

export type ButtonVariant = "primary" | "ghost" | "teal";
export type ButtonSize = "md" | "sm";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

export type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

export type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full select-none " +
    "transition-all duration-200 ease-out cursor-pointer " +
    "hover:-translate-y-[2px] active:translate-y-0 active:shadow-sm " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-navy text-white hover:bg-navy-deep hover:shadow-[0_4px_14px_rgba(20,45,70,0.18)]",
    ghost:
      "bg-transparent text-navy hover:bg-tint hover:shadow-sm",
    teal:
      "bg-teal-bright text-ink hover:brightness-105 hover:shadow-[0_4px_14px_rgba(76,195,187,0.3)]",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    md: "px-5 py-2.5 text-sm leading-none",
    sm: "px-4 py-2 text-xs leading-none font-semibold",
  };

  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
