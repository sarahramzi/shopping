import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, User } from "lucide-react";
import useCartStore from "../stores/useCartStore";
import useUserStore from "../stores/useUserStore";
import logo from "../assets/Icon.png";

export default function Header() {
  const navigate = useNavigate();

  const totalQuantity = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0),
  );

  const { isLoggedIn } = useUserStore();

  const navClass = ({ isActive }) =>
    isActive ? "text-white" : "text-white/70 hover:text-white transition";

  return (
    <header className="w-full bg-[#0b0f17] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center gap-2 select-none"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 border border-violet-500/25">
              <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
            </span>
            <span className="text-xl font-extrabold tracking-wide">
              TrendStore
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <NavLink to="/" className={navClass}>
              خانه
            </NavLink>
            <NavLink to="/allproducts" className={navClass}>
              محصولات
            </NavLink>
            <NavLink to="/aboutus" className={navClass}>
              درباره ما
            </NavLink>
            <NavLink to="/contactus" className={navClass}>
              تماس با ما
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate(isLoggedIn ? "/profile" : "/login")}
              className="text-white/70 hover:text-white transition"
              aria-label={isLoggedIn ? "پروفایل" : "ورود"}
            >
              <User className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="relative text-white/70 hover:text-white transition"
              aria-label="سبد خرید"
            >
              <ShoppingBag className="h-5 w-5" />

              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-violet-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/10" />
    </header>
  );
}
