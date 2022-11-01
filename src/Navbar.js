

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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">News Articles</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            <Link to="/articles/all" onClick={handleNavClick} className="btn btn-link">All Topics</Link>
            <Link to="/articles/coding" onClick={handleNavClick} className="btn btn-link">Coding</Link>
            <Link to="/articles/cooking" onClick={handleNavClick} className="btn btn-link">Cooking</Link>
            <Link to="/articles/football" onClick={handleNavClick} className="btn btn-link">Football</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;



