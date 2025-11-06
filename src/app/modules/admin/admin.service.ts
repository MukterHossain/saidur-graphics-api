import { Request } from "express"
import bcrypt from "bcryptjs";
import config from "../../../config";
import { prisma } from "../../shared/prisma";



const allUsers = async (req:Request) => {
    
    const result = await prisma.user.findMany({
        select:{
            id: true,
            email: true,
            role: true,
            status: true,
            needPasswordChange: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    console.log("result", result)
    return result;

}


export const AdminService = {
    allUsers
}