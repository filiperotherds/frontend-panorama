import { auth, isAuthenticated } from "@/auth/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Jobble",
};

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isAuthenticated()) {
    redirect("/sign-in");
  }

  const { user } = await auth();

  if (user.accountType !== "INDIVIDUAL") {
    redirect("/home");
  }

  return <div className="">{children}</div>;
}
