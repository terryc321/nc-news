
import { useState, useEffect } from "react";


const ArticleList = (props) =>  {
  const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState("all");
    
    
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");

  
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://mr-kipling-nc-news-backend.herokuapp.com/api/articles`)
      .then((response) => response.json())
      .then((data) => {
        const { articles } = data;
        setArticles(articles);
        setIsLoading(false);
        // one time use case for refresh
        //props.setRefreshItemList(false);
      });
  }, []); // props.refreshItemList    = !refresh     refresh = true then false, visa versa

  if (isLoading) {
    return <h3>Loading Articles...</h3>;
  }

    const theList = articles.map((article, index) => {
        console.log("article = " , article)
        return <li key={article.article_id} > {article.title} {article.created_at} {article.topic}</li>
  });

    
  return (
    <div>
      <h2>List of Available Articles</h2>
          <select id="sortByTopic" value={topic} onChange={(event)=>{
              console.log("sortByTopic changed to =" , event.target.value);
              setTopic(event.target.value);
          }}>
          <option value="all">all</option>
          <option value="coding">coding</option>      
          <option value="cooking">cooking</option>
          <option value="football">football</option>
      </select>

      
     <ul>
          { theList }
     </ul>
    </div>
  );
};



export default ArticleList;

          
