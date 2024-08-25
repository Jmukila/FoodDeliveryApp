import {createContext, useEffect, useState} from "react";
import { food_list } from "../assets/assets";
export const StoreContext =createContext(null)
//by using this storecontent we are using the 
const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});
    function addToCart(itemId)
    {   
        if(!cartItems[itemId])//if the item is not available in the cart it add the item and set to 1
        {
            setCartItems((c)=>({...c,[itemId]:1}));
        }
        else{//if the product is avalilable
            setCartItems((c)=>({...c,[itemId]:c[itemId]+1}));
        }
    }
    function removeFromCart(itemId)
    {   
            setCartItems((c)=>({...c,[itemId]:c[itemId]-1}));
    }
    function getTotalCartAmount()
    {
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount+=itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }
    
    const contextValue={
         addToCart,
         removeFromCart,
         food_list,
         cartItems,
         getTotalCartAmount
         
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;