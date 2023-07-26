import React, { useEffect, useState } from "react";
import './App.css';
import defaultimage from './defaultnews.jpg'



function App() {
  const [news,setNews]=useState([]);
  const [fetched,setFetched]=useState(false);
  // const [imgsrc,setImgsrc]=useState('');
  // const API_KEY='d48b8067e66147c9aa167452ce4d562f';
  // const url='https://newsapi.org/v2/top-headlines?country=in&apiKey='+API_KEY;
  const url='https://saurav.tech/NewsAPI/everything/cnn.json';
  

    const fetchnews=async ()=>{
      const response=await fetch(url)
      
      const data=await response.json();
      console.log(data);
      
        setNews(data.articles);
        
      }
    
    useEffect(()=>{
      fetchnews()

    },[])

    useEffect(()=>{
      if(news && news.length>0){
        // console.log(news[0].urlToImage);
        setFetched(true);
      }
    },[news])

    function defaultimgfun() {
      console.log('hellodh ');
      document.getElementById('image').src = {defaultimage};
  }

    
    

  return (
    <div className='main'>
    
      {/* <button onClick={print}>FETCH</button> */}
      <div className='heading'>
        <h1>You Are Scrolling </h1>
        <h1>VNEWS</h1>
      </div> 
      <hr></hr>
      {
      fetched ? (
        <div className='cards'>
          {news.map((i)=>

           ( <div className='card'>
                  <div className='img'>
                      <img id='image' src={i.urlToImage}  onError={defaultimgfun}></img>
                  </div>
                  <div className='title'>
                    <h2>{i.title}</h2>
                  </div>
                  <div className='desc'>
                    <p>{i.description}</p>
                    <p>{i.content}</p>
                  </div>
                  <div className='publishedat'>
                    <p>publishedAt:-{i.publishedAt}</p>
                    <p>Author:-{i.author}</p>
                  </div>
                  <div className='link'>
                    <a href={i.url}>
                      <button>click here -> </button>
                    </a>
                  </div>
            </div>)

          )}
        </div>)
          :(<h1>LOading...</h1>)
      }    
      
              
            

          
      
    </div>
  );
      
     


   
  
}

export default App;
