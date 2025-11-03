import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
    // Your logic to create a user
   const result = await UserService.createUser(req)
    console.log("result Controller", result)
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully",
    data: result ,
   })
  });



export const UserController = {
    createUser
}