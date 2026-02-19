import {
  Heart,
  Leaf,
  Users,
  Sparkles,
  Star,
  ArrowLeft,
} from "lucide-react";

import aboutus from "../assets/About.jpeg"

const STATS = [
  { value: "50K+", label: "مشتری راضی" },
  { value: "500+", label: "محصول" },
  { value: "15+", label: "کشور" },
  { value: "4.9", label: "میانگین امتیاز" },
];

const VALUES = [
  {
    icon: Heart,
    title: "کیفیت اولویت ماست",
    desc: "ما فقط بهترین متریال را انتخاب می‌کنیم و با دقت بالا محصولاتی می‌سازیم که ماندگار باشند.",
  },
  {
    icon: Leaf,
    title: "پایداری",
    desc: "متعهد به تأمین اخلاقی و رعایت اصول دوستدار محیط زیست در مسیر تولید هستیم.",
  },
  {
    icon: Users,
    title: "جامعه",
    desc: "ارتباط واقعی با مشتری‌ها و ساختن تجربه‌ای انسانی و قابل اعتماد برای ما مهم است.",
  },
  {
    icon: Sparkles,
    title: "نوآوری",
    desc: "همیشه در حال بهبود طراحی و فرآیندها هستیم تا تجربه‌ای مدرن و بهتر ارائه کنیم.",
  },
];

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-fuchsia-400">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#0b1220] text-white"
    >
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0c162a] to-[#0b1220]" />
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
              داستان ما
              <ArrowLeft className="h-3.5 w-3.5 opacity-70" />
            </span>

            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight">
              فشن که اعتماد به نفس می‌سازد
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base leading-7 text-slate-400">
              از سال ۲۰۱۸ با یک هدف ساده شروع کردیم: ساخت محصولاتی زیبا و باکیفیت
              که به افراد کمک کند سبک منحصربه‌فرد خودشان را بدون سازش روی کیفیت و
              اصول، بیان کنند.
            </p>
          </div>
        </div>

        {/* ---------- STATS BAR ---------- */}
        <div className="relative border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STORY SECTION ---------- */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0c162a] to-[#0b1220]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">
                از علاقه تا هدف
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                چیزی که با یک کالکشن کوچک از اکسسوری‌های دست‌ساز شروع شد، امروز
                تبدیل به یک مقصد خرید مدرن شده است. ما باور داریم طراحی زیبا و
                اصول اخلاقی می‌توانند کنار هم رشد کنند.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                هر محصول با دقت طراحی و تولید می‌شود. ما با تولیدکنندگانی کار
                می‌کنیم که به دستمزد منصفانه، شرایط کاری امن و مسیر پایدار متعهد
                هستند.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                جامعه‌ی مشتریان ما الهام‌بخش ماست. حمایت شما باعث می‌شود همیشه
                بهتر شویم و مرزهای کیفیت را جلوتر ببریم.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="relative overflow-hidden rounded-2xl aspect-4/3 bg-black/20">
                  <img
                    src={aboutus}
                    alt="Our store" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

                  <div className="absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-[#0f1a2d]/80 backdrop-blur px-4 py-3">
                    <div className="text-xs text-slate-300">از سال</div>
                    <div className="text-lg font-extrabold">۲۰۱۸</div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                      <Star className="h-4 w-4 text-yellow-400" />
                      تجربه خرید مطمئن و لوکس
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-500/15 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-linear-to-b from-[#0b1220] via-[#0c162a] to-[#0b1220]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">ارزش‌های ما</h2>
            <p className="mt-3 text-sm text-slate-400">
              اصولی که مسیر کاری ما را مشخص می‌کند
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6
                             shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                             hover:bg-white/7 transition"
                >
                  <div className="h-11 w-11 rounded-xl bg-fuchsia-500/10 border border-fuchsia-400/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-fuchsia-300" />
                  </div>

                  <div className="mt-5 text-base font-extrabold">
                    {v.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}