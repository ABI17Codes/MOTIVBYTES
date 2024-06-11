import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg"  bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">MOTIVBYTES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-light">
            <Nav.Link className='px-3 fw-bold' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='px-3 fw-bold' as={Link} to="/about">About</Nav.Link>
            <Nav.Link className='px-3 fw-bold' as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link className='px-3 fw-bold' as={Link} to="/yourstory">Become a Speaker</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;