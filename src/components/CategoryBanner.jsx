import { useNavigate } from "react-router-dom";
import { Gift, ShieldCheck } from "lucide-react";

import backgroundImage from "../assets/background.jfif";

export default function WelcomeBanner() {
  const navigate = useNavigate();

  return (
    <section
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw]"
      dir="rtl"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl min-h-115 md:min-h-140">
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-l from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs text-white backdrop-blur">
              کالکشن بهار / تابستان ۱۴۰۴
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-2xl">
              استایل روزمره‌ات رو
              <br />
              <span className="text-violet-400">ارتقا بده</span>
            </h1>

            <p className="mt-5 text-sm md:text-base text-white/75 leading-7 max-w-xl">
              مجموعه‌ای از محصولات مدرن و باکیفیت را کشف کن. طراحی‌هایی ماندگار
              برای سبک زندگی امروزی.
            </p>

            <div className="mt-8">
              <button
                onClick={() => navigate("/allproducts")}
                className="h-12 px-8 rounded-xl bg-violet-600 text-white font-bold
                           hover:bg-violet-700 transition"
              >
                مشاهده محصولات
              </button>
            </div>

            <div className="mt-14 grid grid-cols-3 max-w-xl divide-x-reverse divide-x divide-white/15 rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-6 py-5">
              <div className="text-center px-3">
                <div className="text-white text-2xl font-extrabold">50K+</div>
                <div className="mt-1 text-xs text-white/60">مشتری خوشحال</div>
              </div>

              <div className="text-center px-3">
                <div className="text-white text-2xl font-extrabold">
                  4.9<span className="text-yellow-300">★</span>
                </div>
                <div className="mt-1 text-xs text-white/60">میانگین امتیاز</div>
              </div>

              <div className="text-center px-3">
                <div className="text-white text-2xl font-extrabold">500+</div>
                <div className="mt-1 text-xs text-white/60">محصول متنوع</div>
              </div>
            </div>

            <div className="hidden lg:block absolute left-10 bottom-14 space-y-4">
              <div className="w-65 rounded-2xl bg-white/10 border border-white/15 backdrop-blur px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
                    <Gift className="h-5 w-5 text-violet-200" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      ارسال رایگان
                    </div>
                    <div className="text-white/60 text-xs mt-1">
                      برای سفارش‌های بالای ۱۰۰ دلار
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-65 rounded-2xl bg-white/10 border border-white/15 backdrop-blur px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-emerald-200" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      پرداخت امن
                    </div>
                    <div className="text-white/60 text-xs mt-1">
                      پرداخت ۱۰۰٪ محافظت‌شده
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
