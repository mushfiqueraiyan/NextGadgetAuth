"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div>
      <nav className="p-4 flex justify-between items-center border-b border-gray-200">
        <div className="text-xl font-bold">
          <Link href="/">NextAuth App</Link>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/products">Products</Link>
          </li>

          <li>
            <Link href="/dashboard/add-product">Add Products</Link>
          </li>
          {session ? (
            <>
              <li>
                <button
                  className="bg-red-600 text-white p-2 cursor-pointer rounded-2xl"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
