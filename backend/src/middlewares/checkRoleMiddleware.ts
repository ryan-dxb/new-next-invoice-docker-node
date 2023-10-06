import asyncHandler from "express-async-handler";
import { Roles } from "@/models/userModel";

type RolesArray = Array<Roles>;

const checkRole = (...role: RolesArray) =>
  asyncHandler(async (req, res, next) => {
    try {
      // Check if user is logged in and has the role
      if (!req.user || !req.user.roles) {
        res.status(401);
        throw new Error("Not authorized");
      }

      const requiredRolesArray = [...role];

      const userRoles = req.user.roles as RolesArray;

      // Check if user has the required role
      const hasRequiredRole = userRoles
        .map((role) => requiredRolesArray.includes(role))
        .find((role) => role === true);

      if (!hasRequiredRole) {
        res.status(401);
        throw new Error("Not authorized");
      }

      next();
    } catch (error) {
      console.log(error);
      throw new Error("Not authorized");
    }
  });

export default checkRole;
