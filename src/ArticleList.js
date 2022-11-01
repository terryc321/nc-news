import './ArticleList.css';
import Article from './Article';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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
    
        return (
            <Row xs={1} md={4} className="g-4">
            {articles.map((article, idx) => (
                    <Col>
                    <Card bg='success'>
                    <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text></Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
            ))}
            </Row>
        );

    
};

export default ArticleList;
