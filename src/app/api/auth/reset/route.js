// src/app/api/auth/reset/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { verifyPasswordResetToken } from "@/lib/password-reset";

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-ZÇĞİÖŞÜ])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/u;

export async function POST(req) {
  try {
    const form = await req.formData().catch(() => null);
    const token = String(form?.get("token") || "");
    const password = String(form?.get("password") || "");
    const password2 = String(form?.get("password2") || "");

    if (!token) {
      return NextResponse.json(
        { message: "Geçersiz bağlantı." },
        { status: 400 }
      );
    }

    if (!password || !password2) {
      return NextResponse.json(
        { message: "Şifre alanları zorunlu." },
        { status: 400 }
      );
    }

    if (password !== password2) {
      return NextResponse.json(
        { message: "Şifreler eşleşmiyor." },
        { status: 400 }
      );
    }

    if (!strongPasswordRegex.test(password)) {
      return NextResponse.json(
        { message: "Şifre yeterince güçlü değil." },
        { status: 400 }
      );
    }

    const record = await verifyPasswordResetToken(token);
    if (!record?.user) {
      return NextResponse.json(
        { message: "Geçersiz veya süresi dolmuş bağlantı." },
        { status: 400 }
      );
    }

    const hash = await bcrypt.hash(password, 12);

    await prisma.user.update({
      where: { id: record.userId },
      data: {
        password: hash,
        // İstersen: emailVerified'i de set edebilirsin
        emailVerified: record.user.emailVerified ?? new Date(),
      },
    });

    // Token tek kullanımlık olsun:
    await prisma.passwordResetToken.delete({
      where: { id: record.id },
    });

    return NextResponse.json(
      { ok: true, message: "Şifreniz başarıyla güncellendi." },
      { status: 200 }
    );
  } catch (err) {
    console.error("RESET_PASSWORD_ERROR", err);
    return NextResponse.json(
      { message: "Sunucu hatası." },
      { status: 500 }
    );
  }
}
