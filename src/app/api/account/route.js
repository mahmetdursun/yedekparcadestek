import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

// GET /api/account  -> bağlı hesapları getir
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const accounts = await prisma.account.findMany({
    where: { userId: session.user.id },
    select: { id: true, provider: true, providerAccountId: true }
  });
  return NextResponse.json({ accounts });
}

// DELETE /api/account  -> bir bağlı hesabı kaldır
export async function DELETE(req) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { accountId } = await req.json().catch(() => ({}));
  if (!accountId) {
    return NextResponse.json({ message: 'accountId gerekli' }, { status: 400 });
  }

  const acc = await prisma.account.findUnique({ where: { id: String(accountId) } });
  if (!acc || acc.userId !== session.user.id) {
    return NextResponse.json({ message: 'Bulunamadı' }, { status: 404 });
  }

  // Uyarı: Eğer tek giriş yöntemi buysa ve kaldırırsan kullanıcı kilitlenebilir.
  // Gerçekte: en az bir giriş yöntemi bırakmayı zorunlu kılmak iyi fikir.
  await prisma.account.delete({ where: { id: acc.id } });
  return NextResponse.json({ ok: true });
}
