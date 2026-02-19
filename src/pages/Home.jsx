import SingleProduct from "../components/SingleProduct";
import useRandomProducts from "../hooks/useRandomProducts";
import CategoryBanner from "../components/CategoryBanner";
import HomeFeatures from "../components/HomeFeatures";
import HomeGalleryStrip from "../components/HomeGalleryStrip";

export default function Home() {
  const { popular, discounted, isLoading, isError, error } = useRandomProducts(
    "https://fakestoreapi.com/products"
  );

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#0b0f17]">
        <span className="text-lg font-medium text-white/70">در حال بارگذاری...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#0b0f17] px-4">
        <div className="max-w-xl w-full rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-red-200">
          <div className="font-bold">خطا در دریافت اطلاعات</div>
          <div className="mt-2 text-sm opacity-80">{String(error || "")}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f17]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <CategoryBanner />

        <div className="mt-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
            محصولات پرطرفدار
          </h1>

          <section id="popularProducts">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">
                ⭐ محصولات محبوب
              </h2>
              <span className="text-sm text-white/50">امتیاز بالا از کاربران</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {popular.map((item) => (
                <SingleProduct
                  key={item.id}
                  {...item}
                  isDiscounted={false}
                  rate={item.rating?.rate}
                  count={item.rating?.count}
                />
              ))}
            </div>
          </section>

          <hr className="my-12 border-white/10" />

          <section id="discountedProducts">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">
                🔥 محصولات تخفیف‌دار
              </h2>
              <span className="text-sm text-white/50">بیشترین تعداد نظر</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {discounted.map((item) => (
                <SingleProduct
                  key={item.id}
                  {...item}
                  isDiscounted={true}
                  discountPercent={item.discountPercent}
                  rate={item.rating?.rate}
                  count={item.rating?.count}
                />
              ))}
            </div>
          </section>

          <div className="mt-12">
            <HomeFeatures />
          </div>

          <div className="mt-10">
            <HomeGalleryStrip />
          </div>
        </div>
      </div>
    </div>
  );
}