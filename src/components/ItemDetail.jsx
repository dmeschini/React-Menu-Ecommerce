import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react'
import useCartContext from '../store/CartContext'
import {Link} from 'react-router-dom'

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
          <br/>
          <h2>{article.name}</h2>
          <h4>$: {article.price}</h4>
          <h4>Stock: {article.stock}</h4>    
          {isInCart?
          <Link to={`/Cart`}>
          <button>Ir al Carrito</button>
          </Link>
          :
          <ItemCount onAdd={onAdd} stock={article.stock} initial={1}/>
        }          
        </div>      
    </div>
  )
}

export default ItemDetail