
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useNavigate } from "react-router-dom";
//import Button from 'react-bootstrap/Button';

import { useState, useEffect } from "react";
import { useParams , useSearchParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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


const CommentAdd = (props) =>  {
    const [isLoading, setIsLoading] = useState(false);
    const [comments, setComments] = useState([]);

    const {article} = props;

    function addComment(comment){
        let path = `https://mr-kipling-nc-news-backend.herokuapp.com/api/articles/` + article.article_id + `/comments`;
        fetch(path,{
            method: 'POST',
            body: JSON.stringify({
                username : "cooljmessy" ,
                body : comment
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
            .then((data) => {
                const comment = data.comment;
                props.setRefreshComments(!props.refreshComments);
                
            });
    };

    function handleSubmit(event){
        let commentText = document.getElementById("commentText");
        addComment(commentText.value);        
        commentText.value = "";
    }

    // form 
    return (
            <>
        <Form>
            <FormGroup>
            <Label for="exampleText">-------- Add Your Comment Here -----------</Label>
            <Input type="textarea" name="text" id="commentText" />
            </FormGroup>
            <Button variant="primary" onClick={handleSubmit}>Add Comment</Button>  
        </Form>    
        
    </> 
    );    
};

export default CommentAdd;

