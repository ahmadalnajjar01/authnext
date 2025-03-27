import { connectToDB } from "@/lib/mongodb";
import UserAuth from "@/models/UserAuth";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, email, password } = await req.json();
    const exist = await UserAuth.findOne({ email });
    if (exist) return NextResponse.json({ message: "Email already exists" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserAuth.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered", user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Registration failed", error: error.message }, { status: 500 });
  }
}
