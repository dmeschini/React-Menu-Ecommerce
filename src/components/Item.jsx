import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function Item({articleIterado}) {
  return (
    <div>
         <div>
         <Card bg='light' border='primary' >
        <Card.Header>{articleIterado.name}</Card.Header>
          <Card.Img style={{ width: '10rem', height: '10rem'}} variant="top" src={articleIterado.url} />          
          <Card.Body> 
          <h4>$: {articleIterado.price}</h4>           
          <Link to={`/article/${articleIterado.id}`}>
            <button className='btn-primary'>Ver Detalles</button>
          </Link>
          </Card.Body>
        </Card>
         </div>  
       </div>
  )
}

export default Item