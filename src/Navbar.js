
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

    const sortDateAsc = () => {
        navigate("?sortby=date&order=asc");
        props.updateArticles();
    }
    
    const sortDateDesc = () => {
        navigate("?sortby=date&order=desc");
        props.updateArticles();
    }
   
    
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">News Articles</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            <Nav.Link id={"/articles/all"} onClick={handleNavClick} className="btn btn-link">All Topics</Nav.Link>
            <Nav.Link id={"/articles/coding"} onClick={handleNavClick} className="btn btn-link">Coding</Nav.Link>
            <Nav.Link id={"/articles/cooking"} onClick={handleNavClick} className="btn btn-link">Cooking</Nav.Link>
            <Nav.Link id={"/articles/football"} onClick={handleNavClick} className="btn btn-link">Football</Nav.Link>

            <Button id={"?sort_by=date&order=asc"} onClick={sortDateAsc} ><img width={30} height={30} src={up_arrow} alt="up arrow" /></Button>
            <Button id={"?sort_by=date&order=desc"} onClick={sortDateDesc} ><img width={50} height={50} src={down_arrow} padding={0} margin={0} alt="down arrow" /></Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;



