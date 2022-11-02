
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

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


const Votes = (props) =>  {

    const {article} = props;
    const initial_votes = article.votes;
    let hasVoted = false; 
    
    function handleLike(){        
        let path = `https://mr-kipling-nc-news-backend.herokuapp.com/api/articles/` + article.article_id;
        fetch(path , {
            method: 'PATCH',
            body: JSON.stringify({
                inc_votes: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
          .then((data) => {
                console.log("data = " , data);
              document.getElementById("votes").innerHTML=`` + (initial_votes + 1) + ` Votes`;
               
            });
    }

    function handleUnlike(){        
        let path = `https://mr-kipling-nc-news-backend.herokuapp.com/api/articles/` + article.article_id;
        fetch(path , {
            method: 'PATCH',
            body: JSON.stringify({
                inc_votes: -1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
          .then((data) => {
                console.log("data = " , data);
              document.getElementById("votes").innerHTML=`` + (initial_votes) + ` Votes`;               
            });
    }

    function likeUnlike(){
        if(hasVoted){
            handleUnlike();
        }
        else {
            handleLike();
        }
        hasVoted = !hasVoted;
        return ;
    }
    
    return (
        <>
            <Button variant="primary" onClick={likeUnlike} >Like</Button>
            <Button variant="secondary" onClick={likeUnlike} >Dislike</Button>            
            <div id="votes">{article.votes} Votes</div>
        </>
    );    
};

export default Votes;


