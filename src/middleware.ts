export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/security-settings/:path*",
    "/billing/:path*",
    "/integrations/:path*",
    "/fleet/:path*",
    "/missions/:path*",
    "/operations/:path*",
  ],
};
