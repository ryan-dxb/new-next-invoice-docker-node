import { Request } from "express";

export interface RegisterUser extends Request {
  body: {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  };
}

export interface LoginUser extends Request {
  body: {
    email: string;
    password: string;
  };
}
