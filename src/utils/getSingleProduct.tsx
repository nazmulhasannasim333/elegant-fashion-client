export const getSingleProduct = async (id: string) => {
  const res = await fetch(
    `https://elegant-fashion-server.vercel.app/product/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
