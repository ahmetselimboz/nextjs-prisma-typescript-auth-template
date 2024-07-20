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