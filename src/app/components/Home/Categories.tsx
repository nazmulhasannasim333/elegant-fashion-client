import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-3 lg:px-0 ">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold my-5">Top Categories</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis
          laudantium alias maiores est distinctio tempora officia odio illo
          dolorum
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 my-10">
        <Link href={`/products/Shirt`}>
          <div className="bg-gray-200 text-center p-6 shadow-lg rounded-md cursor-pointer hover:-translate-y-2 duration-500">
            <h2 className="text-3xl font-semibold">Shirt</h2>
          </div>
        </Link>
        <Link href={`/products/Dress`}>
          <div className="bg-gray-200 text-center p-6 shadow-lg rounded-md cursor-pointer hover:-translate-y-2 duration-500">
            <h2 className="text-3xl font-semibold">Dress</h2>
          </div>
        </Link>
        <Link href={`/products/Jeans`}>
          <div className="bg-gray-200 text-center p-6 shadow-lg rounded-md cursor-pointer hover:-translate-y-2 duration-500">
            <h2 className="text-3xl font-semibold">Jeans</h2>
          </div>
        </Link>
        <Link href={`/products/Pants`}>
          <div className="bg-gray-200 text-center p-6 shadow-lg rounded-md cursor-pointer hover:-translate-y-2 duration-500">
            <h2 className="text-3xl font-semibold">Pants</h2>
          </div>
        </Link>
        <Link href={`/products/Panjabi`}>
          <div className="bg-gray-200 text-center p-6 shadow-lg rounded-md cursor-pointer hover:-translate-y-2 duration-500">
            <h2 className="text-3xl font-semibold">Panjabi</h2>
          </div>
        </Link>
        <Link href={`/products/Kids`}>
          <div className="bg-gray-200 text-center p-6 shadow-lg rounded-md cursor-pointer hover:-translate-y-2 duration-500">
            <h2 className="text-3xl font-semibold">Kids</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
