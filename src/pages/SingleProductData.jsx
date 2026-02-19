import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useCartStore from "../stores/useCartStore";
import { Truck, RotateCcw, ShieldCheck, ShoppingBag } from "lucide-react";

function Stars({ value = 0 }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < full ? "text-yellow-400" : "text-white/20"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function SingleProductData() {
  const { productId } = useParams();
  const pid = Number(productId);
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useFetch(
    `https://fakestoreapi.com/products/${productId}`,
  );

  const cart = useCartStore((s) => s.cart);
  const addToCart = useCartStore((s) => s.addToCart);
  const decFromCart = useCartStore((s) => s.decFromCart);

  const quantity = useMemo(() => {
    const item = cart.find((x) => x.id === pid);
    return item ? item.quantity : 0;
  }, [cart, pid]);

  const price = Number(data?.price || 0);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-white/60 font-medium">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="border border-red-500/30 bg-red-500/10 text-red-400 rounded-2xl p-6">
          خطا در دریافت اطلاعات محصول
          <div className="text-sm mt-2 opacity-80">{String(error || "")}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-130 bg-black/30">
            <img
              src={data.image}
              alt={data.title}
              className="absolute inset-0 w-full h-full object-contain p-10"
            />
          </div>

          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <Stars value={data.rating?.rate || 0} />
              <span>
                {data.rating?.rate || 0} ({data.rating?.count || 0} نظر)
              </span>
            </div>

            <h1 className="mt-4 text-3xl lg:text-4xl font-extrabold">
              {data.title}
            </h1>

            <div className="mt-6 text-3xl font-extrabold text-violet-400">
              ${price.toFixed(0)}
            </div>

            <p className="mt-6 text-white/70 leading-7 max-w-140">
              {data.description}
            </p>

            <div className="mt-10">
              {quantity === 0 ? (
                <button
                  onClick={() => addToCart(pid)}
                  className="h-12 px-8 rounded-xl bg-violet-600 text-white font-bold
                             hover:bg-violet-700 transition inline-flex items-center gap-2 shadow-lg shadow-violet-600/20"
                >
                  <ShoppingBag className="h-5 w-5" />
                  افزودن به سبد خرید
                </button>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 overflow-hidden h-12">
                      <button
                        onClick={() => decFromCart(pid)}
                        className="w-12 h-full hover:bg-white/10 transition"
                      >
                        −
                      </button>

                      <div className="w-14 h-full flex items-center justify-center font-bold">
                        {quantity}
                      </div>

                      <button
                        onClick={() => addToCart(pid)}
                        className="w-12 h-full hover:bg-white/10 transition"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => navigate("/cart")}
                      className="h-12 px-8 rounded-xl bg-violet-600 text-white font-bold
                                 hover:bg-violet-700 transition"
                    >
                      سبد خرید
                    </button>
                  </div>

                  <div className="text-emerald-400 font-semibold">
                    به سبد خرید اضافه شد!
                  </div>
                </div>
              )}
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-violet-400" />
                  <div>
                    <div className="text-sm font-bold">ارسال رایگان</div>
                    <div className="text-xs text-white/50 mt-1">
                      سفارش‌های بالای ۱۰۰$
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-emerald-400" />
                  <div>
                    <div className="text-sm font-bold">مرجوعی آسان</div>
                    <div className="text-xs text-white/50 mt-1">
                      ۳۰ روز ضمانت بازگشت
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-sky-400" />
                  <div>
                    <div className="text-sm font-bold">پرداخت امن</div>
                    <div className="text-xs text-white/50 mt-1">
                      SSL محافظت‌شده
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
