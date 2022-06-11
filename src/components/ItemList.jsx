import React from 'react'
import Item from './Item'

function Itemlist({articles}) {
  return (
    <div  className='container item'>
        {articles.map((article)=>  
           <Item key={article.id} articleIterado={article}/>
        )}
    </div> 
    ) 
}

export default Itemlist