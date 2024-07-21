import NextAuth, { NextAuthConfig } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import prisma from "@/app/libs/prismadb"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

interface CredentialsProps {
    email?: string;
    password?: string;
}

export const authOptions: NextAuthConfig  = {
    adapter: PrismaAdapter(prisma) as any,
    providers: [
        Google,
        Credentials({
            credentials: {
                email: { label: "email", type: "text" } ,
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials)  => {
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
    secret: "6face40eeaff183da745038a1f11d8be" ,

    
    
}

export default  NextAuth(authOptions)


