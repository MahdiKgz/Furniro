import React from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { RotatingLines } from "react-loader-spinner";
import ProductCard from "../components/ProductCard";

function Shop() {
  const products = useProducts();
  console.log(products);

  return (
    <div data-aos='fade-down' data-aos-duration='2000' className="container flex items-center justify-center flex-wrap gap-y-4 gap-x-5  lg:gap-y-7 lg:gap-x-16">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}

export default Shop;
