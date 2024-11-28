import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const routes = ["Home", "About", "Cars", "Contact"];
  const nav = routes.map((item, idx) => {
    return (
      <li className="text-white" key={idx}>
        {item}
      </li>
    );
  });
  return (
    <div className="flex justify-between items-center py-4 border-b-[1px] shadow-lg px-20">
      {/* <img src="" alt="" /> */}
      <p className="font-mono">
        <span className="text-white">Auto|</span>
        <span className="text-red-500">Mart</span>
      </p>
      <ul className="flex gap-5">{nav}</ul>

      <FaShoppingCart className="text-white" />
    </div>
  );
};

export default Navbar;
