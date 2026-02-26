import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const AUTH_SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET ?? "fallback-dev-secret-change-in-production"
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Allow the login page through (no auth needed to reach it)
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get("modo_admin")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    await jwtVerify(token, AUTH_SECRET);
    return NextResponse.next();
  } catch {
    // Token expired or invalid
    const response = NextResponse.redirect(new URL("/admin/login", request.url));
    response.cookies.delete("modo_admin");
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
