import { cookies } from "next/headers";
import axios from "axios";

type SignInInput = {
  email: string;
  password: string;
};

type SignInResponse = {
  message: string;
  data: {
    user: {
      id: number;
      email: string;
      created_at: string;
      updated_at: string;
    };
    token: string;
  };
};

const signIn = async ({ email, password }: SignInInput) => {
  console.log("email", email);

  const response = await fetch("http://localhost:8080/api/v1/auth/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  console.log("data", response);
};

export default signIn;
