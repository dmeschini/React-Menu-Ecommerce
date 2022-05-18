import React, {useState,useEffect} from 'react';
import articlesData from "../data/articlesData";
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'

function getData(categoryid){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if (categoryid===undefined) resolve(articlesData)
      const productRequested = articlesData.filter((articles)=>articles.category===categoryid)
      resolve(productRequested);
    }, 500);    
  })
}

function ItemListContainer(props) { 
  const {categoryid}=useParams()
  const [articles, setArticles]=useState([]);
  useEffect(()=>{
    getData(categoryid).then((data)=>{
      setArticles(data);
    })
  },[categoryid]);  

  return (
    <div className='greeting'>
        <h3>{props.title}</h3>
        <ItemList articles={articles}/>

    </div>
  )
}

export default ItemListContainer