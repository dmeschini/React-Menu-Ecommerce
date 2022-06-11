import React from 'react'
import useCartContext from '../store/CartContext'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function CheckOut() {   
    const {cart,calcPriceCart,removeFromCart} = useCartContext();          
    if (cart.length === 0) return (    
      <div className='greeting'>    
      <h4>No hay productos en el Carrito</h4>        
      <Link to={`/`}>
              <button className='btn-primary'>Volver al Catálogo</button>
      </Link>      
      </div>
    )
    if (cart.length !== 0) {
         return (
         <div className='greeting'>
           <h2>Confirmar Compra</h2>
           {cart.map(itemCart => {
        return <div key={itemCart.id}>              
        <Table responsive bordered size="md">
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
      <td>{itemCart.cant}</td>
      <td>{itemCart.cant * itemCart.price}</td>
      <Button style={{ backgroundColor: 'darkred' }} className='btn-danger' onClick={()=>removeFromCart(itemCart.id)}>Eliminar</Button>
    </tr>    
  </tbody>
</Table>
      </div>
    })}
        <h3>Total de la Compra: ${calcPriceCart()}</h3>        
        <br />  
        <Link to={`/dataform`}>
            <button className='btn-primary'>Cargar Datos y Finalizar</button>
        </Link>      
        
        </div>
      )
    }          
}

export default CheckOut