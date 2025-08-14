// import { NextRequest, NextResponse } from "next/server";

// const PROTECTED_ROUTES = ["/", "/about", "/teams", "/exam-desk", "/dashboard"];

// export function middleware(request: NextRequest) {
//   const isProtected = PROTECTED_ROUTES.some((route) => request.nextUrl.pathname.startsWith(route));
//   const hasUser = request.cookies.get("user");

//   if (isProtected && !hasUser) {
//     const redirectUrl = new URL("/sign-in", request.url);
//     redirectUrl.searchParams.set("redirect", request.nextUrl.pathname);
//     return NextResponse.redirect(redirectUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next|api|sign-in|favicon.ico).*)"], // exclude static & login paths
// };
