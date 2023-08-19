import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        cart: cartSlice
    }
});

export default store;





/*
*Create Store
    -configureStore() - RTK(REDUX TOOL KIT)
*Provide my store to app
    - <Provider store = {store}> - import from react redux

*Slice
    RTK(REDUX TOOL KIT) - createSlice({
        name:"",
        initialState:
        reducers: {
            addItem: (state,action)=>{ state = action.payload }
        }
    })
    export {addItem, removeItem, clearCart} = cartSlice.actions;
    export default cartSlice.reducer;

put that slice into Store
        - {
            reducer : {
                cart : cartSlice
                user : userSlice
            }
        }
*/

