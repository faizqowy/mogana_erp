import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()

  // dummy session role
  const role = "doctor"

  const allowedRoles = ["superuser", "doctor", "staff"]

  // User visits /dashboard
  if (url.pathname === "/dashboard" || url.pathname === "/dashboard/") {
    url.pathname = `/dashboard/${role}`
    return NextResponse.redirect(url)
  }

  // User visits /dashboard/something
  const parts = url.pathname.split("/").filter(Boolean)
  
  if (parts[0] === "dashboard") {
    const requestedRole = parts[1]

    // If user tries to access a role that is not valid
    if (requestedRole && !allowedRoles.includes(requestedRole)) {
      url.pathname = `/dashboard/${role}`
      return NextResponse.redirect(url)
    }

    // If user tries to open another role dashboard
    if (requestedRole && requestedRole !== role) {
      url.pathname = `/dashboard/${role}`
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
