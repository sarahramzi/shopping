import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetAllProducts() {
  const queryFn = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  };

  return useQuery({
    queryKey: ["all-products"],
    queryFn,
  });
}
