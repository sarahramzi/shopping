import { useEffect, useState } from "react";
import useFetch from "./useFetch";

function getRandomItems(array, count = 4) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function useRandomProducts(url) {
  const { data, isLoading, isError, error , rate , count } = useFetch(url);

  const [popular, setPopular] = useState([]);
  const [discounted, setDiscounted] = useState([]);

  useEffect(() => {
    const popularProducts = data.filter(
      (item) => item.rating?.rate >= 4
    );

    const discountedProducts = data.filter(
      (item) => item.rating?.count >= 300
    );

    setPopular(getRandomItems(popularProducts, 4));
    setDiscounted(getRandomItems(discountedProducts, 4));
  }, [data]);

  return {
    popular,
    discounted,
    isLoading,
    isError,
    error,
    rate,
    count
  };
}