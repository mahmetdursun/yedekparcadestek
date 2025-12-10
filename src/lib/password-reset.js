// src/lib/password-reset.js
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

const EXPIRES_MINUTES = 60; // 1 saat

// Token üret + hashleyip DB’ye kaydet
export async function createPasswordResetToken(userId) {
  const rawToken = crypto.randomBytes(32).toString("hex");

  const tokenHash = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex");

  // Aynı kullanıcı için eski tokenları temizle
  await prisma.passwordResetToken.deleteMany({
    where: { userId },
  });

  const expiresAt = new Date(Date.now() + EXPIRES_MINUTES * 60 * 1000);

  await prisma.passwordResetToken.create({
    data: {
      userId,
      tokenHash,
      expiresAt,
    },
  });

  return { rawToken, expiresAt };
}

// Linkten gelen token’ı doğrula
export async function verifyPasswordResetToken(rawToken) {
  const tokenHash = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex");

  const record = await prisma.passwordResetToken.findUnique({
    where: { tokenHash },
    include: { user: true },
  });

  if (!record) return null;

  if (record.expiresAt < new Date()) {
    await prisma.passwordResetToken.delete({
      where: { id: record.id },
    });
    return null;
  }

  return record; // { id, userId, user, ... }
}
