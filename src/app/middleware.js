import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  // إذا ما في توكن
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // تحقق من صحة التوكن
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    console.log("Invalid token", err);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Apply middleware only to protected routes
export const config = {
  matcher: ["/dashboard/:path*"], // هنا مسار الصفحات المحمية
};
