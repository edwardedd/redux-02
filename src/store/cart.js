import {createSlice} from "@reduxjs/toolkit";

const initialCartState = {items: [], totalQuantity: 0,showCart: false};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },
        increment(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            } else {
                existingItem.quantity = existingItem.quantity+1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        decrement(state, action){
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        toggleCart(state){
            state.showCart = !state.showCart;
        }
    }
})
export const cartActions = cartSlice.actions
//https://react-cefc8-default-rtdb.europe-west1.firebasedatabase.app/

//https://console.firebase.google.com/u/0/project/react-cefc8/database/react-cefc8-default-rtdb/data
export default cartSlice;
