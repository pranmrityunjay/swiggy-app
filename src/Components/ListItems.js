import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const ListItems = ({ props, showAddButton = true }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {props.map((temp) => (
        <div
          className="p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white relative flex flex-col"
          key={temp.card.info.id}
        >
          <div className="flex-grow">
            <h2 className="text-lg font-bold text-gray-800">
              {temp.card.info.name}
            </h2>
            <p className="text-gray-600 mt-1 mb-2">
              Price: ₹{temp.card.info.price / 100}
            </p>
            <p className="text-sm text-gray-500">{temp.card.info.description}</p>
          </div>

          <div className="mt-4 relative">
            <img
              className="w-full h-40 object-cover rounded-lg mb-4"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                temp.card.info.imageId
              }
              alt={temp.card.info.name}
            />
            {/* Conditionally render the Add to Cart button */}
            {showAddButton && (
              <button
                className="p-2 w-full bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out shadow-md"
                onClick={() => handleAddItem(temp)}
              >
                Add to Cart +
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
