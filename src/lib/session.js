import { cookies } from 'next/headers';
import crypto from 'crypto';

const SECRET = process.env.SESSION_SECRET || 'dev-secret';

export function getSession() {
  const raw = cookies().get('sid')?.value;
  if (!raw) return null;

  const [payload, sig] = raw.split('.');
  const value = Buffer.from(payload, 'base64').toString();
  const check = crypto.createHmac('sha256', SECRET).update(value).digest('hex');
  if (sig !== check) return null;

  try {
    return JSON.parse(value); // { uid, t }
  } catch {
    return null;
  }
}
