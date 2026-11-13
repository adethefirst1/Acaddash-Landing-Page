export const APP_URL = "#download";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Calculator", href: "#calculator" },
  { label: "Simulator", href: "#simulator" },
  { label: "Planner", href: "#planner" },
  { label: "Advisor", href: "#advisor" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Contact", href: "mailto:support@acaddash.com" },
];
