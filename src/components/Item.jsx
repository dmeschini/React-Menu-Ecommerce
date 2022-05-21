import React from 'react'
import { Link } from 'react-router-dom'

function Item({articleIterado}) {
  return (
    <div className='item'>
          <br/>
          <h2>{articleIterado.name}</h2>
          <h4>$: {articleIterado.price}</h4>
          <h4>Stock: {articleIterado.stock}</h4> 
          <Link to={`/article/${articleIterado.id}`}>
            <button className='btn-primary'>Ver Detalles</button>
          </Link>
    </div>
  )
}

export default Item