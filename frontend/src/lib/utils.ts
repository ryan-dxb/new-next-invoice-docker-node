import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getApiURL = () => {
  let url: string = "";
  const isServer = typeof window === "undefined";

  if (isServer) {
    url = process.env.NEXT_PUBLIC_SERVER_API_URL as string;
  } else {
    url = process.env.NEXT_PUBLIC_CLIENT_API_URL as string;
  }

  return url;
};
