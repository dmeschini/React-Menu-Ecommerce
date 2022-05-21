import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext();
const useCartContext = ()=> useContext(CartContext);
export function CartContextProvider({children}){
  const [cart,setCart]=useState([]);  
  const addToCart =(item,cant)=>{
    if((inCart(item.id))){
      const newCart = cart.map(cartItem =>{
        if(cartItem.id===item.id){
          const copyItem = {...cartItem};
          copyItem.cant += cant;
          return copyItem;
        }
        else return cartItem;
      })
      setCart(newCart);
    }  
    else {
      const newItem={...item,cant};
      setCart([...cart,newItem]);
    }
  }

  function inCart(item){  
    if((cart.some(value => item === value.id)))return true;
    return false;
  }
  
  const removeFromCart = (id) =>{
    const newCart = [...cart];
    const cartFilter = newCart.filter(item =>{
      return item.id !== id;
    });
    setCart(cartFilter);
  }
  

  const contextFunction = ()=> console.log("Contexto Listo")
    return(
    <CartContext.Provider value={{contextFunction,cart,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>  
    
  )
}

export default useCartContext