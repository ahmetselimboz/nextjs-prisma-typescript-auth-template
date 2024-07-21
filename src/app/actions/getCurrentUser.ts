

import prisma from "@/app/libs/prismadb"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth"

export async function getSession(){
    return await getServerSession()
}





export default async function useFetchCurrentUser() {
    const session = await getSession();
    if (!session?.user?.email) {
        return null;
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    });

    return user;
}


export async function credentialsSignOut() {
    try {
        return signOut()
    } catch (error) {
        console.log(error)
    }
}
export async function credentialsGoogle() {
    try {
        signIn("Google")


        return null
    } catch (error) {
        console.log(error)
    }
}