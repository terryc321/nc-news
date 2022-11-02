
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import CommentAdd from './CommentAdd';

import { useState, useEffect } from "react";
import { useParams , useSearchParams } from "react-router-dom";

import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
    MDBCardImage,
    MDBCardHeader,
    MDBBtn,
} from 'mdb-react-ui-kit';


const Comments = (props) =>  {
    const [isLoading, setIsLoading] = useState(false);
    const [comments, setComments] = useState([]);

    const [refreshComments, setRefreshComments] = useState(false);

    const {article} = props;

    useEffect(() => {
        setIsLoading(true);

        let path = `https://mr-kipling-nc-news-backend.herokuapp.com/api/articles/` + article.article_id + `/comments`;
        fetch(path)
            .then((response) => response.json())
            .then((data) => {
                const comments = data.comments;
                setComments(comments);
                setIsLoading(false);
                console.log("comments = " , comments);
            });
    }, [refreshComments]); 
    
    if (isLoading) return <h3>Loading Comments...</h3>;

    return (
            <>
            {  comments.map((comment,idx) => {
                return (
                        <Card key={idx}>
                     <Card.Body>{comment.body} <br/>
                        {comment.created_at} &nbsp; {comment.votes} votes
                    
                    </Card.Body>
                    
                  </Card>
                )
            }) }
            <CommentAdd
        article={article}
        refreshComments={refreshComments}
        setRefreshComments={setRefreshComments}
            />
    </> 
    );    
};

export default Comments;

