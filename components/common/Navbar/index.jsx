import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className={`container mx-auto p-6 flex items-center justify-between ${
        pathname === "/"
          ? "absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-full"
          : ""
      }`}>
      <Link
        href="/"
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <p className="blue-gradient_text font-semibold drop-shadow">BL</p>
      </Link>
      <nav className={`flex text-lg gap-7 font-medium`}>
        <ul className="flex items-center gap-10">
          <li>
            <Link
              href="/about"
              className={`transition ${
                pathname === "/about" ? "text-blue-500" : "text-black"
              }`}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`transition ${
                pathname === "/projects" ? "text-blue-500" : "text-black"
              }`}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
