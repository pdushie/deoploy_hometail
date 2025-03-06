import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req) => {
  const { email, password } = await req.json();

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return new NextResponse("User created", { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
