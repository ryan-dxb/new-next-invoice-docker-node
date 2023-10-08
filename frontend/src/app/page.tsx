import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-primary/10">
      <div className="max-w-xl px-10 mx-auto sm:px-0">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
