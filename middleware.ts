import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  try {
    // Get the token from the request
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    const { pathname } = request.nextUrl

    // Allow requests to auth routes
    if (pathname.startsWith("/api/auth")) {
      return NextResponse.next()
    }

    // Check if user is trying to access dashboard routes
    if (pathname.startsWith("/dashboard")) {
      // If no token, redirect to login
      if (!token) {
        const url = new URL("/", request.url)
        return NextResponse.redirect(url)
      }
    }

    // If user is authenticated and trying to access login page, redirect to dashboard
    if (pathname === "/" && token) {
      const url = new URL("/dashboard", request.url)
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
