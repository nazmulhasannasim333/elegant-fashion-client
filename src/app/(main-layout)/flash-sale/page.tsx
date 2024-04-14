import Image from "next/image";
import Link from "next/link";
import { Rating } from "primereact/rating";
import React from "react";

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

const FlashSale = async () => {
  const res = await fetch(
    "https://elegant-fashion-server.vercel.app/flash-sale",
    {
      cache: "no-store",
    }
  );
  const products = await res.json();

  return (
    <div className="my-16 mx-16">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Flash Sale</h1>
        </div>
        <div className="text-2xl font-bold">
          <span>2d</span> {/* Days */}
          <span>12:</span> {/* Hours */}
          <span>30:</span> {/* Minutes */}
          <span>15</span> {/* Seconds */}
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-5">
        {products.data.map((product: TProduct) => (
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

export default FlashSale;
