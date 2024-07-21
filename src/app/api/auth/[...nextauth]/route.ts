import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"

import prisma from "@/app/libs/prismadb"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

interface CredentialsProps {
    email?: string;
    password?: string;
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as any,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            allowDangerousEmailAccountLinking: true


        }),
        Credentials({
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials) => {
                try {
                    const { email, password } = credentials as { email: string; password: string };

                    if (!email || !password) {
                        throw new Error("Bir Hata Oluştu!!")
                    }

                    const user = await prisma.user.findUnique({
                        where: {
                            email: email
                        }
                    })


                    if (!user || !user.hashedPassword) {
                        throw new Error("Bir hata durumu mevcut")
                    }

                    const comparePassword = await bcrypt.compare(password, user.hashedPassword)

                    if (!comparePassword) {
                        throw new Error("Bir hata durumu mevcut")
                    }

                    return user

                } catch (error) {
                    console.error(error);
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/",
        signOut: "/",
        error: "/",
    },
    secret: process.env.NEXTAUTH_SECRET,
    events: {
        signIn: async (result) => {
            console.log("Kullanıcı Giriş Yaptı:", result);
        },
        signOut: async () => {
            console.log("Kullanıcı Çıkış Yaptı");
        }

    },


}




const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


