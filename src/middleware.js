import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {

  const token = req.cookies.get("userToken");

  try {
    await jwtVerify(token.value, new TextEncoder().encode("userHelpme"));
    if (req.url !== "http://localhost:5000/home") {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  } catch (err) {
    if(req.url !== "http://localhost:5000/signin")
      return NextResponse.redirect(new URL("/signin", req.url));
    /*if (req.url !== "http://localhost:5000/signin")
      return NextResponse.redirect(new URL("/signin", req.url));*/
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*","/profile/:path*","/signin"],
};
