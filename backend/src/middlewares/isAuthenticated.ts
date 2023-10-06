import UserModel from "@/models/userModel";
import sendError from "@/utils/sendError";
import { verifyAccessToken } from "@/utils/token.utils";
import { Request, RequestHandler, Response } from "express";
import asyncHandler from "express-async-handler";
import createHttpError from "http-errors";

const isAuthenticated: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next) => {
    let token: string = "";

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];

      if (!token || token === "") {
        sendError(createHttpError.Unauthorized("Invalid token"));
      }
    }

    try {
      const decoded = await verifyAccessToken(token);

      console.log("decoded", decoded);

      if (!decoded) {
        sendError(createHttpError.Unauthorized("Invalid token"));
      }

      const user = await UserModel.findById(decoded?.id, {
        password: 0,
        refreshTokens: 0,
      });

      if (!user) {
        sendError(createHttpError.Unauthorized("Invalid token"));
      }

      req.user = user;

      console.log("req.user", req.user);

      next();
    } catch (error) {
      console.log("error", error);

      next(error);
    }
  }
);

export default isAuthenticated;
