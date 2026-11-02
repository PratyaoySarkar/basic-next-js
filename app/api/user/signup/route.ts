import { NextRequest, NextResponse } from "next/server";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../../generated/prisma/client"

//This login is for Singleton desgin pattern, so that we can use the same instance of PrismaClient throughout the application. This is important because creating multiple instances of PrismaClient can lead to performance issues and unexpected behavior.
function createPrismaClient(){
    const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
    const prismaClient = new PrismaClient({ adapter });
    return prismaClient;
}

const globalForPrsima = global as unknown as {
    prismaClient: PrismaClient | undefined
}

const prismaClient = globalForPrsima.prismaClient ?? createPrismaClient();
if(process.env.NODE_ENV !== "production") globalForPrsima.prismaClient = prismaClient;

//Till this point we have created a singleton instance of PrismaClient.

export async function POST(req: NextRequest){
    const data = await req.json();

    await prismaClient.user.create({
        data:{
            username: data.username,
            password: data.password
        }
    })
    return NextResponse.json({
        message: "User created successfully"
    })
}