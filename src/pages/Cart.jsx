import { useEffect, useState } from "react";

export default function Cart(){

  const [cart, setCart] = useState([]);


    useEffect(() => {
    const handler = () => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    };

    handler();
    window.addEventListener("cartUpdated", handler);
    return () => window.removeEventListener("cartUpdated", handler);
  }, []);


    return(
        <h1>
            سبد خرید
        </h1>


    
    )
}