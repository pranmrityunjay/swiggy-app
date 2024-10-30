import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    currentRestaurant: null, 
  },
  reducers: {
    addItem: (state, action) => {
      const { item, restaurantId } = action.payload;
      if (state.currentRestaurant && state.currentRestaurant !== restaurantId) {
        state.items = []; 
        state.currentRestaurant = restaurantId; 
      } else if (!state.currentRestaurant) {
        state.currentRestaurant = restaurantId;
      }
      state.items.push(item);

      console.log("Updated currentRestaurant:", state.currentRestaurant);
    },
    clearCart: (state) => {
      state.items = []; 
      state.currentRestaurant = null; 
      console.log("Cart cleared. currentRestaurant reset to null.");
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
