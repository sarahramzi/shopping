import { useState } from "react";

export default function useCartFunction(productId) {
  const [quantity, setQuantity] = useState(0);

  function increment() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((x) => x.id === Number(productId));

    if (!item) {
      cart.push({ id: Number(productId), quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      setQuantity(1);
      return;
    }

    item.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    setQuantity(item.quantity);
    window.dispatchEvent(new Event("cartUpdated"));
  }

  function decrement() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((x) => x.id === Number(productId));
    if (!item) return;

    item.quantity -= 1;

    if (item.quantity <= 0) {
      const newCart = cart.filter((x) => x.id !== Number(productId));
      localStorage.setItem("cart", JSON.stringify(newCart));
      setQuantity(0);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      setQuantity(item.quantity);
    }
    window.dispatchEvent(new Event("cartUpdated"));
  }

  return { increment, decrement };
}
