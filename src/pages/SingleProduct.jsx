import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function SingleProduct() {
  const { productId } = useParams();

  const { data, isLoading, isError } = useFetch(
    `https://fakestoreapi.com/products/${productId}`
  );

  const [quantity, setQuantity] = useState(0);



  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((x) => x.id === Number(productId));
    setQuantity(item ? item.quantity : 0);
  }, [productId]);


  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = cart.find((x) => x.id === Number(productId));
    if (item) {
      item.quantity += 1;
      setQuantity(item.quantity);
    } else {
      cart.push({ id: Number(productId), quantity: 1 });
      setQuantity(1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }

  function add() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((x) => x.id === Number(productId));

    if (!item) {
      cart.push({ id: Number(productId), quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      setQuantity(1);
      return;
    }

    item.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    setQuantity(item.quantity);
    window.dispatchEvent(new Event("cartUpdated"));
  }

  function remove() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((x) => x.id === Number(productId));
    if (!item) return;

    item.quantity -= 1;

    if (item.quantity <= 0) {
      const newCart = cart.filter((x) => x.id !== Number(productId));
      localStorage.setItem("cart", JSON.stringify(newCart));
      setQuantity(0);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      setQuantity(item.quantity);
    }
    window.dispatchEvent(new Event("cartUpdated"));
  }


  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
    
    <h1 className="max-w-5xl mx-auto text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
      {isLoading && "Loading..."}
      {!isLoading && !isError && data.title}
    </h1>

    {!isLoading && !isError && (
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
        
        <div className="flex justify-center mb-8">
          <img
            src={data.image}
            alt={data.title}
            className="h-80 object-contain"
          />
        </div>

        
        <div className="border-t pt-6 space-y-4">
        
          <p className="text-gray-700 leading-relaxed">
            {data.description}
          </p>

        
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">
              ${data.price}
            </span>

            <span className="flex items-center text-yellow-500 font-medium">
              ⭐ {data.rating?.rate}
            </span>
          </div>
          {quantity===0?(
            <button onClick={()=> setQuantity(quantity+1)} className="bg-rose-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-rose-700">
            افزودن به سبد خرید
          </button>

          ):(
            <div>
            <button onClick={add}>
              +

            </button>
            <span>
              {quantity}
            </span>
            <button onClick={remove}>
              -
            </button>
            </div>
          )}
          
        </div>

      </div>
    )}
  </div>
);
}
