import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Newsitem from './Newsitem'

export default function News() {
    const [articles, setArticles] = useState([])
  const new_apikey = '0136fe82c40a410a95a44c39ac647728'
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()+1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' + dd;
  console.log(today)
    useEffect(()=>{
    axios.get(`https://newsapi.org/v2/everything?q=Covid%20vaccine&from=${today}&sortBy=publishedAt&apiKey=${new_apikey}`)
    .then(res=>{
      setArticles(res.data.articles)
      console.log(res.data.articles)
    })
    .catch(err=>console.log(err))
    },[])
    return (
        <div className="all_articles">
            {articles ? articles.map(article=>{
            return <Newsitem title={article.title} key={article.url} description={article.description} author={article.author} publishedAt={article.publishedAt} source={article.source.name} />
      }) : "Loading..."}
      
        </div>
    )
}
