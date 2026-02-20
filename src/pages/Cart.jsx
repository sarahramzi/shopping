import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CartComponent from "../components/CartComponent";
import useCartStore from "../stores/useCartStore";
import useFetch from "../hooks/useFetch";
import { ArrowLeft, Lock } from "lucide-react";

export default function Cart() {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);

  const {
    data: products,
    isLoading,
    isError,
  } = useFetch("https://fakestoreapi.com/products");

  const { itemsCount, subtotal } = useMemo(() => {
    const itemsCount = cart.reduce((sum, x) => sum + x.quantity, 0);

    if (!Array.isArray(products)) return { itemsCount, subtotal: 0 };

    const map = new Map(products.map((p) => [p.id, p.price]));
    const subtotal = cart.reduce((sum, x) => {
      const price = map.get(x.id) || 0;
      return sum + price * x.quantity;
    }, 0);

    return { itemsCount, subtotal };
  }, [cart, products]);

  const shipping = subtotal > 0 ? 0 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div
        className="min-h-[60vh] bg-[#0b0f17] flex items-center justify-center px-4"
        dir="rtl"
      >
        <div className="max-w-lg w-full rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-white text-xl font-extrabold">
            سبد خرید خالی است!
          </h2>
          <p className="mt-2 text-white/60 text-sm">
            برای شروع خرید، محصولات را به سبد اضافه کنید.
          </p>
          <button
            onClick={() => navigate("/allproducts")}
            className="mt-6 h-11 px-6 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-700 transition"
          >
            رفتن به فروشگاه
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f17] min-h-screen" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-white">سبد خرید</h1>
          <p className="mt-2 text-white/50 text-sm">
            {itemsCount} آیتم در سبد شما
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartComponent key={item.id} item={item} />
            ))}

            <button
              type="button"
              onClick={() => navigate("/allproducts")}
              className="mt-2 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              ادامه خرید
            </button>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sticky top-6">
              <h2 className="text-white font-extrabold">خلاصه سفارش</h2>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between text-white/70">
                  <span>جمع جزء</span>
                  <span className="text-white">${subtotal.toFixed(0)}</span>
                </div>

                <div className="flex items-center justify-between text-white/70">
                  <span>ارسال</span>
                  <span className="text-white">
                    {shipping === 0 ? "رایگان" : `$${shipping}`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-white/70">
                  <span>مالیات</span>
                  <span className="text-white">${tax.toFixed(0)}</span>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white font-bold">مجموع</span>
                  <span className="text-white font-extrabold text-lg">
                    ${total.toFixed(0)}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-white/70 text-sm mb-2">کد تخفیف</div>
                <div className="flex gap-2">
                  <input
                    placeholder="کد را وارد کنید"
                    className="h-11 flex-1 rounded-xl bg-black/20 border border-white/10 px-4 text-sm text-white
                               placeholder:text-white/30 outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/30"
                  />
                  <button
                    type="button"
                    className="h-11 px-4 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition text-sm font-bold"
                  >
                    اعمال
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 h-12 w-full rounded-xl bg-violet-600 text-white font-extrabold hover:bg-violet-700 transition"
              >
                ادامه پرداخت
              </button>

              <div className="mt-5 flex items-center justify-center gap-2">
                {["VISA", "MC", "AMEX", "PayPal"].map((x) => (
                  <span
                    key={x}
                    className="h-7 px-3 rounded-md border border-white/10 bg-white/5 text-[10px] font-extrabold text-white/70 inline-flex items-center justify-center"
                  >
                    {x}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
                <Lock className="h-4 w-4" />
                پرداخت امن با رمزنگاری SSL
              </div>

              {isLoading && (
                <p className="mt-4 text-xs text-white/40 text-center">
                  در حال محاسبه قیمت‌ها...
                </p>
              )}
              {isError && (
                <p className="mt-4 text-xs text-red-200 text-center">
                  خطا در محاسبه قیمت‌ها
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
