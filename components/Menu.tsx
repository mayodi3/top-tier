"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, status } = useSession();

  let link = "";

  switch (data?.user.role) {
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
    <div>
      <div className="" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoCloseSharp size={30} /> : <RiMenu3Fill size={30} />}
      </div>
      {isOpen && (
        <div className="bg-green-500 flex flex-col gap-11 text-3xl items-center justify-center absolute left-0 top-20 w-full h-[calc(100vh-6rem)]">
          <Link onClick={() => setIsOpen(false)} href="/">
            Home
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/services">
            Services
          </Link>
          <Link
            className={`${link ? "" : "hidden"}`}
            href={link}
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link href={data?.user ? "/api/auth/signout" : "/api/auth/signin"}>
            <span className="">
              {data?.user ? "Logout" : "Login"}
              <IoMdLogIn className="text-green-200 inline-flex -ml-1" />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
