import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useCartStore from "../stores/useCartStore";
import { X } from "lucide-react";

export default function CartComponent({ item }) {
  const { data, isLoading, isError } = useFetch(
    `https://fakestoreapi.com/products/${item.id}`,
  );

  const navigate = useNavigate();

  const addToCart = useCartStore((s) => s.addToCart);
  const decFromCart = useCartStore((s) => s.decFromCart);

  if (isLoading) {
    return (
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
        <p className="text-white/60 text-sm">در حال بارگذاری محصول...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-5">
        <p className="text-red-200 text-sm">خطا در دریافت اطلاعات محصول</p>
      </div>
    );
  }

  const totalPrice = data.price * item.quantity;
  const unitPrice = data.price;

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/7 transition">
      <div className="flex gap-4">
        <button
          onClick={() => navigate(`/product/${item.id}`)}
          className="w-24 h-24 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0"
          type="button"
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-contain p-2"
          />
        </button>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-sm md:text-base line-clamp-1">
                {data.title}
              </h3>
              <p className="mt-1 text-xs text-white/50 line-clamp-1">
                {data.category}
              </p>
            </div>

            <button
              type="button"
              className="text-white/40 hover:text-white/70 transition"
              title="حذف (اختیاری)"
              onClick={(e) => e.preventDefault()}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="inline-flex items-center rounded-xl border border-white/10 bg-black/20 overflow-hidden h-10">
              <button
                type="button"
                onClick={() => decFromCart(item.id)}
                className="w-10 h-full text-white/70 hover:bg-white/10 transition"
              >
                −
              </button>
              <div className="w-12 h-full flex items-center justify-center text-sm font-bold text-white">
                {item.quantity}
              </div>
              <button
                type="button"
                onClick={() => addToCart(item.id)}
                className="w-10 h-full text-white/70 hover:bg-white/10 transition"
              >
                +
              </button>
            </div>

            <div className="text-right">
              <div className="text-white font-extrabold">
                ${totalPrice.toFixed(0)}
              </div>
              <div className="text-xs text-white/40">
                ${unitPrice.toFixed(0)} هر عدد
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
