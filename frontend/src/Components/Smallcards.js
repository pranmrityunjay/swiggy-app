import UserContext from "./createContext";
import { useState, useEffect, useContext } from "react";
export const SmallCards = (props) => {
    const { resData } = props;
    const data = useContext(UserContext);
    
    return (
      <div
        className="bg-white shadow-lg m-4 p-4 w-full sm:w-[200px] h-[300px] rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
        to={`/restaurants/${resData.info.id}`}
      >
        <div className="overflow-hidden rounded-lg">
          <img
            className="imgCard rounded-lg w-full h-[150px] object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
            alt={resData.info.name}
          />
        </div>
        <h4 className="font-bold py-2 text-lg truncate">{resData.info.name}</h4>
        <h6 className="text-gray-600 truncate">{resData.info.locality}</h6>
        <h6 className="text-gray-500 text-sm truncate">
          {resData.info.cuisines.map((temp, index) => (
            <span key={index} className="mr-1">{temp}</span>
          ))}
        </h6>
        <h6 className="text-sm text-gray-700">Delivery Time: {resData.info.deliveryTime} min</h6>
        <h6 className="text-sm text-gray-700">Rating: {resData.info.avgRating}</h6>
      </div>
    );
  };
  