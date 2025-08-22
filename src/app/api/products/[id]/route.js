"use server";

import { NextResponse } from "next/server";
import { products } from "../data";

// Handle GET request for a single product
export async function GET(request, { params }) {
  const { id } = await params;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}
