"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { navItems } from "@/lib/nav-items";

export default function MobileNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full px-8 py-4 flex items-center justify-center bg-background md:hidden">
      <div className="w-full flex flex-row items-center justify-between gap-8">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex-1">
            <div
              className={`flex flex-col items-center justify-end gap-0.5 ${pathname === item.href
                ? "text-primary"
                : "text-muted-foreground"
                }`}
            >
              <item.icon className="size-6" />
              <span className="text-xs font-semibold">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
