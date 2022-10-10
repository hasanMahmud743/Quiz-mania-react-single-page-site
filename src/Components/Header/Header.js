import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           
    
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand to="/" >Navbar</Navbar.Brand>
                    <Nav  className="ms-auto header-menu">
                        <NavLink className='mx-3' to="/home">Home</NavLink>
                        <NavLink className='mx-3' to="statistics">Statistics</NavLink>
                        <NavLink className='mx-3' to="blogs">Blogs</NavLink>
                    </Nav>
                </Container>
            </Navbar>

            {/* <NavLink to="/home" > Home</NavLink> */}


      
            
        </div>
    );
};

export default Header;