import { Request } from "express"
import bcrypt from "bcryptjs";
import config from "../../../config";
import { Prisma, User } from "@prisma/client";
import { prisma } from "../../shared/prisma";



const createUser = async (req:Request) => {
    const hashedPassword = await bcrypt.hash(req.body.password, Number(config.salt_round))

    const result = await prisma.user.create({
        data:{
            email: req.body.email,
            password: hashedPassword,
        }
    })
    console.log("result", result)
    return result;

}


export const UserService = {
    createUser
}