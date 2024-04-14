export const getCategoryProduct = async (category: string) => {
  const res = await fetch(
    `https://elegant-fashion-server.vercel.app/products/${category}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
