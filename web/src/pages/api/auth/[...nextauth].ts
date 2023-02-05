import NextAuth, { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { envs } from "@/config";
import prisma from "@/lib/prismadb";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: envs.nextAuthSecret,
  providers: [
    GoogleProvider({
      clientId: envs.googleClientId,
      clientSecret: envs.googleClientSecret,
    }),
  ],
};

export default NextAuth(authOptions);
