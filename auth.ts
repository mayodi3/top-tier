import NextAuth, { Account } from "next-auth";
import google from "next-auth/providers/google";
// import resend from "next-auth/providers/resend";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import { User } from "next-auth/providers/notion";
import { AdapterUser } from "next-auth/adapters";
import { Profile } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

declare module "next-auth" {
  interface Session {
    user: User & {
      role?: string;
    };
  }
}

declare module "next-auth" {
  interface JWT {
    role?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  providers: [
    google,
    credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          required: true,
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (user) {
          const isValidPassword = await bcrypt.compare(
            credentials.password as string,
            user.hashedPassword!
          );
          if (isValidPassword) return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      const fetchedUser = await prisma.user.findUnique({
        where: { email: token.email! },
      });
      if (fetchedUser) token.role = fetchedUser.role;

      return token;
    },
    async session({ token, session }) {
      session.user.role = token.role as string;
      return session;
    },
  },
});
