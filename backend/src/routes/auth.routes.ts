import {
  register,
  login,
  verifyEmail,
  refreshToken,
  resendVerifyEmail,
} from "@/controllers/authControllers";
import schemaValidator from "@/middlewares/schemaValidator";
import {
  loginUserSchema,
  registerUserSchema,
  resendVerifyEmailSchema,
  verifyEmailSchema,
} from "@/schema/auth.schema";
// import isAuthenticated from "@/middlewares/isAuthenticated";
import express from "express";

const router = express.Router();

router.route("/register").post(schemaValidator(registerUserSchema), register);
router.route("/login").post(schemaValidator(loginUserSchema), login);
router
  .route("/verify-email")
  .post(schemaValidator(verifyEmailSchema), verifyEmail);

router
  .route("/resend-verify-email")
  .post(schemaValidator(resendVerifyEmailSchema), resendVerifyEmail);

router.route("/refresh-token").post(refreshToken);

// router.route("/refresh-token").post(refreshToken);
// router.route("/logout").post(isAuthenticated, logout);
// router.route("/me").get(isAuthenticated, (req, res) => {
//   res.json({ message: "get me new" });
// });

export default router;
