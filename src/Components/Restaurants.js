import { useState, useEffect } from "react";
import Seamer from "./Seamer";
import { useParams } from "react-router-dom";
import RestaurantInside from "./RestaurantInside";

const Restaurants = () => {
  const [newList, changeList] = useState(null);
  const { resId } = useParams();
  const [newItem, changeItem] = useState([]);
  const [showIndex, changeShowIndex] = useState(null);
  
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER#"
    );
    const json = await response.json();
    changeList(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel
    );
    const categories = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    changeItem(categories);
  };

  if (newList == null) return <Seamer />;
  
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Restaurant Name</h1>
      <h3 className="text-center text-xl mb-2">Menu Items</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {newList.map((obj) => (
          <div className="bg-white rounded-lg shadow-lg p-4" key={obj.dish.info.id}>
            <h4 className="font-semibold text-lg">{obj.dish.info.name}</h4>
            <p className="text-gray-700">Price: ₹{(obj.dish.info.price / 100).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <h3 className="text-center text-xl mb-2">Categories</h3>
      <ul className="space-y-2">
        {newItem.map((temp, i) => (
          <li key={i} className="border-b border-gray-300 pb-2">
            <button
              className="text-left w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
              onClick={() => changeShowIndex(i === showIndex ? null : i)}
            >
              {temp.card.card.title} ({temp.card.card.itemCount}) {showIndex === i ? "🔽" : "🔼"}
            </button>
            {i === showIndex && (
              <RestaurantInside
                data={temp.card.card}
                showItems={true}
                changeShowIndex={() => changeShowIndex(i)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
