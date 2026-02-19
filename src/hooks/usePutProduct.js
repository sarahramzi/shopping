import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function usePutProduct() {
  const queryClient = useQueryClient();

  const mutationFn = async ({ productId, productData }) => {
    const payload = {
      ...productData,
      price:
        productData.price !== undefined ? Number(productData.price) : undefined,
    };

    const { data } = await axios.put(
      `https://fakestoreapi.com/products/${productId}`,
      payload,
      { headers: { "Content-Type": "application/json" } },
    );

    return data;
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
    },
    onError: () => {},
  });
}
