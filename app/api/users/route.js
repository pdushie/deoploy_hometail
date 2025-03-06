import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Initialize Prisma Client
const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await prisma.user.findMany();
    console.log(users);

    // Return users in response
    return new NextResponse("User created", { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
};
