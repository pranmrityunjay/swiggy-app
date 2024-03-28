import logoImage from "./logo1.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useContext } from "react";
import UserContext from "./createContext";
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";

const Header = () => {
  const [ans, loginLogOut] = useState("login");
  const isOnline = useOnlineStatus();
  const data = useContext(UserContext);
  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div>
        <img className="w-20" src={logoImage} alt="Logo" />
      </div>

      <div className="navBar">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {isOnline ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          {/* <li><a href="/">Home</a></li>  */}

          <li className="px-4">
            <Link to="/About">About</Link>
          </li>

          <li className="px-4">
            <Link to="/Contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>{data.loggedInUser}</li>

          <li className="px-4 font-bold">
            <Link to="/Cart">Cart({cartItems.length})</Link>
          </li>
          <li className="px-4">
            <button
              onClick={() => {
                if (ans === "login") loginLogOut("Logout");
                else loginLogOut("login");
              }}
            >
              {ans}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
