import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password } = body;
  const correctPassword = process.env.PAGE_ACCESS_PASSWORD;

  if (!correctPassword) {
    console.error('PAGE_ACCESS_PASSWORD environment variable is not set');
    return NextResponse.json(
      { message: "Internal server error" }, 
      { status: 500 }
    );
  }

  if (password === correctPassword) {
    const response = NextResponse.json(
      { success: true }, 
      { status: 200 }
    );
    
    // Use NextResponse's built-in cookie handling
    response.cookies.set("authToken", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    });

    return response;
  } else {
    return NextResponse.json(
      { message: "Incorrect password" }, 
      { status: 401 }
    );
  }
}
