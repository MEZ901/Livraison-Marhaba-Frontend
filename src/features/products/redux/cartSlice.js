import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      )
      if(existingIndex === -1)
        {
          //  state.cartItems.push(action.payload)
          state.cartItems.push({ ...action.payload, quantity: 1,total:0 });



        }
        else  
           {
              // state.cartItems[existingIndex].cartTotalQuantity+=1
              state.cartItems[existingIndex].quantity += 1;


           } 
           localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        } ,
    
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      )
      if (state.cartItems[itemIndex].quantity > 1)
        {
          state.cartItems[itemIndex].quantity -= 1;

        }
        else if (state.cartItems[itemIndex].quantity === 1)  
           {
              const nextCartItems = state.cartItems.filter(
              (item) => item._id !== action.payload._id );
              state.cartItems=nextCartItems;

           } 

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state,action)
    {
      const nextCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id );
        state.cartItems=nextCartItems
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    },
    clearCart(state,action)
      {
        state.cartItems=[]
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      },
      // subTotal(state,action)
      // {
      //   let total=0
      //        state.cartItems.map(item=>{
      //           total +=(item.prix) * (item.quantity)
      //           return total
         

      //   })
      //   state.cartTotalAmount=total

      //     // alert(total)
     

      // },
      subTotal(state, action) {
        let total = 0;
      
        if (Array.isArray(state.cartItems)) {
          state.cartItems.forEach((item) => {
            total += item.price * item.quantity;
          });
        }
      
        state.cartTotalAmount = total;
      },
      
  }
    })

    export const {addToCart ,  decreaseCart,removeFromCart,clearCart,subTotal} = cartSlice.actions;
    export default cartSlice.reducer




