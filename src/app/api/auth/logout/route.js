import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  cookies().delete('sid'); // session cookie silinir
  return NextResponse.json({ ok: true });
}
