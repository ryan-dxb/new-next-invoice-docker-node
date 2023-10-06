import UserModel, { UserDocument } from "@/models/userModel";
import sendError from "@/utils/sendError";
import { DEFAULT_AVATAR } from "@/utils/variables";
import createHttpError from "http-errors";

type UserData = {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  avatar?: { url: string; publicId: string };
};

export const createNewUser = async (userData: UserData) => {
  const { email, password, username, firstName, lastName, avatar } = userData;

  //////////////// Create New User //////////////
  const user: UserDocument = await UserModel.create({
    email: email.toLowerCase(),
    username,
    password,
    firstName,
    lastName,
    avatar: avatar ? avatar : DEFAULT_AVATAR,
  });

  return user;
};

type Credentials = {
  email: string;
  password: string;
};

//////////////// Find user by email //////////////
export const findUserByEmail = async (email: string) => {
  const user = await UserModel.findOne(
    { email: email.toLowerCase() },
    {
      password: 0,
      refreshTokens: 0,
    }
  );

  return user;
};

//////////////// Find user by email //////////////
export const findUserByRefreshToken = async (
  id: string,
  refreshToken: string
) => {
  const user = await UserModel.findOne(
    {
      _id: id,
      refreshTokens: { $in: [refreshToken] },
    },
    {
      password: 0,
      refreshTokens: 0,
    }
  );

  return user;
};

//////////////// Find User by Id //////////////
export const findUserById = async (id: string) => {
  const user = await UserModel.findById(id, {
    password: 0,
    refreshTokens: 0,
  });

  if (!user) {
    sendError(createHttpError.Unauthorized("User not found"));
  }

  return user;
};

//////////////// Check User Credentials //////////////
export const checkUserCredentials = async ({
  email,
  password,
}: Credentials) => {
  const user = await findUserByEmail(email);

  if (!user) {
    sendError(createHttpError.BadRequest("Invalid credentials"));
  }

  // Check if password matches
  const comparePassword = await user.comparePassword(password, user.password);

  console.log("comparePassword", comparePassword);

  if (!comparePassword) {
    sendError(createHttpError.BadRequest("Invalid credentials"));
  }

  return user;
};
