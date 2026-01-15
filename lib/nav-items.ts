import { House, Inbox, Receipt, SettingsIcon } from "lucide-react";

export const navItems = [
  {
    title: "Home",
    icon: House,
    href: "/home",
    acceptedRoles: ["ADMIN", "MEMBER"],
  },
  {
    title: "Estimates",
    icon: Receipt,
    href: "/estimates",
    acceptedRoles: ["ADMIN"],
  },
  {
    title: "Services",
    icon: Inbox,
    href: "/projects",
    acceptedRoles: ["ADMIN", "MEMBER"],
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    href: "/settings",
    acceptedRoles: ["ADMIN", "MEMBER"],
  },
];
