// src/app/api/auth/forgot/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createPasswordResetToken } from "@/lib/password-reset";
import { sendPasswordResetEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    const form = await req.formData().catch(() => null);
    const emailRaw = form?.get("email") || "";
    const email = String(emailRaw).trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { message: "E-posta gerekli." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    // Kullanıcı varsa token üret, yoksa da aynı cevabı ver (bilgi sızmasın)
    const genericResponse = NextResponse.json(
      {
        ok: true,
        message:
          "Eğer bu e-posta sistemde kayıtlı ise, şifre sıfırlama linki gönderilmiştir.",
      },
      { status: 200 }
    );

    if (!user) {
      return genericResponse;
    }

    const { rawToken } = await createPasswordResetToken(user.id);

    const baseUrl =
      process.env.NEXTAUTH_URL || "http://localhost:3000";

    const resetUrl = `${baseUrl}/sifre-sifirla?token=${rawToken}`;

    await sendPasswordResetEmail({ to: user.email, resetUrl });

    return genericResponse;
  } catch (err) {
    console.error("FORGOT_PASSWORD_ERROR", err);
    return NextResponse.json(
      { message: "Sunucu hatası." },
      { status: 500 }
    );
  }
}
