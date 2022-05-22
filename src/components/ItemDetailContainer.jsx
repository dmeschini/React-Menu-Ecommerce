import React, {useState,useEffect} from 'react';
//import articlesData from "../data/articlesData";
import { getItem as getData } from '../data/index';
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

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