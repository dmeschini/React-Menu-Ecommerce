import React from 'react'

function Itemlist({articles}) {
  return (
    <div>
        {articles.map((article)=>        
        <div key={article.id}>
          <h2>{article.name}</h2>
          <h4>$: {article.price}</h4>
          <h4>Stock: {article.stock}</h4>
          <br />
        </div>        
        )}

    </div>
  )
}

export default Itemlist