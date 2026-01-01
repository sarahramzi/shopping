import useRandomProducts from "../hooks/useRandomProducts";
import ProductCard from "../components/ProductCard";

export default function Home() {
const {
    popular,
    discounted,
    isLoading,
    isError,
    } = useRandomProducts("https://fakestoreapi.com/products");
    return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {isLoading ?? <h1>Loading..!</h1>}
        {isError ?? <h1 className="text-red-500">{error}</h1>}
      </div>

      <div>

              <h2>⭐️ محصولات پرطرفدار</h2>
      <div className="grid grid-cols-4 gap-2">
        {popular.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      <h2 className="mt-10">🔥محصولات تخفیف دار</h2>
      <div className="grid grid-cols-4 gap-2">
        {discounted.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      </div>
    </>
  );
}