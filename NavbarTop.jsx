import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Nav.css'

function NavbarTop() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">
        <img src="https://cdn-icons-png.flaticon.com/128/272/272608.png" alt="" />
      </Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="/">All-Users-Data</NavLink>
        <NavLink to="/Creatdata">Create-Data</NavLink>
      
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarTop