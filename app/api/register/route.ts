import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from "next/server";
import {Request} from "next/dist/compiled/@edge-runtime/primitives";

export async function POST(
    request: Request
){
    try{
        const body = await request.json();
        const {
            email,
            name,
            password
        } = body;
        if (!email || !name || !password) {
            return new NextResponse("Missing fields", {status: 400});
        }

//     create hashed password to store in DB
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });

        return NextResponse.json(user);
    }
    catch(error:any){
        console.log(error, 'REGISTRATION_ERROR');
        return new NextResponse("Internal Error", {status: 500});
    }
}