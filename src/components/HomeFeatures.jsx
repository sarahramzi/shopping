import { BadgeCheck, ShieldCheck, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "الکساندرا چن",
    city: "لس‌آنجلس",
    text: "اینجا تبدیل شده به انتخاب همیشگی من برای خرید باکیفیت. توجه به جزئیات و پشتیبانی مشتری واقعاً عالیه.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    verified: true,
  },
  {
    name: "مارکوس جانسون",
    city: "شیکاگو",
    text: "بالاخره یه فروشگاه پیدا کردم که کیفیت و استایل رو با هم داره. هر خریدی فراتر از انتظارم بوده.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    verified: true,
  },
  {
    name: "سوفی ویلیامز",
    city: "میامی",
    text: "این خرید یکی از بهترین تجربه‌هام بود. هم کیفیت عالی، هم حس لوکس و حرفه‌ای. واقعاً ارزشش رو داشت.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    verified: true,
  },
];

function StarsRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function HomeFeatures() {
  return (
    <section
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#0b0f17]"
      dir="rtl"
    >
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              نظر مشتریان ما
            </h2>
            <p className="mt-2 text-sm text-white/60">
              به جمع مشتریان راضی ما بپیوندید و با خیال راحت خرید کنید
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur
                           hover:bg-white/10 hover:border-white/20 transition p-6"
              >
                <StarsRow count={t.rating} />

                <p className="mt-4 text-sm leading-7 text-white/70">
                  “{t.text}”
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">
                        {t.name}
                      </div>
                      <div className="text-xs text-white/50">{t.city}</div>
                    </div>
                  </div>

                  {t.verified && (
                    <span
                      className="inline-flex items-center gap-1 rounded-full
                                     bg-emerald-500/10 text-emerald-300 border border-emerald-500/20
                                     px-3 py-1 text-xs font-bold"
                    >
                      <BadgeCheck className="h-4 w-4" />
                      تأیید شده
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                Trustpilot
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                SSL امن
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4" />
                نظرات تأیید شده
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
