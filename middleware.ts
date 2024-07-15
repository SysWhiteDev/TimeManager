import { auth } from "@/auth"

const unauthrizedRoutes = ["/auth/signin"]

export default auth((req) => {
    if (!unauthrizedRoutes.includes(req.nextUrl.pathname) && !req.auth) {
        const newUrl = new URL("/auth/signin", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
    if (req.nextUrl.pathname.startsWith("/auth") && req.auth) {
        const newUrl = new URL("/dash", req.nextUrl.origin)
        return Response.redirect(newUrl);
    }
})

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}