export const getSingleProduct = async (id: string) => {
  const res = await fetch(`http://localhost:5000/product/${id}`, {
    cache: "no-store",
  });
  return res.json();
};
