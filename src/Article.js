
//import Card from 'react-bootstrap/Card';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';

//import { useNavigate } from "react-router-dom";
//import Button from 'react-bootstrap/Button';

import Comments from './Comments';
import Votes from './Votes';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { useSearchParams } from "react-router-dom";

import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
//    MDBCardImage,
    MDBCardHeader,
//    MDBBtn,
} from 'mdb-react-ui-kit';


const Article = (props) =>  {
    const [isLoading, setIsLoading] = useState(false);
    const [article, setArticle] = useState({});

    let {article_id} = useParams();

    useEffect(() => {
        setIsLoading(true);

        let path = `https://mr-kipling-nc-news-backend.herokuapp.com/api/articles/` + article_id;
        fetch(path)
            .then((response) => response.json())
            .then((data) => {
                let incoming = data.article;
                let timestamp = incoming.created_at;
                incoming.day = timestamp.slice(0,10);
                incoming.hrs = timestamp.slice(11,20);
                setArticle(incoming);
                setIsLoading(false);
            });
    },[article_id]); 
    
    if (isLoading) return <h3>Loading Article...</h3>;

    return (
            <>
            <MDBCard>
            <MDBCardHeader>
            Article ID : {article.article_id} &nbsp;
        Author : {article.author}  &nbsp;
        Created : {article.day} at {article.hrs} &nbsp;
        
        </MDBCardHeader> 
            <MDBCardBody>
            <MDBCardTitle>{article.title}</MDBCardTitle>
            <MDBCardText>{article.body}</MDBCardText>
            <Votes article={article} />
            </MDBCardBody>
            </MDBCard>
            
            <Comments article={article}/>    
    </> 
    );    
};

export default Article;

