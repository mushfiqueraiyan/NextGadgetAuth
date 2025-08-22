import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import React from "react";
import ProductsHighlight from "@/components/ProductsHighlight";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductsHighlight />
    </div>
  );
};

export default Home;
