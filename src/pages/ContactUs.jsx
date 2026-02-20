import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    q: "شرایط مرجوعی شما چیست؟",
    a: "تا ۷ روز امکان مرجوعی دارید، اگر محصول استفاده نشده باشد.",
  },
  {
    q: "ارسال چقدر زمان می‌برد؟",
    a: "معمولاً بین ۲ تا ۴ روز کاری بسته به شهر مقصد.",
  },
  {
    q: "ارسال بین‌المللی دارید؟",
    a: "فعلاً خیر. در آینده این قابلیت اضافه می‌شود.",
  },
  {
    q: "چطور سفارش را پیگیری کنم؟",
    a: "از بخش «پیگیری سفارش» در حساب کاربری استفاده کنید.",
  },
];

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((s) => !s)}
      className="w-full text-right rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7 transition px-5 py-4"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-bold text-white">{item.q}</div>
        <ChevronDown
          className={`h-4 w-4 text-white/60 transition ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && (
        <div className="mt-3 text-xs leading-6 text-white/60">{item.a}</div>
      )}
    </button>
  );
}

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">در تماس باشید</h1>
          <p className="mt-3 text-sm text-white/60 max-w-2xl mx-auto leading-7">
            سوال یا پیشنهادی دارید؟ خوشحال می‌شیم ازتون بشنویم. تیم ما همیشه
            آماده‌ی کمک کردنه.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
              <div className="mx-auto h-11 w-11 rounded-2xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                <Mail className="h-5 w-5 text-violet-300" />
              </div>
              <div className="mt-4 font-bold">ایمیل</div>
              <div className="mt-2 text-xs text-white/60">پاسخ‌گویی سریع</div>
              <div className="mt-3 text-sm text-violet-300">
                hello@nini-store.com
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
              <div className="mx-auto h-11 w-11 rounded-2xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                <Phone className="h-5 w-5 text-violet-300" />
              </div>
              <div className="mt-4 font-bold">تماس</div>
              <div className="mt-2 text-xs text-white/60">
                شنبه تا پنجشنبه ۸ تا ۱۸
              </div>
              <div className="mt-3 text-sm text-violet-300">۰۹۱۲-۱۲۳-۴۵۶۷</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
              <div className="mx-auto h-11 w-11 rounded-2xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-violet-300" />
              </div>
              <div className="mt-4 font-bold">چت آنلاین</div>
              <div className="mt-2 text-xs text-white/60">پشتیبانی ۲۴/۷</div>
              <div className="mt-3 text-sm text-violet-300">شروع گفتگو</div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-xl font-extrabold">ارسال پیام</h2>
            <p className="mt-2 text-sm text-white/60">
              فرم را پر کنید؛ حداکثر تا ۲۴ ساعت آینده پاسخ می‌دهیم.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/70">نام</label>
                  <input className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#0f1623] px-4 text-sm outline-none focus:ring-2 focus:ring-violet-500/30" />
                </div>
                <div>
                  <label className="text-xs text-white/70">نام خانوادگی</label>
                  <input className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#0f1623] px-4 text-sm outline-none focus:ring-2 focus:ring-violet-500/30" />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/70">ایمیل</label>
                <input className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#0f1623] px-4 text-sm outline-none focus:ring-2 focus:ring-violet-500/30" />
              </div>

              <div>
                <label className="text-xs text-white/70">موضوع</label>
                <select className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#0f1623] px-4 text-sm outline-none focus:ring-2 focus:ring-violet-500/30">
                  <option>سوال عمومی</option>
                  <option>پیگیری سفارش</option>
                  <option>مرجوعی</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-white/70">پیام</label>
                <textarea className="mt-2 min-h-35 w-full rounded-xl border border-white/10 bg-[#0f1623] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-500/30" />
              </div>

              <button
                type="button"
                className="h-12 w-full rounded-xl bg-violet-600 text-white font-extrabold hover:bg-violet-700 transition"
              >
                ارسال پیام
              </button>
            </form>
          </div>

          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h2 className="text-xl font-extrabold">سوالات متداول</h2>
              <p className="mt-2 text-sm text-white/60">
                پاسخ سوالات رایج را اینجا پیدا کنید.
              </p>

              <div className="mt-6 space-y-3">
                {FAQS.map((f, i) => (
                  <FaqItem key={i} item={f} />
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-bold">هنوز سوال دارید؟</div>
                <div className="mt-2 text-xs text-white/60 leading-6">
                  اگر جواب موردنظر را پیدا نکردید، با پشتیبانی چت کنید.
                </div>
                <button
                  type="button"
                  className="mt-3 text-sm text-violet-300 hover:text-violet-200 transition"
                >
                  شروع چت آنلاین →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-7">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-extrabold">بازدید حضوری</h2>
              <p className="mt-2 text-sm text-white/60 leading-7">
                محصولات را از نزدیک ببینید. تیم ما آماده‌ی راهنمایی شماست.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-2xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-violet-300" />
                  </span>
                  <div>
                    <div className="text-sm font-bold">آدرس</div>
                    <div className="mt-1 text-xs text-white/60">
                      تهران، خیابان مثال، پلاک ۱۲۳
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-2xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-violet-300" />
                  </span>
                  <div>
                    <div className="text-sm font-bold">ساعات کاری</div>
                    <div className="mt-1 text-xs text-white/60 leading-6">
                      شنبه تا پنجشنبه: ۱۰ تا ۲۰
                      <br />
                      جمعه: ۱۲ تا ۱۷
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0f1623] min-h-55 flex items-center justify-center">
              <div className="text-white/40 text-sm">نقشه</div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="text-sm font-extrabold">عضویت در خبرنامه</div>
              <div className="mt-1 text-xs text-white/60">
                از تخفیف‌ها و محصولات جدید باخبر شو.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="h-11 w-full md:w-70 rounded-xl border border-white/10 bg-[#0f1623] px-4 text-sm outline-none
                           focus:ring-2 focus:ring-violet-500/30"
              />
              <button
                type="button"
                className="h-11 px-7 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-700 transition"
              >
                عضویت
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
