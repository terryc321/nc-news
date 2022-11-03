
import up_arrow from './up.png';
import down_arrow from './down.jpeg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { useParams , useSearchParams } from "react-router-dom";


function CollapsibleNavbar(props)  {

    let navigate = useNavigate();
    
    const handleNavClick = (event) => {
        event.preventDefault();
        navigate(event.target.id);
        props.updateArticles();
    }

    // const sortDateAsc = () => {
    //     navigate("?sortby=date&order=asc");
    //     props.updateArticles();
    // }
    
    // const sortDateDesc = () => {
    //     navigate("?sortby=date&order=desc");
    //     props.updateArticles();
    // }
    function encodeURLParams(searchObj){
        const {topic , order , sortby } = searchObj;
        return `/articles?topic=${topic}&sortby=${sortby}&order=${order}`;
    }
    
    function decodeURLParams(){
        let params = (new URL(document.location)).searchParams;
        let sortby = params.get('sortby'); 
        let order = params.get('order'); 
        let topic = params.get('topic'); 

        // console.log("navbar. params = " , params);
        // console.log("navbar. sortby = " , sortby);
        // console.log("navbar. order = " , order);
        // console.log("navbar . topic = " , topic);

        if(!topic || topic === ""){
            topic= "all";
        }
        if(!order || order === ""){
            order= "desc";
        }
        if(!sortby || sortby === ""){
            sortby= "date";
        }
        return { topic , sortby , order };
    }
        
    
    function selectTopic(t){
        let search = decodeURLParams();
        search = {...search , topic : t} ;
        const url = encodeURLParams(search);
        return url;
    }
    
    function selectSort(s , o){
        let search = decodeURLParams();
        //console.log("sort search=" , search)
        search = {...search , sortby : s , order : o} ;
        //console.log("sort searchB=" , search)
        const url = encodeURLParams(search);
        return url;
    }

    const dumbClick = (event) => {
        event.preventDefault();
        // console.log("target.value" , event.target.value);
        navigate(event.target.value);
        props.updateArticles();
    }

    
    
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">News Articles</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            <Nav.Link id={selectTopic("all")} onClick={handleNavClick} className="btn btn-link">All Topics</Nav.Link>
            <Nav.Link id={selectTopic("coding") } onClick={handleNavClick} className="btn btn-link">Coding</Nav.Link>
            <Nav.Link id={selectTopic("cooking") } onClick={handleNavClick} className="btn btn-link">Cooking</Nav.Link>
            <Nav.Link id={selectTopic("football")} onClick={handleNavClick} className="btn btn-link">Football</Nav.Link>


         <div style={{ layout: "flex"}}>
            <p style={{color:"white"}}>&nbsp; Date &nbsp; </p>
        
            <img width={30} height={30} src={up_arrow} alt="up arrow"
        onClick={ (event) => {
            event.preventDefault();
            navigate(selectSort("date","asc"));
            props.updateArticles();            
            }}
            />

            <img width={30} height={30} src={down_arrow} alt="up arrow"
        onClick={ (event) => {
            event.preventDefault();
            navigate(selectSort("date","desc"));
            props.updateArticles();            
            }}
            />
        </div>


        <div>
            <p style={{color:"white"}}>Comments</p>
        
            <img width={30} height={30} src={up_arrow} alt="up arrow"
        onClick={ (event) => {
            event.preventDefault();
            navigate(selectSort("comment_count","asc"));
            props.updateArticles();            
            }}
            />

            <img width={30} height={30} src={down_arrow} alt="up arrow"
        onClick={ (event) => {
            event.preventDefault();
            navigate(selectSort("comment_count","desc"));
            props.updateArticles();            
            }}
            />
        </div>


       <div>
            <p style={{color:"white"}}>&nbsp; &nbsp; Votes &nbsp; </p>
        
            <img width={30} height={30} src={up_arrow} alt="up arrow"
        onClick={ (event) => {
            event.preventDefault();
            navigate(selectSort("votes","asc"));
            props.updateArticles();            
            }}
            />

            <img width={30} height={30} src={down_arrow} alt="up arrow"
        onClick={ (event) => {
            event.preventDefault();
            navigate(selectSort("votes","desc"));
            props.updateArticles();            
            }}
            />
        </div>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;



    // <img width={30} height={30} src={up_arrow} alt="up arrow" />
// <img width={50} height={50} src={down_arrow} padding={0} margin={0} alt="down arrow" />
 
            // <Button value={selectSort("date","asc")} onClick={dumbClick} >date asc</Button>
            // <Button value={selectSort("date","desc")} onClick={dumbClick} >date desc</Button>

            // <Button value={selectSort("comment_count","asc")} onClick={dumbClick} >comments asc</Button>
            // <Button value={selectSort("comment_count","desc")} onClick={dumbClick} >comments desc</Button>

            // <Button value={selectSort("votes","asc")} onClick={dumbClick} >votes asc</Button>
            // <Button value={selectSort("votes","desc")} onClick={dumbClick} >votes desc</Button>
       
