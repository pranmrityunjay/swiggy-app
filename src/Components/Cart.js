import { useDispatch, useSelector } from "react-redux";
import ListItems from "./ListItems";
import { clearCart } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center" m-4 p-4>
      <h1 className="font-bold">Cart</h1>
      <button
        className="font-bold bg-green-400 m-4 shadow-lg rounded-lg p-1 "
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div>
        {cartItems.length == 0 && <h1>card is empty. Add items</h1>}
        <ListItems props={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
