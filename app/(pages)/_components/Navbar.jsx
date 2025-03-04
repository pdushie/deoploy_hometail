"use client";

import NProgress from "nprogress";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FaFileMedical } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const path = usePathname();

  return (
    <nav
      className={`relative z-50 flex w-full max-md:h-[90px] px-5 max-lg:px-0 items-center py-5 max-lg:pl-5 light-text dark-text text-lg font-semibold ${
        path === "/" && "absolute"
      } ${path === "/results" && ""}`}
    >
      <div className="flex w-full justify-between items-center">
        <Link
          href="/"
          className="flex items-center font-semibold light-text dark-text text-2xl"
        >
          <FaFileMedical className="text-3xl mr-2 text-blue-500" />
          HomeTail
        </Link>

        {/* Desktop Navigation */}
        {!session ? (
          <>
            <div className="flex gap-16 items-center max-lg:hidden">
              <Link href="#About" className="link link-hover">
                About
              </Link>
              <Link href="#Features" className="link link-hover">
                Features
              </Link>
              <Link href="#FAQ" className="link link-hover">
                FAQ
              </Link>
              <Link href="#Pricing" className="link link-hover">
                Pricing
              </Link>
            </div>
            <div className="flex gap-6 items-center max-lg:hidden">
              <Link href="/login" className="link link-hover">
                Login/Signup
              </Link>
              <Link href="/login">
                <button
                  type="button"
                  className="btn btn-primary text-base max-lg:hidden"
                >
                  Get Started
                </button>
              </Link>
              <ThemeSwitch />
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-16 items-center max-lg:hidden">
              <Link href="/dashboard" className="link link-hover">
                Dashboard
              </Link>
              <Link href="/subscribe" className="link link-hover">
                Subscribe
              </Link>
              <span>{session.user?.email}</span>
              <button
                type="button"
                className="btn btn-primary text-base text-black dark:text-white"
                onClick={() => {
                  NProgress.start();
                  localStorage.clear(); // Clear the specific item from local storage
                  signOut({ callbackUrl: "/" }); // Optional: redirect after sign out
                  NProgress.done();
                }}
              >
                Logout
              </button>
              <ThemeSwitch />
            </div>
          </>
        )}

        {/* Mobile Hamburger Button */}
        <div
          className={`${
            open ? "fixed top-5 right-0" : "relative"
          } max-lg:block lg:hidden z-50`}
        >
          <label className="btn btn-link swap swap-rotate dark-text light-text">
            <input
              type="checkbox"
              onChange={() => setOpen(!open)}
              checked={open}
            />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed w-4/5 z-40 top-0 right-0 h-full bg-white dark:bg-[#1D232A] flex-col p-5 border-gray-400 border-l transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="flex justify-between">
          <ThemeSwitch />
        </div>
        <div className="flex flex-col justify-end gap-8 pt-24 light-text dark-text">
          {!session ? (
            <>
              <Link
                href="/login"
                className="flex justify-end py-2 pr-4 text-lg"
              >
                Login
              </Link>
              <Link
                href="/login"
                className="flex justify-end py-2 pr-4 text-lg"
              >
                <button type="button" className="btn btn-primary text-lg">
                  Get Started
                </button>
              </Link>
              <Link
                href="#About"
                className="flex justify-end py-2 pr-4 text-lg"
              >
                About
              </Link>
              <Link
                href="#Features"
                className="flex justify-end py-2 pr-4 text-lg"
              >
                Features
              </Link>
              <Link href="#FAQ" className="flex justify-end py-2 pr-4 text-lg">
                FAQ
              </Link>
              <Link
                href="#Pricing"
                className="flex justify-end py-2 pr-4 text-lg"
              >
                Pricing
              </Link>
            </>
          ) : (
            <>
              {path !== "/assessment" && path !== "/" && (
                <Link href="/" className="flex justify-end py-2 pr-4 text-lg">
                  Home
                </Link>
              )}
              <Link
                href="/dashboard"
                className="flex justify-end py-2 pr-4 text-lg"
              >
                Dashboard
              </Link>
              <Link
                href="/subscribe"
                className="flex justify-end py-2 pr-4 text-lg"
              >
                Subscribe
              </Link>
              <span className="flex justify-end py-2 pr-4 text-lg">
                {session.user?.email}
              </span>
              <button
                type="button"
                className="btn btn-primary self-end mr-4 text-lg"
                onClick={() => {
                  NProgress.start();
                  localStorage.clear(); // Clear the specific item from local storage
                  signOut({ callbackUrl: "/" }); // Optional: redirect after sign out
                  NProgress.done();
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
