import { useMutation } from "@tanstack/react-query";
import axios from "axios";


export default function usePostAddProduct() {

  const mutationFn = async (addData) => {
    const { title, price } = addData;
    const { data } = await axios.post("https://fakestoreapi.com/products", {
      title: title,
      price: price,
    });

    return data;
  };

  return useMutation({
    mutationFn,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      if (error.status === 401) {
        console.log("Error on Adding new Product!!");
      }
    },
  });
}
