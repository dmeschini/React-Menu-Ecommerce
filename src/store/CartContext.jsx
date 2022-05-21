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
  const clearCart=()=>{setCart([])};
  const removeFromCart = (id) =>{
    const newCart = [...cart];
    const cartFilter = newCart.filter(item =>{
      return item.id !== id;
    });
    setCart(cartFilter);
  }
  function cantInCart(){   
    let cartItems=0;
    cart.forEach((item)=>cartItems +=item.cant);
    return cartItems;
  }
  const calcPriceCart =()=>{
    let total=0;
    cart.forEach(item=>total +=(item.price)*(item.cant));
    return total;
  }

  const contextFunction = ()=> console.log("Contexto Listo")
    return(
    <CartContext.Provider value={{contextFunction,cart,addToCart,removeFromCart,clearCart,cantInCart,calcPriceCart}}>
        {children}
    </CartContext.Provider>  
    
  )
}

export default useCartContext