import { cookies } from "next/headers";
import * as jose from "jose";
import { secret } from "./session";

export const getServerSession = async () => {
  const cookieStore = cookies();

  const sessionToken = cookieStore.get("session-token");

  if (!sessionToken) {
    return;
  }

  const session = await jose.decodeJwt(sessionToken.value as string);

  //   return session;
  return session;
};
