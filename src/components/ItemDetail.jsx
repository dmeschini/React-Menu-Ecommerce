import React from 'react'

function ItemDetail({article}) {
  
  return (
    <div>
        <div key={article.id}>
          <br/>
          <h2>{article.name}</h2>
          <h4>$: {article.price}</h4>
          <h4>Stock: {article.stock}</h4>      
        </div>      

    </div>
  )
}

export default ItemDetail