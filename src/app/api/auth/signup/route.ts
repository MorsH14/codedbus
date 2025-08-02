// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import connectDB from "../../../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    await connectDB(); // ✅ ensure this doesn't throw

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Missing credentials" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User created", userId: newUser._id }, { status: 201 });
  } catch (error) {
    console.error("Signup Error:", error); // ✅ this will print in terminal
    return NextResponse.json({ message: "Server Error", error }, { status: 500 });
  }
}
