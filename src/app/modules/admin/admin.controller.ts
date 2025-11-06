import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { AdminService } from "./admin.service";






const allUsers = catchAsync(async (req: Request, res: Response) => {
    // Your logic to create a user
    // const id = req.params.id
   const result = await AdminService.allUsers(req)
    console.log("result Controller", result)
   sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All users fetched successfully",
    data: result ,
   })
  });



export const AdminController = {
    allUsers
}