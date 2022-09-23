import React,{ useState,useEffect } from "react";
import Newscart from "./Newscart";


function News(props) {

  // Declaring states using useState

  const [articles,setArticles] = useState([]);
  const [totalResults,setTotalResults] = useState(0);
  const [page,setPage] = useState(1);



  // Fetching value from api

  const fetchNews = async() =>{           
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;    
    let value = await fetch(url);
    let data = await value.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
  }

  // Rendering the component only once

  useEffect(()=>{
  fetchNews();
  },[])


  // Logic for going to the previous page

  const prevBtn = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page - 1}`;
    let value = await fetch(url);
    let data = await value.json();
    setArticles(data.articles);
    setPage(page - 1);
  }


  // Logic for going to the next page

  const nextBtn = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page + 1}`;
    let value = await fetch(url);
    let data = await value.json();
    setArticles(data.articles);
    setPage(page + 1);
  }

  return (
    <div className="container">
      <h1 className="text-center" style={{ marginTop: "75px" }}>
        Top {props.category} News
      </h1>
      <div className="row">

        {/* Maping over the articles Array*/}

        {articles.map((e)=>{
          return <div className="col-md-4 my-4" key={e.url}>
                <Newscart title={e.title} description={e.description} imgUrl={e.urlToImage} newsUrl={e.url} mode={props.mode}/>
            </div>
        })}     


      </div>
      <div className="d-flex justify-content-between my-3">

        {/* Disabling the previous button if page size is 1 or less than 1*/ }

        <button
          disabled={page <= 1}    
          type="button"
          className="btn btn-dark"
          onClick={prevBtn}
        >
          Previous
        </button>

        {/* Disabling the next button if page no more pages are available */ }

        <button
          type="button"
          className="btn btn-dark"
          onClick={nextBtn}
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
        >
          Next
        </button>
      </div>
    </div>
  );
}


// setting default values to the props

News.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "general"
}


export default News;