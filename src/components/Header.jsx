import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    const [cart, setCart] = useState(0);

  useEffect(() => {
    const handler = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setCart(totalQuantity);
    };

    handler();

    window.addEventListener("cartUpdated", handler);

    return () => {
      window.removeEventListener("cartUpdated", handler);
    };
  }, []);
    return (
    <div>
      <header className="py-4 px-2 shadow-lg flex items-center justify-between" dir="rtl">
        <div className="flex gap-4">
        <button onClick={() => navigate("/")} className="bg-blue-100 px-4 py-2 rounded-md cursor-pointer" cursor="pointer">خانه</button>
        <button onClick={() => navigate("/allproducts")} className="bg-blue-100 px-4 py-2 rounded-md cursor-pointer" cursor="pointer">تمامی محصولات</button>
        <button  onClick={() => navigate("/aboutus")} className="bg-blue-100 px-4 py-2 rounded-md cursor-pointer">درباره ما</button>
      </div>
      <button
          onClick={() => navigate("/cart")}
          className="relative bg-rose-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-rose-700"
        >
      سبد خرید
          {cart > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
              {cart}
            </span>
          )}
        </button>
      </header>
    </div>
  );
}