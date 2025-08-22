"use server";

export const getSingleProduct = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API ?? ""}/api/products/${id}`
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export const getAllProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API ?? ""}/api/products`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
};
