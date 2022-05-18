import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react'

function ItemDetail({article}) {
  const [isInCart, setIsInCart]= useState(false)
  function onAdd(count){
    console.log(`agregaste al carrito ${count}`);
    setIsInCart(true);
  }
  return (
    <div>
        <div key={article.id}>
          <br/>
          <h2>{article.name}</h2>
          <h4>$: {article.price}</h4>
          <h4>Stock: {article.stock}</h4>    
          {isInCart?
          <button>Ir al Carrito</button>
          :
          <ItemCount onAdd={onAdd} stock={article.stock} initial={1}/>
        }          
        </div>      
    </div>
  )
}

export default ItemDetail