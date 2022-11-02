
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


import { useState, useEffect } from "react";
import { useParams , useSearchParams } from "react-router-dom";



const ArticleList = (props) =>  {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    let {topic} = useParams();
    let navigate = useNavigate();

    
    useEffect(() => {

        let params = (new URL(document.location)).searchParams;
        let sortby = params.get('sortby'); 
        let order = params.get('order'); 

        console.log("sortby = " , sortby)
        console.log("order = " , order)

        // this is buggy
        
        let sort = `sortby=${sortby}&order=${order}`;
        if(!sortby){
            sort = "";
        }
        
        setIsLoading(true);

        let path = "";
        if (topic === "all"){
            path = `https://mr-kipling-nc-news-backend.herokuapp.com/api/articles`;
        }
        else {
            path = `https://mr-kipling-nc-news-backend.herokuapp.com/api/articles`;
            if(sort !== ""){
                sort = sort + "&topic=" + topic;   
            }
        }
        path = path + "?" + sort;
        
        fetch(path)
            .then((response) => response.json())
            .then((data) => {
                const { articles } = data;
                setArticles(articles);
                setIsLoading(false);                
            });
    }, [props.updateArticleList]); 
    
    if (isLoading) return <h3>Loading Articles...</h3>;

    function handleCardClick(article){        
        let path = "/article/" + article.article_id;
        navigate(path);
    }
        
        return (
                <Row xs={1} md={4} className="mt-2 g-4">
                { articles.map((article, idx) => (
                    <Col>
                    <Card key={idx} bg='success'>
                    <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text></Card.Text>
                        <div>{article.topic} &nbsp; {article.created_at}</div>
                        </Card.Body>
                        <Button variant="primary" onClick={()=> handleCardClick(article)}>Go to article</Button>
                    </Card>
                    </Col>
            ))}
            </Row>
        );
};

export default ArticleList;



