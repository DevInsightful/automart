import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../context/ProductContextProvider";
import { headerImg } from "../assets";

const Products = () => {
  const data = useContext(ProductContext);
  return (
    <div className="bg-gradient-to-r from-[#182840] to-[#0d0e11] flex gap-5 flex-wrap py-10 px-20 justify-center items-center">
      {data.map(({title,price},id) => {
        return <Product key={id} title={title} image={headerImg} price={price}  />;
      })}
    </div>
  );
};

export default Products;


