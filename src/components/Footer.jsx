import { NavLink } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ShoppingBag,
} from "lucide-react";
import logo from "../assets/Icon.png";
import visa from "../assets/Visa.png";
import mc from "../assets/MC.png";
import amex from "../assets/Amex.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f17] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 border border-violet-500/25">
                <img
                  src={logo}
                  alt="logo"
                  className="h-10 w-10 object-contain"
                />
              </span>
              <span className="text-xl font-extrabold tracking-wide">
                TrendStore
              </span>
            </div>

            <p className="text-sm text-white/60 leading-7 max-w-sm">
              مجموعه‌ای منتخب از محصولات باکیفیت و مدرن برای استایل روزمره و
              خاص. تجربه خرید سریع، امن و مطمئن.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Instagram, aria: "Instagram" },
                { Icon: Facebook, aria: "Facebook" },
                { Icon: Twitter, aria: "Twitter" },
                { Icon: Youtube, aria: "Youtube" },
              ].map(({ Icon, aria }) => (
                <a
                  key={aria}
                  href="#"
                  aria-label={aria}
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition
                             flex items-center justify-center text-white/70 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white">فروشگاه</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <NavLink
                  className="hover:text-white transition"
                  to="/allproducts"
                >
                  تمامی محصولات
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-white transition"
                  to="/#popularProducts"
                >
                  محصولات محبوب
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-white transition"
                  to="/#discountedProducts"
                >
                  محصولات تخفیف دار
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white">راهنما</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <NavLink className="hover:text-white transition" to="#faq">
                  سوالات متداول
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-white transition" to="#returns">
                  ارسال و مرجوعی
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-white transition"
                  to="#size-guide"
                >
                  راهنمای سایز
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-white transition" to="#contact">
                  تماس با ما
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-white transition" to="#orders">
                  پیگیری سفارش
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white">درباره</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <NavLink className="hover:text-white transition" to="/aboutus">
                  داستان ما
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-white transition"
                  to="#sustainability"
                >
                  مسئولیت‌پذیری
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-white transition" to="#careers">
                  فرصت‌های شغلی
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-white transition" to="#press">
                  رسانه‌ها
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="text-xs text-white/50">
            © {year} TrendStore. تمامی حقوق محفوظ است.
          </div>

          <div className="flex items-center gap-6">
            <NavLink
              className="text-xs text-white/50 hover:text-white transition"
              to="#privacy"
            >
              حریم خصوصی
            </NavLink>
            <NavLink
              className="text-xs text-white/50 hover:text-white transition"
              to="#terms"
            >
              قوانین
            </NavLink>

            <div className="flex items-center gap-3">
              {[visa, mc, amex].map((icon, i) => (
                <span
                  key={i}
                  className="h-8 w-12 rounded-md border border-white/10 
                 bg-white/5 flex items-center justify-center"
                >
                  <img
                    src={icon}
                    alt="payment"
                    className="h-6 object-contain opacity-80"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
