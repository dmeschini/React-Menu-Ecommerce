import React from 'react'
import useCartContext from '../store/CartContext'
import { Link } from 'react-router-dom'

function CartView() {    
    const {cart, removeFromCart,clearCart,calcPriceCart} = useCartContext();
    console.log("cart",cart)    
    if (cart.length ===0) return (    
    <div>    
    <h4>No hay productos en el Carrito</h4>        
    <Link to={`/`}>
            <button className='btn-primary'>Volver al Catálogo</button>
    </Link>      
    </div>
  )
  else {
    return <div>
     {cart.map(itemCart => {
        return <div key={itemCart.id}>
        <br />
        <h4>Producto: {itemCart.name}</h4>
        <h4>Cantidad: {itemCart.cant}</h4>
        <h4>Precio Unitario: {itemCart.price}</h4>
        <h4>Total del Producto$ {itemCart.cant * itemCart.price}</h4>        
        <button className='btn-danger' onClick={()=>removeFromCart(itemCart.id)}>Eliminar</button>        
      </div>
    })}
    <br />
    <h4 style={{color:'green'}}>Total del Carrito: ${calcPriceCart()}</h4>  
    <button className='btn-success'>Terminar Compra</button>
    <br />
    <br />
    <button className='btn-warning' onClick={clearCart}>Vaciar Carrito</button> 
    </div>
  }
}

export default CartView