

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function CollapsibleNavbar(props)  {

    let navigate = useNavigate();
    
    const handleNavClick = (event) => {
        event.preventDefault();
        navigate(event.target.id);
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
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;



