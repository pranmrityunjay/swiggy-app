import logoImage from "./logo1.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "./createContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [ans, loginLogOut] = useState("login");
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-16 h-auto mx-4" src={logoImage} alt="Logo" />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="flex justify-center space-x-8 text-white text-lg font-semibold">
          <li className="px-4">Online Status: {isOnline ? "✅" : "🔴"}</li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            <Link to="/About">About</Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">{loggedInUser}</li>
          <li className="font-bold hover:text-yellow-300 transition duration-300 ease-in-out">
            <Link to="/Cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </nav>

      {/* Login/Logout Button */}
      <div className="flex items-center">
        <button
          className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
          onClick={() => {
            loginLogOut(ans === "login" ? "Logout" : "login");
          }}
        >
          {ans}
        </button>
      </div>
    </header>
  );
};

export default Header;
