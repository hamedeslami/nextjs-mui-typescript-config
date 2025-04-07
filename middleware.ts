import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes: string[] = ["/", '/profile', '/home'];
const publicRoutes: string[] = [
  "/auth/login",
  "/auth/signup",
];

export default async function middleware(req: NextRequest): Promise<NextResponse> {
    const path: string = req.nextUrl.pathname;
    
    const isProtectedRoute: boolean = protectedRoutes.includes(path);
    const isPublicRoute: boolean = publicRoutes.includes(path);

    const token = (await cookies()).get("AUTH_USER_TOKEN");

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
    }

    if (isPublicRoute && token) {
        return NextResponse.redirect(new URL("/home", req.nextUrl));
    }

    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};