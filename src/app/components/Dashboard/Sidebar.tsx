import Image from "next/image";
import Link from "next/link";
import React from "react";
import AllProducts from "./AllProducts";

const Sidebar = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="py-4 px-6">
          <Link href="/">
            <h1 className="text-2xl font-bold text-red-600 mb-10 mt-2">
              Elegant Fashion
            </h1>
          </Link>
        </div>
        <div className="mb-10">
          <Link
            href="/dashboard"
            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M862.90625 932.1875H162.96875c-38.71875 0-70.125-31.40625-70.125-70.125V432.5c0-38.71875 31.40625-70.125 70.125-70.125h699.9375c38.71875 0 70.125 31.40625 70.125 70.125v429.5625c0 38.71875-31.40625 70.125-70.125 70.125z"
                  fill="#00AAFF"
                ></path>
                <path
                  d="M784.0625 227.5625H239.9375c-32.4375 0-58.78125 26.34375-58.78125 58.78125v45.9375h661.6875v-45.9375c0-32.53125-26.34375-58.78125-58.78125-58.78125z"
                  fill="#FC592D"
                ></path>
                <path
                  d="M721.25 91.34375H306.59375c-32.4375 0-58.78125 26.34375-58.78125 58.78125v45.9375H780.125v-45.9375c-0.09375-32.4375-26.34375-58.78125-58.875-58.78125z"
                  fill="#FFCE00"
                ></path>
              </g>
            </svg>
            All Products
          </Link>
          <Link
            href="/"
            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
          >
            <svg
              className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
          <form className="w-full max-w-md">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
              <svg
                className="w-5 h-5 absolute ml-3 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                name="search"
                placeholder="Search talk"
                autoComplete="off"
                aria-label="Search talk"
                className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
              />
            </div>
          </form>
          <div className="relative flex-shrink-0">
            <div className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              <Image
                height={100}
                width={100}
                className="inline w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <main>
          <AllProducts />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
