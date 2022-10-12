import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Headers() {
  return (
    <Navbar className='bg' expand="lg">
      <Container>
        <Navbar.Brand href="#home"><span className='fw-bold'>Quiz-Mania</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header-menu">

            <NavLink  className={({isActive}) => isActive ? 'active' : undefined}   to="/home">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : undefined} to="/statistics">Statistics</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : undefined} to="/blogs">Blog</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;