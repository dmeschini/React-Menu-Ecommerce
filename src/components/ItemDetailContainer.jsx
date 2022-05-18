import React, {useState,useEffect} from 'react';
import articlesData from "../data/articlesData";
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

function getData(idRequested){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const productRequested = articlesData.find((article)=>article.id===Number(idRequested))
      resolve(productRequested);
    }, 500);    
  })
}

function ItemDetailContainer({title}) {    
  const {id}=useParams();
  const [article, setArticle]=useState({});
  useEffect(()=>{
    getData(id).then((data)=>{
      setArticle(data);      
    })
  },[id]);  

  return (
    <div> 
        <h4>{title}</h4>       
        <ItemDetail article={article}/>
    </div>
  )
}

export default ItemDetailContainer