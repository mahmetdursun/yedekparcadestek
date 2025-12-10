// src/app/api/account/route.js
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/account -> bağlı hesapları getir
export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const accounts = await prisma.account.findMany({
    where: { userId: session.user.id },
    select: { id: true, provider: true, providerAccountId: true },
  });

  return NextResponse.json({ accounts });
}

// DELETE /api/account -> bir bağlı hesabı kaldır
export async function DELETE(req) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { accountId } = await req.json().catch(() => ({}));

  if (!accountId) {
    return NextResponse.json({ message: "accountId gerekli" }, { status: 400 });
  }

  const acc = await prisma.account.findUnique({
    where: { id: String(accountId) },
  });

  if (!acc || acc.userId !== session.user.id) {
    return NextResponse.json({ message: "Bulunamadı" }, { status: 404 });
  }

  // Not: Tek giriş yöntemi buysa kaldırınca kullanıcı kilitlenebilir;
  // ileride "en az bir giriş yöntemi kalmalı" kuralı ekleyebilirsin.
  await prisma.account.delete({ where: { id: acc.id } });

  return NextResponse.json({ ok: true });
}
