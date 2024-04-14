import { getSingleProduct } from "@/utils/getSingleProduct";
import Image from "next/image";
import { Rating } from "primereact/rating";
import React from "react";

const ProductDetails = async ({ params }: any) => {
  const { data: product } = await getSingleProduct(params.productId);

  return (
    <div className="my-16 mx-16">
      <div className="flex justify-center items-start gap-5">
        <div className="lg:w-[50%] w-full">
          <Image
            width={500}
            height={500}
            className="w-full h-[600px] rounded-lg bg-black/40"
            src={product.image}
            alt="Product Card"
          />
        </div>
        <div className="lg:w-[50%] w-full mt-5">
          <h2 className="text-4xl font-semibold">{product?.productName}</h2>
          <h3 className="my-4 text-2xl text-red-700 font-semibold">
            ${product?.price}
          </h3>
          <Rating
            className="text-yellow-500"
            value={product?.rating}
            readOnly
            cancel={false}
          />
          <p className="mt-5 text-2xl">{product?.description}</p>
          <ul className="my-5">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius
              aperiam dignissimos illo iusto temporibus quae non facilis odio
              sed.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius
              aperiam dignissimos illo iusto temporibus quae non facilis odio
              sed.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius
              aperiam dignissimos illo iusto temporibus quae non facilis odio
              sed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
