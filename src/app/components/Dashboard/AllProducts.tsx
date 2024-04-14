import Image from "next/image";
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

const AllProducts = async () => {
  const res = await fetch(
    "https://elegant-fashion-server.vercel.app/products",
    {
      cache: "no-store",
    }
  );
  const products = await res.json();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[95%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
          <tr className="bg-[#0095FF] text-white">
            <th className="py-4 px-6 text-lg text-left border-b">SL NO</th>
            <th className="py-4 px-6 text-lg text-left border-b">
              Product Image
            </th>
            <th className="py-4 px-6 text-lg text-left border-b">
              Product Name
            </th>
            <th className="py-4 px-6 text-lg text-left border-b">Category</th>
            <th className="py-4 px-6 text-lg border-b text-end">Price</th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.slice(0, 10).map((product: TProduct, i: number) => (
            <tr
              key={product._id}
              className="hover:bg-gray-50 border-b transition duration-300"
            >
              <td className="py-4 px-6 border-b text-xl font-medium">
                {i + 1}
              </td>
              <td className="py-4 px-4 flex justify-start">
                <Image
                  width={100}
                  height={100}
                  src={product?.image}
                  alt="table navigate ui"
                  className="h-16 w-16 object-cover bg-gray-300"
                />
              </td>
              <td className="py-4 px-6 border-b text-xl font-medium">
                {product?.productName}
              </td>
              <td className="py-4 px-6 border-b text-left">
                {product?.category}
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium text-end">
                ${product?.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
