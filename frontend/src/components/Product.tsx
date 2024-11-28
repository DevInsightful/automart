import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

interface ProductProps {
  title: string;
  price: number | string;
  image: string;
}

const Product = ({ title, price, image }: ProductProps) => {
  const { dispatch }: any = useContext(UserContext);
  return (
    <div className="bg-white/10 rounded-lg p-6 text-white flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-48 h-48 rounded-lg mb-4 mx-auto"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-lg font-semibold">{price}</p>
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
        className="border border-[#c2f22d] hover:bg-[#c2f22d] hover:text-black text-white font-bold py-1 px-4 rounded mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
