import { resObj,SmallCards,WithLevelData} from "./Constants";
import { useState, useEffect, useContext } from "react";
import Seamer from "./Seamer";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "./createContext";
import User from "./User";

const Body = () => {
  const [newResObj, changeResObj] = useState([]);
  const [newText, setNewText] = useState(" ");
  const LabelData = WithLevelData(SmallCards);
  const { changeContextName, loggedInUser } = useContext(UserContext);
  const [newName, changeSearch] = useState("Search");

  useEffect(() => {
    fethApi();
  }, []);

  const fethApi = async () => {
    const responce = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await responce.json();
    changeResObj(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const isOnline = useOnlineStatus();
  if (isOnline == false) {
    return <h1>Looks Like you are offline</h1>;
  }

  if (newResObj.length == 0) {
    return <Seamer />;
  }
  return (
    <div>
      <div className="flex items-center">
        <input
          className="border-2 border-solid border-black mx-2 p-1 text-base "
          placeholder="Search.."
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        />
        <button
          className="bg-green-300 p-1 rounded-sm"
          onClick={() => {
            const filterList = newResObj.filter((temp) =>
              temp.info.name
                .toLowerCase()
                .replace(/\s/g, "")
                .includes(newText.toLowerCase().replace(/\s/g, ""))
            );
            changeResObj(filterList);
          }}
        >
          Search
        </button>
        <button
          className="m-4 bg- py-1 px-4 rounded-sm mx-16 bg-red-500"
          onClick={() => {
            const TnewResObj = newResObj.filter(
              (res) => res.info.avgRating > 4
            );
            changeResObj(TnewResObj);
          }}
        >
          Top rated restaurant
        </button>
        <input
          className="border border-solid border-black mx-8 p-1 text-base"
          value={loggedInUser}
          onChange={(e) => changeContextName(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {newResObj.map((temp) => (
          <Link key={temp.info.id} to={"/restaurants/" + temp.info.id}>
            {temp.info.avgRating === 4.2 ? (
              <LabelData key={temp.info.id} resData={temp} />
            ) : (
              <SmallCards key={temp.info.id} resData={temp} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;