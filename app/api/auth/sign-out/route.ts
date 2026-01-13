import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectUrl = new URL(request.nextUrl);

  redirectUrl.pathname = "/sign-in";

  (await cookies()).delete("token");

  return NextResponse.redirect(redirectUrl);
}
