export const getCategoryProduct = async (category: string) => {
  const res = await fetch(`http://localhost:5000/products/${category}`, {
    cache: "no-store",
  });
  return res.json();
};
