// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },

  pages: {
    signIn: "/uye-giris",
  },

  allowDangerousEmailAccountLinking: process.env.NODE_ENV !== "production",

  providers: [
    // Google ile giriş
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // E-posta + şifre ile giriş (brute-force için küçük delay ekli)
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = String(credentials?.email || "")
          .toLowerCase()
          .trim();
        const password = String(credentials?.password || "");

        const user = await prisma.user.findUnique({ where: { email } });

        // Kullanıcı yoksa veya şifre alanı yoksa → gecikmeli null
        if (!user?.password) {
          await new Promise((r) => setTimeout(r, 500));
          return null;
        }

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) {
          // Yanlış şifre → yine gecikmeli null
          await new Promise((r) => setTimeout(r, 500));
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.uid = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token?.uid) {
        session.user = session.user || {};
        session.user.id = token.uid;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      try {
        const u = new URL(url, baseUrl);
        if (u.pathname === "/uye-giris") return baseUrl;
        return u.origin === baseUrl ? u.href : baseUrl;
      } catch {
        return baseUrl;
      }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
