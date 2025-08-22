import React from "react";
import AddProductForm from "@/components/modules/product/AddProduct";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AddProductPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <AddProductForm />;
};

export default AddProductPage;
