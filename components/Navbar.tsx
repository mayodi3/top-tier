// "use client"
import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import Menu from "./Menu";
import { IoMdLogIn } from "react-icons/io";

const Navbar = async () => {
  const session = await auth();

  let link: string = "";

  switch (session?.user.role) {
    case "client":
      link = "/dashboard/client";
      break;
    case "writer":
      link = "/dashboard/writer";
      break;
    case "editor":
      link = "/dashboard/editor";
      break;
    case "manager":
      link = "/dashboard/manager";
      break;
    default:
      break;
  }

  return (
    <div className="flex items-center justify-between bg-green-700 text-white h-20 p-2 md:p-4">
      <Link href="/" className="md:text-xl xl:text-2xl font-extrabold">
        TOPTIERWRITERS
      </Link>
      <p className="md:font-extrabold mx-3 uppercase text-xs  md:text-lg">
        Welcome {session?.user.name}
      </p>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="gap-3 text-lg hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link className={`${link ? "" : "hidden"}`} href={link}>
          Dashboard
        </Link>
        <Link
          className=""
          href={session?.user ? "/api/auth/signout" : "/api/auth/signin"}
        >
          <span className="">
            {session?.user ? "Logout" : "Login"}
            <IoMdLogIn className="text-green-200 inline-flex -ml-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
