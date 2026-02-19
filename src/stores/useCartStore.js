import { create } from "zustand";

const useCartStore = create((set, get) => {
  return {
    cart: [],
    count: 0,
    increment: () => set((prev) => ({ count: prev.count + 1 })),
    decrement: () => set((prev) => ({ count: prev.count - 1 })),
    clearCart: () => set({ cart: [] }),
    addToCart: (productId) => {
      const { cart: currentCart } = get();
      const foundIndex = currentCart.findIndex((item) => item.id == productId);

      if (foundIndex === -1) {
        set((prev) => ({
          cart: [...prev.cart, { id: productId, quantity: 1 }],
        }));
      } else {
        set((prev) => ({
          cart: prev.cart.map((item, index) =>
            index === foundIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }));
      }
    },
    decFromCart: (productId) => {
      const { cart: currentCart } = get();
      const foundIndex = currentCart.findIndex((item) => item.id == productId);

      if (foundIndex === -1) {
        return;
      } else {
        const { cart: currentCart } = get();
        const qtt = currentCart[foundIndex].quantity;

        if (qtt > 1) {
          set((prev) => ({
            cart: prev.cart.map((item) =>
              item.id == productId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            ),
          }));
        } else {
          currentCart.splice(foundIndex, 1);
          const copy = structuredClone(currentCart);

          copy.splice(foundIndex, 1);

          set({ cart: copy });
        }
      }
    },
  };
});

export default useCartStore;
