import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { email: true, name: true, phone: true, birthDate: true },
  });

  return Response.json({ user });
}

export async function PUT(req) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { name, phone, birthDate } = body;

  // basit temizlik/guard
  const data = {};
  if (typeof name === "string") data.name = name.trim();
  if (typeof phone === "string") data.phone = phone.trim();
  if (typeof birthDate === "string" && birthDate) {
    const d = new Date(birthDate);
    if (!Number.isNaN(d.valueOf())) data.birthDate = d;
  } else if (birthDate === "") {
    data.birthDate = null;
  }

  await prisma.user.update({
    where: { email: session.user.email },
    data,
  });

  return Response.json({ ok: true });
}
