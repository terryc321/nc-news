

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


function CollapsibleNavbar()  {

    const handleNavClick = (event) => {
    }
    
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">News Articles</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            <Nav.Link to="/articles/all" onClick={handleNavClick} className="btn btn-link">All Topics</Nav.Link>
            <Nav.Link href="/articles/coding" onClick={handleNavClick} className="btn btn-link">Coding</Nav.Link>
            <Link href="/articles/cooking" onClick={handleNavClick} className="btn btn-link">Cooking</Link>
            <Link href="/articles/football" onClick={handleNavClick} className="btn btn-link">Football</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;



