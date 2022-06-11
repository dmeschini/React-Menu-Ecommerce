import React from 'react'
import useCartContext from '../store/CartContext'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function CartView() {    
    const {cart, removeFromCart,clearCart,calcPriceCart,addToCart} = useCartContext();    
    console.log("cart",cart);  

    function updateCart(item,op){  
      if((cart.some(value => item.id === value.id))){                     
        if(op==='add' && item.cant<item.stock)addToCart(item,1);
        if(op==='subst' && item.cant>1)addToCart(item,-1)
      }  
    }

    if (cart.length ===0) return (    
    <div>    
    <h4>No hay productos en el Carrito</h4>        
    <Link to={`/`}>
            <button className='btn-primary'>Volver al Catálogo</button>
    </Link>      
    </div>
  )
  else {
    return <div className='greeting'>    
    <Table responsive>
      <tbody>
        <tr>
        <th><h2 style={{ color: 'darkgreen' }}>Carrito de Compras</h2></th>
      <Button style={{ backgroundColor: 'yellow' }} size="sm" className='btn-warning' onClick={clearCart}>Vaciar Carrito</Button>
        </tr>      
      </tbody>
    </Table>          
      
     {cart.map(itemCart => {      
        return <div key={itemCart.id}>              
 <Table responsive bordered size="md" >
  <thead>
    <tr>      
      <th></th>
      <th>Nombre</th>
      <th>Precio Unitario</th>
      <th>Cantidad</th>
      <th>Total del Producto</th>
    </tr>
  </thead>
  <tbody>
    <tr>    
      <img variant="top" src={itemCart.url} alt='Imagen' style={{ width: '5rem' }} />  
      <td>{itemCart.name}</td>
      <td>{itemCart.price}</td>
      <Button style={{ backgroundColor: 'darkblue' }} className='btn-primary' onClick={()=>updateCart(itemCart,'subst')} >-</Button>
        <span>  {itemCart.cant}  </span>
      <Button style={{ backgroundColor: 'darkblue' }} className='btn-primary' onClick={()=>updateCart(itemCart,'add')} >+</Button>      
      <td>{itemCart.cant * itemCart.price}</td>
      <Button style={{ backgroundColor: 'darkred' }} className='btn-danger' onClick={()=>removeFromCart(itemCart.id)}>Eliminar</Button>
    </tr>    
  </tbody>
</Table>
      </div>
    })}
    <br />
    <h4 style={{color:'green'}}>Total del Carrito: ${calcPriceCart()}</h4>      
    <Link to={`/CheckOut`}>
    <Button size="lg" className='btn-success'>Ir al CheckOut</Button>
    </Link> 
    <br />
    <br />     
    </div>
  }
}

export default CartView