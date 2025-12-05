// src/lib/auth.js
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

/**
 * Not: User şemanızda password opsiyonel (String?) olmalı.
 * Credentials girişinde user.password yoksa null döndürüyoruz.
 */

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    Credentials({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const email = String(credentials?.email || "").toLowerCase().trim();
        const password = String(credentials?.password || "");
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.password) return null; // sosyal hesapla açılmış olabilir
        const ok = await bcrypt.compare(password, user.password);
        if (!ok) return null;
        return { id: user.id, email: user.email, name: `${user.firstName} ${user.lastName}` };
      }
    })
  ],

  pages: {
    signIn: "/uye-giris", // kendi giriş sayfan
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.uid = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token?.uid) session.user.id = token.uid;
      return session;
    }
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
