import { User } from "@/models/User";
import connectToDB from "@/utils/db";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { email, password } = await req.json();

  await connectToDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = new User({
    email: email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User created", { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
