import { useEffect, useState } from "react";
import useFetch from "./useFetch";

function getRandomItems(array, count = 4) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function useRandomProducts(url) {
  const { data, isLoading, isError, error } = useFetch(url);

  const [popular, setPopular] = useState([]);
  const [discounted, setDiscounted] = useState([]);

  useEffect(() => {
    const list = Array.isArray(data) ? data : [];

    const popularProducts = list.filter((item) => item.rating?.rate >= 4);

    const discountedProducts = list
      .filter((item) => item.rating?.count >= 300)
      .map((item) => ({
        ...item,
        isDiscounted: true,
        discountPercent: 20,
      }));

    setPopular(getRandomItems(popularProducts, 4));
    setDiscounted(getRandomItems(discountedProducts, 4));
  }, [data]);

  return { popular, discounted, isLoading, isError, error };
}
