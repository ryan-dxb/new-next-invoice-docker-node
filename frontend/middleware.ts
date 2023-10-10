import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Can use the session token to check if the user is logged in
  return;
}
