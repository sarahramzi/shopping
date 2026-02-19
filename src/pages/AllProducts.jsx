import { useEffect, useRef, useState, useMemo } from "react";
import SingleProduct from "../components/SingleProduct";
import useGetAllProducts from "../hooks/useGetAllProducts";

export default function AllProducts() {
  const { data, isLoading, isError, error } = useGetAllProducts();

  const [inputVal, setInputVal] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const timeoutRef = useRef();

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(inputVal);
    }, 500);

    return () => clearTimeout(timeoutRef.current);
  }, [inputVal]);

  const filteredProducts = useMemo(() => {
    if (!debouncedValue) return data || [];

    return data?.filter((item) =>
      item.title.toLowerCase().includes(debouncedValue.toLowerCase()),
    );
  }, [data, debouncedValue]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="text-lg font-medium text-gray-600">
          درحال بارگزاری ...{" "}
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="border border-red-200 bg-red-50 text-red-700 p-4 rounded-xl">
          {String(error || "مشکلی پیش امده لطفا بعدا تلاش کنید!")}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <input
        className="border px-3 py-2 mb-6 rounded-md"
        placeholder="جستجوی محصولات..."
        value={inputVal}
        onChange={(e) => setInputVal(e.currentTarget.value)}
        type="text"
      />

      <h1 className="text-2xl md:text-3xl font-bold text-white-800 mb-6">
        تمامی محصولات
      </h1>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mb-6">محصولی یافت نشد.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <SingleProduct
            key={item.id}
            {...item}
            rate={item.rating?.rate}
            count={item.rating?.count}
          />
        ))}
      </div>
    </div>
  );
}
