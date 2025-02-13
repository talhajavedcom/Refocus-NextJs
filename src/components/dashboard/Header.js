"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";

export default function Header({ onMenuClick }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 z-50">
      {/* Logo and Mobile Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <Link href="/dashboard" className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Refocus
          </span>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 hover:opacity-80"
          >
            <span className="hidden md:block">Hi, admin</span>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              <UserIcon className="w-5 h-5" />
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
              {/* <Link
                href="/dashboard/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link> */}
              <Link
                href="/auth/login"
                className="block px-4 py-2 hover:bg-gray-100 text-red-600"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
