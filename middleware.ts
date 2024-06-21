import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a route matcher for public routes (e.g., all API routes)
const isPublicRoute = createRouteMatcher(["/api/:path*"]);

export default clerkMiddleware((auth, req) => {
  // If the request does not match a public route, enforce authentication
  if (!isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  // Define which routes the middleware should apply to
  matcher: [
    "/((?!.*\\..*|_next).*)", // Matches all routes except those containing a dot (.) or _next
    "/", // Matches the root route
    "/(api|trpc)(.*)", // Matches any routes under /api or /trpc
  ],
};
