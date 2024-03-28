import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //vannila redux --dont mutate the state  , returning was mandatory
      // const newState=[...state]
      // newState.items.push(action.payload)
      // return newState;

      //redux mutate the state,  uses immer library , and behind the scene all the implementation is like vannila
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //original State=["pizza"]
    clearCart: (state, action) => {
      // console.log(current(state))//pizaa
      // state=[]
      // console.log(state)//[]  but will not change the current state
      state.items.length = 0;

      // return []    original state will be empty
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
