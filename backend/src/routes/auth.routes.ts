import { register, login } from "@/controllers/authControllers";
import schemaValidator from "@/middlewares/schemaValidator";
import { loginUserSchema, registerUserSchema } from "@/schema/auth.schema";
// import isAuthenticated from "@/middlewares/isAuthenticated";
import express from "express";

const router = express.Router();

router.route("/register").post(schemaValidator(registerUserSchema), register);
router.route("/login").post(schemaValidator(loginUserSchema), login);
// router.route("/refresh-token").post(refreshToken);
// router.route("/logout").post(isAuthenticated, logout);
// router.route("/me").get(isAuthenticated, (req, res) => {
//   res.json({ message: "get me new" });
// });

export default router;
