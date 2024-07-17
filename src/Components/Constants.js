import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { createContext } from "react";
import { useState, useEffect } from "react";
import UserContext from "./createContext";
import { useContext } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

export const SmallCards = (props) => {
  const { resData } = props;
  const data = useContext(UserContext);
  return (
    <div
      className="bg-gray-100 m-4 p-4 w-[200px] h-300 rounded-lg hover:bg-gray-400"
      to={"/restaurants/" + resData.info.id}
    >
      <div>
        <img
          className="imgCard rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
          alt=""
        />
        <h4 className="font-bold py-4 text-lg">{resData.info.name}</h4>
        <h6>{resData.info.locality}</h6>
        <h6 style={{ wordWrap: "break-word" }}>
          {resData.info.cuisines.map((temp, index) => (
            <span key={index}>{temp + " "}</span>
          ))}
        </h6>
        <h6>{resData.info.costForTwoString}</h6>
        <h6>Delivery Time- {resData.info.deliveryTime} min</h6>
        <h6>Rating - {resData.info.avgRating} </h6>
        <h6>{data.loggedInUser}</h6>
      </div>
    </div>
  );
};

export const WithLevelData = (SmallCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 ">
          Promoted
        </label>
        <SmallCards {...props} />
      </div>
    );
  };
};

export const Container = () => {
   const [contextName, changeContextName] = useState("This is Context");
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: contextName, changeContextName }}
      >
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

