import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";

export default function AllProducts() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useFetch("https://fakestoreapi.com/products");


  return (
    <div>
      <h1>AllProducts</h1>

      
      {isError && <h1>error while loading products</h1>}

      {isLoading && <h1>LOADING...</h1>}

      <div className="grid grid-cols-4">
        {products?.map((p) => (
          <ProductCard
            id={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}
