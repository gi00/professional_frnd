import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const token = req.cookies.get("userToken");

  const Paths = [
    {
      absolutePath: "http://localhost:5000/signin",
      relativePath: "/signin",
    },
    {
      absolutePath: "http://localhost:5000/signup",
      relativePath: "/signup",
    },
    {
      absolutePath: "http://localhost:5000",
      relativePath: "/",
    },
  ];

  /*paths.some((path) => {
    console.log(path)
    if (!token && req.url !== path.absolutePath)
      return NextResponse.redirect(new URL(path.relativePath, req.url));
  });

  /*if (!token && req.url!==path[]) {
    
    return NextResponse.redirect(new URL("/signin", req.url));
  } */

  try {
    await jwtVerify(token.value, new TextEncoder().encode("userHelpme"));
    if (req.url !== "http://localhost:5000/home") {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  } catch (err) {
    return NextResponse.redirect(new URL("/signin", req.url));
    /*if (req.url !== "http://localhost:5000/signin")
      return NextResponse.redirect(new URL("/signin", req.url));*/
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*","/profile/:path*"],
};
