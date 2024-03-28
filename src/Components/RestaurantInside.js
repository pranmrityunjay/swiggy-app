import ListItems from "./ListItems";
import { useState } from "react";

const RestaurantInside = ({ data, showItems, changeShowIndex }) => {
  const funcg = () => {
    changeShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-2">
        <div className="flex justify-between " onClick={funcg}>
          <span className="font-bold">
            {data.title + "(" + data.itemCards.length + ")"}
          </span>
          <span>{"🔽"}</span>
        </div>
        <div>
          {showItems && (
            <ListItems props={data.itemCards} key={Math.random() * 1000} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInside;
