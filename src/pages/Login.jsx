import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import usePostLogin from "../hooks/usePostLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
    .required("نام کاربری الزامی است"),
  password: yup
    .string()
    .min(4, "رمز عبور باید حداقل ۴ کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

export default function Login() {
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = usePostLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  function submitHandler(formData) {
    mutate(formData, {
      onSuccess: () => navigate("/admin"),
    });
  }

  return (
    <div className="min-h-[calc(100vh-140px)] w-full" dir="rtl">
      <div className="relative min-h-[calc(100vh-140px)] flex items-center justify-center px-4 py-10">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#2a0b5f]/80 via-[#4a2d7f]/70 to-[#0b0f17]/70" />

        <div className="relative w-full max-w-md rounded-[28px] border border-white/25 bg-white/10 backdrop-blur-xl shadow-2xl">
          <div className="px-8 py-10">
            <h1 className="text-center text-3xl font-extrabold text-white">
              ورود
            </h1>

            {isError && (
              <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                {String(error?.message || "خطا در ورود. دوباره تلاش کنید.")}
              </div>
            )}

            <form
              onSubmit={handleSubmit(submitHandler)}
              className="mt-10 space-y-8"
            >
              <div>
                <label className="block text-sm font-semibold text-white/90">
                  ایمیل / نام کاربری
                </label>
                <input
                  type="text"
                  placeholder="مثلاً: johnd"
                  {...register("username")}
                  className={`mt-3 w-full bg-transparent text-white placeholder:text-white/50
                              border-b-2 px-1 py-3 outline-none transition
                              focus:border-white/80
                              ${errors.username ? "border-red-400/80" : "border-white/30"}`}
                />
                {errors.username && (
                  <p className="mt-2 text-xs text-red-200">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/90">
                  رمز عبور
                </label>
                <input
                  type="password"
                  placeholder="مثلاً: m38rmF$"
                  {...register("password")}
                  className={`mt-3 w-full bg-transparent text-white placeholder:text-white/50
                              border-b-2 px-1 py-3 outline-none transition
                              focus:border-white/80
                              ${errors.password ? "border-red-400/80" : "border-white/30"}`}
                />
                {errors.password && (
                  <p className="mt-2 text-xs text-red-200">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm text-white/80">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/40 bg-white/10"
                  />
                  مرا به خاطر بسپار
                </label>

                <button
                  type="button"
                  onClick={() => alert("فعلاً پیاده‌سازی نشده 🙂")}
                  className="hover:text-white transition"
                >
                  فراموشی رمز عبور
                </button>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full h-12 rounded-full bg-white text-[#2a0b5f]
                           font-extrabold shadow-lg hover:opacity-95 transition
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isPending ? "در حال ورود..." : "ورود"}
              </button>

              <div className="text-center text-sm text-white/80">
                حساب کاربری ندارید؟{" "}
                <button
                  type="button"
                  className="font-extrabold text-white hover:underline"
                  onClick={() => navigate("/register")}
                >
                  ثبت‌نام
                </button>
              </div>

              <div className="mt-2 rounded-2xl border border-white/15 bg-white/5 p-4 text-xs text-white/80">
                <div className="font-bold mb-2">اطلاعات تست:</div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">نام کاربری:</span>
                  <span className="font-mono">johnd</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-white/60">رمز عبور:</span>
                  <span className="font-mono">m38rmF$</span>
                </div>
              </div>
            </form>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
        </div>
      </div>
    </div>
  );
}
