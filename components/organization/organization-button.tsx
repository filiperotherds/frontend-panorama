import { ChevronRight } from "lucide-react";
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { getOrganization } from "@/http/get-organization";

function getInitials(name: string): string {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return initials;
}

export async function OrganizationButton() {
  const membership = await getOrganization();

  const organization = membership.organization;

  if (!organization) {
    return (
      <Link href="/create-organization" className="w-full">
        <div className="w-full p-3 flex items-center justify-between outline-none border-l border-b border-border rounded-lg shadow-xs">
          <div className="flex flex-row items-center justify-center gap-3">
            <IconRosetteDiscountCheckFilled className="text-blue-500" />

            <div className="flex flex-col items-start">
              <span className="text-primary text-sm font-semibold">
                Create your Organization
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                Let&apos;s get started your organization settings
              </span>
            </div>
          </div>

          <ChevronRight className="size-4 text-muted-foreground" />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/organization/settings" className="w-full">
      <div className="w-full p-2 flex items-center justify-between outline-none rounded-md">
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="p-[2px] rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]">
            <div className="p-[2px] bg-white rounded-full">
              <Avatar>
                {organization?.avatarUrl && (
                  <AvatarImage src={organization.avatarUrl} />
                )}
                {organization?.name && (
                  <AvatarFallback className="bg-theme-primary">
                    {getInitials(organization.name)}
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold">{organization?.name}</span>
            <span className="text-xs font-medium text-muted-foreground">
              {membership.role === "ADMIN" ? "Proprietário" : "Membro"}
            </span>
          </div>
        </div>

        <ChevronRight className="size-4 text-muted-foreground" />
      </div>
    </Link>
  );
}
