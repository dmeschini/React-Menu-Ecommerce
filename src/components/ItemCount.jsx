import React, { useState } from 'react'

function ItemCount(props) {
  const [count, setCount]=useState(props.initial);
  
  function handleAdd(){
   if(count<props.stock) setCount(count+1);
  }
  function handleSubstract(){
   if(count>1) setCount(count-1);
  }
  
    return (
    <div>        
        <div>
            <button className='btn-primary' onClick={handleSubstract}>-</button>
            <span>  {count}  </span>
            <button className='btn-primary' onClick={handleAdd}>+</button>
        </div>
        <br />
        <div>
            <button className='btn-primary' onClick={()=>props.onAdd(count)}>Agregar al Carrito</button>
        </div>
        <div>
        </div>
    </div>
  )
}

export default ItemCount