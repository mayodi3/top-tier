import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";

const schema = z.object({
  username: z.string().max(100),
  email: z.string().email(),
  password: z.string().min(8),
});

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const validationResult = schema.safeParse(body);
    if (!validationResult.success)
      return NextResponse.json(
        { errors: validationResult.error.errors },
        { status: 400 }
      );
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (existingUser)
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(body.password, 10);
    await prisma.user.create({
      data: {
        name: body.username,
        email: body.email,
        hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
};
