
import bcrypt from "bcryptjs"
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";


export async function POST(request:Request){
    const {name, email, password} = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data:{
            name,
            email,
            hashedPassword
        }
    })

    return NextResponse.json(user)
}