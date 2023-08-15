// <<<<<<< HEAD
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items.pop();
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// =======
// // import { createSlice } from "@reduxjs/toolkit";



// // const cartSlice = createSlice({
// //   name: "cart",
// //   initialState: {
// //     items: {},
// //     totalItemsCount: 0,
// //     deliveryAddress: {},
// //     paymentMethod: {},
// //   },
// //   reducers: {
// //     addItem: (state, action) => {
// //       const item = state.items[action.payload.id];
// //       const quantity =
// //         item && item.hasOwnProperty("quantity")
// //           ? state.items[action.payload.id]?.quantity + 1
// //           : 1;
// //       state.items[action.payload.id] = { ...action.payload, quantity };
// //       state.totalItemsCount = state.totalItemsCount + 1;
// //     },
// //     removeItem: (state, action) => {
// //       const item = state.items[action.payload];
// //       if (!item) return;
// //       if (item.quantity > 1) {
// //         item.quantity -= 1;
// //         state.totalItemsCount--;
// //       } else {
// //         state.totalItemsCount--;
// //         delete state.items[action.payload];
// //       }
// //     },
// //     clearCart: (state) => {
// //       state.items = {};
// //       state.totalItemsCount = 0;
// //     },
// //     updateDeliveryAddress: (state, action) => {
// //       state.deliveryAddress = action.payload;
// //     },
// //     updatePaymentMethod: (state, action) => {
// //       state.paymentMethod = action.payload;
// //     },
// //   },
// // });

// // export const {
// //   addItem,
// //   removeItem,
// //   clearCart,
// //   updateDeliveryAddress,
// //   updatePaymentMethod,
// // } = cartSlice.actions;

// // export default cartSlice.reducer;






// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name : 'cart',
//     initialState : {
//         items : ["Banana" , "Apples"],
//     },
//     reducers : {
//         addItem : (state, action) => {
//             state.items.push(action.payload); 
//         },
//         removeItem : (state,action) => {
//             state.items.pop();
//         }, 
//         clearcart:(state) =>{
//             state.items = [];
//         },
//     },
// });

// export const { addItem, removeItem, clearcart } = cartSlice.actions;
// >>>>>>> 61330716ae83176775e703216924f0c732b083c9

// export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;