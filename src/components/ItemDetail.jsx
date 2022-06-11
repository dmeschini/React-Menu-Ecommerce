import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react'
import useCartContext from '../store/CartContext'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function ItemDetail({article}) {
  const [isInCart, setIsInCart]= useState(false)
  const {addToCart}=useCartContext();

  function onAdd(count){    
    setIsInCart(true);
    addToCart(article,count);
    console.log("agregado al cart:",article,count);
  }
  return (
    <div>
        <div key={article.id}>
        <Card bg='light' border='primary' style={{ width: '18rem' }}>
        <Card.Header>{article.name}</Card.Header>
          <Card.Img variant="top" src={article.url} />          
          <Card.Body> 
          <h4>$: {article.price}</h4>
          <h4>Stock: {article.stock}</h4>    
          {isInCart?
          <Link to={`/Cart`}>
          <button className='btn-success'>Ir al Carrito</button>
          </Link>
          :
          <div>
           <h3>Compra tus items</h3>
           <ItemCount onAdd={onAdd} stock={article.stock} initial={1}/>
          </div>
        }     
          </Card.Body>          
        </Card>
        </div>      
    </div>
  )
}

export default ItemDetail