import { resObj, SmallCards, WithLevelData } from "./Constants";
import { useState, useEffect, useContext } from "react";
import Seamer from "./Seamer";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "./createContext";
import User from "./User";

const Body = () => {
  const [newResObj, changeResObj] = useState([]);
  const [originalResObj, setOriginalResObj] = useState([]);
  const [newText, setNewText] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);
  const LabelData = WithLevelData(SmallCards);
  const { changeContextName, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await response.json();
    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setOriginalResObj(restaurants);
    changeResObj(restaurants);
  };

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return <h1>Looks Like you are offline</h1>;
  }

  if (newResObj.length === 0) {
    return <Seamer />;
  }

  // Update handleSearch to be used dynamically on input change
  const handleSearch = (text) => {
    const filterList = originalResObj.filter((temp) =>
      temp.info.name
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(text.toLowerCase().replace(/\s/g, ""))
    );
    changeResObj(filterList);
  };

  const handleClearSearch = () => {
    setNewText("");
    changeResObj(originalResObj);
    setIsTopRated(false);
  };

  const handleTopRated = () => {
    if (isTopRated) {
      changeResObj(originalResObj);
      setIsTopRated(false);
    } else {
      const TnewResObj = originalResObj.filter((res) => res.info.avgRating > 4);
      changeResObj(TnewResObj);
      setIsTopRated(true);
    }
  };

  return (
    <div>
      {/* Gorgeous Navbar */}
      <div className="flex items-center justify-between bg-gradient-to-r from-purple-400 to-blue-500 p-4 shadow-lg rounded-lg mb-6">
        {/* Search Input */}
        <div className="flex items-center space-x-4">
          <input
            className="border-2 border-gray-300 p-2 text-lg rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            placeholder="Search..."
            value={newText}
            onChange={(e) => {
              const text = e.target.value;
              setNewText(text);
              handleSearch(text); // Dynamic filtering as user types
            }}
          />
          <button
            className="bg-red-500 text-white p-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          onClick={handleTopRated}
        >
          {isTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>

        {/* User Input */}
        <input
          className="border-2 border-gray-300 p-2 text-lg rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          value={loggedInUser}
          onChange={(e) => changeContextName(e.target.value)}
        />
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-4">
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
