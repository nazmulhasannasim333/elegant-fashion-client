import React from "react";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-full sticky z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
      <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-6">
        <Link className="logo" href="/">
          <h1 className="text-3xl font-bold text-red-600">Elegant Fashion</h1>
        </Link>
        <input type="checkbox" id="check" />

        <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <a href="/flash-sale">Flash Sale</a>
          </li>
          <li>
            <a href="/">Contact Us </a>
          </li>
          <li>
            <a href="/dashboard">Dashboard </a>
          </li>

          <label htmlFor="check" className="close-menu">
            X
          </label>
        </span>

        <label htmlFor="check" className="open-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
      </ul>
    </nav>
  );
};

export default Navbar;
