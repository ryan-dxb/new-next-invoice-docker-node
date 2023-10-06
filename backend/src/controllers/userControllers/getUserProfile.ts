import asyncHandler from "express-async-handler";
import { RequestHandler, Request, Response } from "express";
import { findUserById } from "@/services/auth.service";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";

const getUserProfileController: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next) => {
    try {
      const user = req.user;

      const userProfile = await findUserById(user._id);

      if (!userProfile) {
        sendError(createHttpError.NotFound("User not found"));
      }

      res.status(200).json({
        message: "User profile",
        data: {
          userProfile,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default getUserProfileController;
