import asyncHandler from "express-async-handler";
import { RequestHandler, Response, NextFunction } from "express";
import { VerifyEmailRequest } from "@/@types/auth";
import { findUserById } from "@/services/auth.service";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";
import { UserDocument } from "@/models/userModel";
import EmailVerificationTokenModel from "@/models/emailVerificationTokenModel";

const verifyEmailController: RequestHandler = asyncHandler(
  async (req: VerifyEmailRequest, res: Response, next: NextFunction) => {
    try {
      const { userId, token } = req.body;

      // Check if user with provided id exists

      const user: UserDocument = await findUserById(userId);

      if (!user) {
        return sendError(createHttpError.BadRequest("User not found"));
      }

      // Check if user is already verified
      if (user.isEmailVerified) {
        return sendError(createHttpError.BadRequest("Email already verified"));
      }

      // Check if token is valid
      const tokenExists = await EmailVerificationTokenModel.findOne({
        owner: userId,
      });

      if (!tokenExists) {
        return sendError(createHttpError.BadRequest("Invalid token"));
      }

      // Compare token with token in database
      const isTokenValid = await tokenExists.compareToken(token);

      if (!isTokenValid) {
        return sendError(createHttpError.BadRequest("Invalid token"));
      }

      // Check if token is expired

      console.log("tokenExists.expiresAt", tokenExists.expiresAt);
      console.log("new Date()", new Date());

      if (tokenExists.expiresAt < new Date()) {
        return sendError(createHttpError.BadRequest("Token expired"));
      }

      // Update user
      user.isEmailVerified = true;
      await user.save();

      // Delete EmailVerificationToken
      await EmailVerificationTokenModel.deleteOne({ owner: userId });

      res.status(200).json({
        message: "Email verified successfully",
      });
    } catch (error) {
      next(error);
    }
  }
);

export default verifyEmailController;
