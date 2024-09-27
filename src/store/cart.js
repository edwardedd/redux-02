import {createSlice} from "@reduxjs/toolkit";


const initialCartState = {items: 0, showCart: false};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        increment(state){
            state.items++;
        },
        decrement(state){
            state.items--;
        },
        toggleCart(state){
            state.showCart = !state.showCart;
        }
    }
})

export default cartSlice;
