import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useDeleteProduct() {
  const queryClinet = useQueryClient();

  const mutationFn = async (productId) => {
    const { data } = await axios.delete(
      `https://fakestoreapi.com/products/${productId}`,
    );

    return data;
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClinet.invalidateQueries(["all-products"]);
    },
    onError: () => {
      console.log('');
    },
  });
}
