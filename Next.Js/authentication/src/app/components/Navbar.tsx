'use client'

import { useSession,signOut } from "@/lib/auth-client";
import Link from "next/link";
// import { signOut } from "better-auth/api";

export default function Navbar() {
  const { data: session, isPending } = useSession()

  console.log(session);
  if(isPending){
    return <>
    <p>Loading..... </p>
    </>
  }

  const links = <>

    {
      session?.user ? <>
        <button onClick={() => signOut()} className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
          Logout
        </button>
      </>
        :

        <>
        <Link href="/sign-in">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
            Login
          </button>
          </Link>

          <Link href="/sign-up">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Sign Up
          </button>
          </Link>
        </>
    }

  </>


  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          DevApp
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/services"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Services
          </Link>

          {
            session?.user ?  <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Dashboard
          </Link>: ""
          }
          

          {
            session?.user ?  <Link
            href="/profile"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Profile
          </Link> : ""

          }
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          {links}

          {/* Mobile button */}
          <button className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}