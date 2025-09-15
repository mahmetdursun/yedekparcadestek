import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const form = await req.formData();
  const email = String(form.get('email') || '').trim().toLowerCase();
  const password = String(form.get('password') || '');
  const password2 = String(form.get('password2') || '');
  const firstName = String(form.get('firstName') || '').trim();
  const lastName  = String(form.get('lastName') || '').trim();

  if (!email || !password || !firstName || !lastName)
    return NextResponse.json({ message: 'Zorunlu alanlar eksik.' }, { status: 400 });

  if (password !== password2)
    return NextResponse.json({ message: 'Şifreler eşleşmiyor.' }, { status: 400 });

  // basit parola politikası
  const strong = /^(?=.*[a-z])(?=.*[A-ZÇĞİÖŞÜ])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/u;
  if (!strong.test(password))
    return NextResponse.json({ message: 'Şifre yeterince güçlü değil.' }, { status: 400 });

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return NextResponse.json({ message: 'Bu e-posta zaten kayıtlı.' }, { status: 409 });

  const hash = await bcrypt.hash(password, 12);
  await prisma.user.create({ data: { email, firstName, lastName, password: hash } });

  return NextResponse.json({ ok: true });
}
