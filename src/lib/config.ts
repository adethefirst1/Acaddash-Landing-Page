export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "#download";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Calculator", href: "/#calculator" },
  { label: "Simulator", href: "/#simulator" },
  { label: "Planner", href: "/#planner" },
  { label: "Advisor", href: "/#advisor" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];
