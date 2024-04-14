import React from "react";
import Image from "next/image";
import { Rating } from "primereact/rating";
import Link from "next/link";

type TProduct = {
  _id: string;
  productName: string;
  description: string;
  price: number;
  isFlashSale: boolean;
  rating: number;
  image: string;
  category: string;
};

const Trending = async () => {
  const res = await fetch(
    "https://elegant-fashion-server.vercel.app/flash-sale",
    {
      cache: "no-store",
    }
  );
  const products = await res.json();

  // Sort products by rating in descending order
  const sortedProducts = products.data.sort(
    (a: TProduct, b: TProduct) => b.rating - a.rating
  );

  // Take the top 6 products
  const topRatedProducts = sortedProducts.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto my-20 px-3 lg:px-0 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Most Popular Products</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
            adipisci?
          </p>
        </div>
        <Link href="/products">
          <button className="group relative flex w-32 items-center rounded-lg border-2 border-red-600 p-3 text-red-600">
            <span>View All</span>
            <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-red-600 duration-300 group-hover:w-5/6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-5">
        {topRatedProducts.map((product: TProduct) => (
          <Link href={`/product-details/${product?._id}`} key={product?._id}>
            <div className="mx-auto rounded-xl bg-white px-4 pb-8 pt-4 shadow-lg ">
              <div className="relative h-full w-full flex justify-center lg:h-[280px]">
                <div className="absolute left-2 top-2 ">
                  <button className="rounded-xl bg-[#a22222] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                    30% off
                  </button>
                </div>
                <Image
                  width={500}
                  height={300}
                  className=" rounded-lg bg-black/40"
                  src={product?.image}
                  alt="Product Card"
                />
              </div>
              <div className="mx-auto space-y-2 text-center font-semibold">
                <h6 className="text-sm lg:text-lg text-black">
                  {product?.productName}
                </h6>
                <p className="text-xs font-semibold text-gray-400 md:text-sm">
                  {product?.category}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-around gap-6 text-sm md:text-base mt-4">
                <h3 className="text-black text-xl font-semibold">
                  ${product?.price}
                </h3>
                <Rating
                  className="text-yellow-500"
                  value={product?.rating}
                  readOnly
                  cancel={false}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
