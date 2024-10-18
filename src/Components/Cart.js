import { useDispatch, useSelector } from "react-redux";
import ListItems from "./ListItems";
import { clearCart } from "./cartSlice";
import { useState, useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Function to calculate total amount of items in the cart
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.card.info.price / 100, 0);
    setTotalAmount(total);
  };

  const handlePayment = () => {
    alert("Proceeding to Payment..."); 
    // You can later integrate with a payment gateway here.
  };

  return (
    <div className="text-center m-4 p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="font-bold text-3xl mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <h1 className="text-xl text-gray-600">Your cart is empty. Add items to it!</h1>
      ) : (
        <>
          {/* Clear Cart Button */}
          <div className="flex justify-between items-center mb-6">
            <button
              className="font-bold bg-red-500 text-white shadow-md rounded-lg px-6 py-2 hover:bg-red-600 transition-colors"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            {/* Total Amount Display */}
            <h2 className="font-semibold text-xl text-gray-800">
              Total Amount: ₹{totalAmount.toFixed(2)}
            </h2>
          </div>

          {/* Cart Items */}
          <ListItems props={cartItems} showAddButton={false} />

          {/* Proceed to Payment Button */}
          <div className="mt-8">
            <button
              className="font-bold bg-blue-500 text-white shadow-lg rounded-lg px-8 py-3 hover:bg-blue-600 transition-all"
              onClick={handlePayment}
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
