// src/app/api/profile/route.js
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      birthDate: true,
      image: true,
    },
  });

  return NextResponse.json({ user });
}

export async function PUT(req) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { firstName, lastName, phone, birthDate } = body;

  const data = {};

  if (typeof firstName === "string") data.firstName = firstName.trim();
  if (typeof lastName === "string") data.lastName = lastName.trim();
  if (typeof phone === "string") data.phone = phone.trim();

  if (typeof birthDate === "string" && birthDate) {
    const d = new Date(birthDate);
    if (!Number.isNaN(d.valueOf())) data.birthDate = d;
  } else if (birthDate === "") {
    data.birthDate = null;
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data,
  });

  return NextResponse.json({ ok: true });
}
