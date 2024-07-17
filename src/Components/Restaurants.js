import { useState, useEffect } from "react";
import Seamer from "./Seamer";
import { useParams } from "react-router-dom";
import useFindTheData from "../hooks/useFindTheData";
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
    const responce = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER#"
    );
    const json = await responce.json();
    changeList(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .carousel
    );
    const categories =
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    changeItem(categories);
  };

  if (newList == null) return <Seamer />;
  return (
    <div>
      <h1 className="text-center">Resturant Name</h1>
      <h3 className="text-center">Menu items</h3>
      <ul>
        {newList.map((obj) => (
          <li className="text-center" key={obj.dish.info.id}>
            {obj.dish.info.name +
              " " +
              "price" +
              " " +
              obj.dish.info.price / 100}
          </li>
        ))}
      </ul>
      {newItem.map((temp, i) => (
        <RestaurantInside
          key={i}
          data={temp.card.card}
          showItems={i == showIndex}
          changeShowIndex={() => changeShowIndex(i)}
        />
      ))}
    </div>
  );
};

export default Restaurants;
