import Image from "next/image";
import Link from "next/link";
import { Rating } from "primereact/rating";

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

const Banner = async () => {
  const res = await fetch(
    "https://elegant-fashion-server.vercel.app/flash-sale",
    {
      cache: "no-store",
    }
  );
  const products = await res.json();

  // products array
  const shuffledProducts = products.data.sort(() => Math.random() - 0.5);

  // Get the first 4 products from the array
  const randomProducts = shuffledProducts.slice(0, 3);

  return (
    <div className="relative h-screen w-full">
      <Image
        src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute top-0 left-0 right-0 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto bg-gray-800 bg-opacity-50 rounded-lg p-10">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Elegant Fashion
          </h1>
          <p className="text-lg">
            Explore our services and products. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In sequi quod quaerat perferendis,
            expedita reprehenderit.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {randomProducts.map((product: TProduct) => (
              <Link
                href={`/product-details/${product?._id}`}
                key={product?._id}
              >
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
      </div>
    </div>
  );
};

export default Banner;
