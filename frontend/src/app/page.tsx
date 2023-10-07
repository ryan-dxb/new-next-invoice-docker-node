import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { getServerSession } from "@/lib/getServerSession";

export default async function Home() {
  const session = await getServerSession();
  console.log("session :>> ", session);

  return (
    <main className="flex items-center justify-center h-screen bg-primary/10">
      <div className="max-w-xl px-10 mx-auto sm:px-0">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
