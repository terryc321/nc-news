import './ArticleList.css';
import Article from './Article';

import { useState, useEffect } from "react";

const ArticleList = (props) =>  {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        setIsLoading(true);        
        
        fetch(`https://mr-kipling-nc-news-backend.herokuapp.com/api/articles`)
            .then((response) => response.json())
            .then((data) => {
                const { articles } = data;
                setArticles(articles);
                setIsLoading(false);                
            });
    }, []); 
    
    if (isLoading) return <h3>Loading Articles...</h3>;
    
    const articleList = articles.map((article, index) => {
        return <Article key={index} article={article} />
    });

    return (
            <div>
            <h2>List of Available Articles</h2>
            <div className="articleList">{ articleList } </div>      
            </div>
    );
};

export default ArticleList;
