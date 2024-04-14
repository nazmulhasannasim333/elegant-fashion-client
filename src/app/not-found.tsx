import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="text-center mt-32">
      <h1 className="text-2xl mb-10">404 Not found</h1>
      <Link href="/">
        <button className=" bg-red-700 text-white py-2 px-3">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
