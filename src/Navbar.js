

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CollapsibleNavbar({setTopic})  {

    const handleSelect = (evKey , event) => {
        console.log(evKey);
    setTopic(evKey);
}

    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">News Articles</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown
      title="Topic"
      id="collasible-nav-dropdown"
      onSelect={handleSelect}>          
              <NavDropdown.Item eventKey="all" >All Topics</NavDropdown.Item>
              <NavDropdown.Item eventKey="coding" >Coding</NavDropdown.Item>
              <NavDropdown.Item eventKey="cooking" >Cooking
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="football" >Football</NavDropdown.Item>
              <NavDropdown.Divider />
          <NavDropdown.Item key="4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link >More deets</Nav.Link>
            <Nav.Link eventKey={2} >
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;


