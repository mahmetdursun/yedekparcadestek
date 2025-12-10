// src/lib/auth.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Sunucu tarafında session almak için:
export function auth() {
  return getServerSession(authOptions);
}
