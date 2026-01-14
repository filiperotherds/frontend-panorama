import { isAuthenticated } from "@/auth/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Auth - Rabbit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (await isAuthenticated()) {
    redirect("/organization/dashboard");
  }

  return <div className="bg-background">{children}</div>;
}
