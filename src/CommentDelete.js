
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// import { useNavigate } from "react-router-dom";
//import Button from 'react-bootstrap/Button';

// import { useState, useEffect } from "react";
// import { useParams , useSearchParams } from "react-router-dom";
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button } from 'reactstrap';

import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//     MDBCardImage,
//     MDBCardHeader,
//     MDBBtn,
// } from 'mdb-react-ui-kit';


const CommentDelete = (props) =>  {
    const {comment_id} = props;

    function deleteComment(){
        let path = `https://mr-kipling-nc-news-backend.herokuapp.com/api/comments/` + comment_id;
        fetch(path,{
            method: 'DELETE',
        }).then(response => {
                // const comment = data.comment;
            props.setRefreshComments(!props.refreshComments);
        })};
    
    function handleClick(event){
        event.preventDefault();
        deleteComment();
    }

    return (
            <>
            <Button variant="secondary" onClick={handleClick}>Delete Comment</Button>  
             </> 
    );    
};

export default CommentDelete;

