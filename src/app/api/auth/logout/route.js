import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ message: "Logged out" });

    response.headers.set(
      "Set-Cookie",
      `token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`
    );

    return response;
  } catch (error) {
    console.error("Logout Error:", error.message);
    return NextResponse.json({ message: "Logout failed", error: error.message }, { status: 500 });
  }
}
