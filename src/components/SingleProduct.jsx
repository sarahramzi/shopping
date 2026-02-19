import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

export default function SingleProduct({
  id,
  image,
  price,
  count,
  rate,
  title,
  category,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="group cursor-pointer bg-white/5 border border-white/10 
                 rounded-2xl hover:bg-white/10 hover:border-white/20
                 transition-all duration-300 overflow-hidden"
      dir="ltr"
    >
      <div className="relative w-full aspect-4/5 bg-black/20 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain 
                     p-6 group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between text-sm text-white/50">
          <span>{category}</span>

          {rate && (
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white/80">{rate}</span>
            </div>
          )}
        </div>

        <h2 className="mt-2 text-base font-semibold text-white line-clamp-2">
          {title}
        </h2>

        <div className="mt-3 text-lg font-extrabold text-white">${price}</div>
      </div>
    </div>
  );
}
