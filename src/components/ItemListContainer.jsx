import React, {useState,useEffect} from 'react';
import articlesData from "../data/articlesData";
import ItemList from './ItemList';

function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(articlesData);
    }, 2000);    
  })
}

function ItemListContainer(props) { 
  const [articles, setArticles]=useState([]);
  useEffect(()=>{
    getData().then((data)=>{
      setArticles(data);
    })
  },[]);  

  return (
    <div className='greeting'>
        <h3>{props.title}</h3>
        <ItemList articles={articles}/>

    </div>
  )
}

export default ItemListContainer