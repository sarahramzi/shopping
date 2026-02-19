import { Gift, Sparkles, RotateCcw, Heart } from "lucide-react";

const PERKS = [
  {
    icon: Gift,
    title: "پیشنهادهای ویژه",
    desc: "تخفیف‌های اختصاصی و دسترسی زودتر به فروش‌ها",
    tone: "bg-violet-500/15 text-violet-300",
  },
  {
    icon: Sparkles,
    title: "جدیدترین‌ها اول",
    desc: "اولین نفر از محصولات و کالکشن‌های جدید باخبر شو",
    tone: "bg-amber-500/15 text-amber-300",
  },
  {
    icon: RotateCcw,
    title: "مرجوعی آسان",
    desc: "مرجوعی تا ۳۰ روز برای اعضای خبرنامه",
    tone: "bg-emerald-500/15 text-emerald-300",
  },
  {
    icon: Heart,
    title: "نکات استایل",
    desc: "ایده‌ها و پیشنهادهای استایل برای انتخاب بهتر",
    tone: "bg-sky-500/15 text-sky-300",
  },
];

export default function HomeGalleryStrip() {
  return (
    <section
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#0b0f17]"
      dir="rtl"
    >
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-600 blur-[120px] opacity-30" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-500 blur-[120px] opacity-30" />

            <div className="relative p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-extrabold text-white">
                    ۲۰٪ تخفیف برای اولین خرید
                  </h2>

                  <p className="mt-4 text-white/60 leading-7 max-w-xl">
                    در خبرنامه عضو شو و تخفیف‌های ویژه، دسترسی زودتر به محصولات
                    جدید و پیشنهادهای استایل رو دریافت کن.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
                    <input
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      className="h-12 flex-1 rounded-xl border border-white/10
                                 bg-white/5 px-4 text-sm text-white
                                 placeholder:text-white/40 outline-none
                                 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                    />

                    <button
                      type="button"
                      className="h-12 px-7 rounded-xl bg-violet-600 text-white font-bold
                                 hover:bg-violet-700 transition shadow-lg shadow-violet-600/30"
                    >
                      عضویت
                    </button>
                  </div>

                  <p className="mt-3 text-xs text-white/40">
                    با عضویت، قوانین حریم خصوصی را می‌پذیرید.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PERKS.map((p, idx) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-white/10
                                   bg-white/5 hover:bg-white/10 transition p-5"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`h-10 w-10 rounded-xl flex items-center justify-center ${p.tone}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>
                            <div className="text-sm font-extrabold text-white">
                              {p.title}
                            </div>
                            <div className="mt-1 text-xs text-white/60 leading-6">
                              {p.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="text-sm font-extrabold text-white">
                    عضویت در خبرنامه
                  </div>
                  <div className="mt-1 text-xs text-white/50">
                    از تخفیف‌ها و محصولات جدید باخبر شو.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    className="h-11 w-full md:w-70 rounded-xl
                               border border-white/10 bg-white/5 px-4 text-sm text-white
                               placeholder:text-white/40 outline-none
                               focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                  />

                  <button
                    type="button"
                    className="h-11 px-7 rounded-xl bg-violet-600 text-white font-bold
                               hover:bg-violet-700 transition shadow-lg shadow-violet-600/30"
                  >
                    عضویت
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
