import { useNavigate } from "react-router-dom";

export default function ProductCard({ title, price, image , id }) {

  const navigate = useNavigate()


  return (
    <div className="group cursor-pointer w-full h-60 max-w-[300px] border relative" onClick={() => navigate(`/product/${id}`) }>
      <img className="w-full aspect-square
       h-full object-contain" src={image} alt="" />
      <div className="hidden group-hover:flex justify-center items-center bg-[#00000077] absolute top-0 left-0 w-full h-full">
        <h2 className="text-center text-white">{title}</h2>
      </div>
    </div>
  );
}
