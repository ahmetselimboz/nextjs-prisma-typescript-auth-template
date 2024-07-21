"use server"

import prisma from "@/app/libs/prismadb"
import auth from "../auth"



export async function getSession() {
    return await auth.auth()
}

export default async function getCurrentUser() {
    const session = await getSession()
    if (!session?.user?.email) {
        return null
    }


    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email
        }
    })

    if (!user) {
        return null
    }

    return user;

}


export async function credentialsLogin(data: any) {
    try {

        const res = await auth.signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        })


        return res
    } catch (error) {
        console.log(error)
    }
}
export async function credentialsSignOut() {
    try {
        return auth.signOut()
    } catch (error) {
        console.log(error)
    }
}