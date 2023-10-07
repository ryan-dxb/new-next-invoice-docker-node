import Image from "next/image";
import signIn from "./actions/signIn";

export async function getdata() {
  const login = await signIn({
    email: "test@test.com",
    password: "123456",
  });
}

export default async function Home() {
  const data = await fetch("/api/v1");

  console.log(data.json());
  return <div></div>;
}
