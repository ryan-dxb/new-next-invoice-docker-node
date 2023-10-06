import registerController from "./registerUser";
import loginController from "./loginUser";
import verifyEmailController from "./verifyEmail";
import refreshTokenController from "./refreshToken";
import resendVerifyEmailController from "./resendVerifyEmail";

export {
  registerController as register,
  loginController as login,
  verifyEmailController as verifyEmail,
  refreshTokenController as refreshToken,
  resendVerifyEmailController as resendVerifyEmail,
};
