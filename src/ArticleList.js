
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
//import { useParams , useSearchParams } from "react-router-dom";


const fetchPath = (params) => {
    let sort_by = params.get('sort_by'); 
    let order = params.get('order'); 
    let topic = params.get('topic');
    let result = {sort_by , order , topic};
    
    //console.log("params = " , params , " : sort_by = " , sort_by , " : order=" , order , " : topic=" , topic);
    
    if(!topic || topic === ""){
        result.topic= "all";
    }
    if(!order || order === ""){
        result.order= "desc";
    }
    if(!sort_by || sort_by === ""){
        result.sort_by= "created_at";
    }

    // does api use ?sort_by= or ?sort_by=
    //
    let sort = `sort_by=${sort_by}&order=${order}`;
    if(!sort_by){
        sort = "";
    }    
    
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
    result.path = path;    
    
    if (result.sort_by) result.sort_by.toLowerCase();
    if (result.order) result.order.toLowerCase();
    if (result.topic) result.topic.toLowerCase();
    if (result.path) result.path.toLowerCase();
    
    //console.log("fetch " , path);
    return result;
}



const ArticleList = (props) =>  {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    let navigate = useNavigate();    
    const params = (new URL(document.location)).searchParams;
    const fixed = fetchPath(params);        
    
    useEffect(() => {
        setIsLoading(true);
        fetch(fixed.path)
            .then((response) => response.json())
            .then((data) => {
                const { articles } = data;
                setArticles(articles);
                setIsLoading(false);                
            });
    }, [props.updateArticleList , fixed.path]); 
    
    if (isLoading) return <h3>Loading Articles...</h3>;

    function handleCardClick(article){        
        let path = "/article/" + article.article_id;
        navigate(path);
    }
    
    // client side sorting -- replace sorted with articles when confident backend sorts
    // const sortfn = (a,b) => a[fixed.sort_by] - b[fixed.sort_by];
    // const sorted = fixed.order === "desc" ? articles.sort(sortfn).reverse() : articles.sort(sortfn) ;
        
        return (
                <Row xs={1} md={4} className="mt-2 g-4">
                { articles.map((article, idx) => (
                    <Col>
                    <Card key={idx} bg='success'>
                    <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text></Card.Text>
                        <div>{article.topic} &nbsp; {article.created_at} &nbsp; votes {article.votes} &nbsp; comments {article.comment_count}</div>
                        </Card.Body>
                        <Button variant="primary" onClick={()=> handleCardClick(article)}>Go to article</Button>
                    </Card>
                    </Col>
            ))}
            </Row>
        );
};

export default ArticleList;



