import React, {useState,useEffect} from 'react';
//import articlesData from "../data/articlesData";
import { getAllItems as getData, getItemsByCategory } from '../data/index';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'

function ItemListContainer(props) { 
  const {categoryid}=useParams()
  const [articles, setArticles]=useState([]);
  useEffect(()=>{
    if (categoryid===undefined){
    getData().then((data)=>{
      setArticles(data);
    });
  }
  else {
    getItemsByCategory(categoryid).then((data)=>{
      setArticles(data);
    });
  }
  },[categoryid]);  

  return (
    <div className='greeting'>
        <h3>{props.title}</h3>
        <ItemList articles={articles}/>

    </div>
  )
}

export default ItemListContainer