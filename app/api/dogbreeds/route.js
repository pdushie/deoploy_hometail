import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const allBreeds = await prisma.DogBreed.findMany();  // Make sure the model is correct in your Prisma schema
    return new Response(JSON.stringify(allBreeds), { status: 200 });
  } catch (err) {
    console.error("Error fetching breeds:", err);
    return new Response(JSON.stringify({ message: "Error fetching breeds" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
