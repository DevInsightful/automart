import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";
const Navbar = () => {
  // const user = useContext(UserContext);
  let user = null
  const routes = ["/", "/about", "/cars", "/contact"];
  const nav = routes.map((item, idx) => {
    let slicedItem = item.slice(1);
    slicedItem = item == "/" ? "Home" : slicedItem;
    return (
      <Link to={item}>
        <li className="text-white" key={idx}>
          {slicedItem.charAt(0).toUpperCase() + slicedItem.slice(1)}
        </li>
      </Link>
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

      {user ? (
        <FaShoppingCart className="text-white" />
      ) : (
        <Link to={"/login"} className="text-white">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
