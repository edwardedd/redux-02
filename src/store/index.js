import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cart";


const store = configureStore({
    reducer: cartSlice.reducer
})

export const cartActions =  cartSlice.actions;

export default store;
