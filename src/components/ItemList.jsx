import React from 'react'
import Item from './Item'

function Itemlist({articles}) {
  return (
    <div>
        {articles.map((article)=>        
           <Item key={article.id} articleIterado={article}/>
        )}
    </div> 
    ) 
}

export default Itemlist