import React from 'react';
import './Navbar2.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../asserts/New Image.png';
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";



function Navbar1() {
    const location = useLocation()

  return (
    <>
    <Navbar expand="lg" className='navbar1'>
      <Container>
          <div className="logo">
            <img src={Logo} alt='Company Logo' className='icon1'/>
            <h1 id='logo-text'>Fiat Café</h1>
          </div>         
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-icon'/>
          <Navbar.Collapse id="nav-collapse">
          <Nav>
              <Nav.Link as={Link} to="/" id="Main-Navs" active={location.pathname==='/'}>HOME</Nav.Link>
              <NavDropdown as={Link} to="/about" id="Main-Navs"  title="ABOUT" active={location.pathname==='/about'}  style={{textDecoration:'none'}}>
              <NavDropdown.Item  as={Link} to="/about/about-us" className='submenus' smooth>About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/our-team" className='submenus' smooth>Meet the Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/reviews" className='submenus' smooth>Customer Reviews</NavDropdown.Item>
              </NavDropdown> 
              <Nav.Link as={Link} to="/events" id="Main-Navs" active={location.pathname==='/events'}> EVENTS </Nav.Link>
              <NavDropdown title="MENU" as={Link} to="/menu" id="Main-Navs" active={location.pathname==='/menu'} style={{textDecoration:'none'}}>
              <NavDropdown.Item as={Link} to="/menu/breakfast" className='submenus' >Breakfast</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/lunch" className='submenus'>Lunch</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/desert" className='submenus' >Desert</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/blog" id="Main-Navs" active={location.pathname==='/blog'}>BLOG</Nav.Link>
              <Nav.Link as={Link} to="/contact" id="Main-Navs" active={location.pathname==='/contact'}>CONTACT</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Container>
        <div className="social-icons">
          <i className="icon8"><FaInstagramSquare/></i>
          <i className="icon9"><FaTiktok/></i>
          <i className="icon10"><FaYoutube/></i>            
        </div>
    </Navbar>
    </>
  );
}

export default Navbar1;