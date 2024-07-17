import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Components/cartSlice.js"

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
    },
});

export default appStore;