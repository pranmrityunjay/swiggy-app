import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";
const ListItems = ({ props }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
};
  return (
    <div>
      {props.map((temp) => (
        <div
          className="p-2 m-2 border-gray-200 border border-b-black text-left flex"
          key={temp.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-left">
                {temp.card.info.name} - Price: {temp.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{temp.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-0.5 bg-white shadow-lg m-auto rounded-lg "
                onClick={() => handleAddItem(temp)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-full bg-white"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                temp.card.info.imageId
              }
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListItems;
