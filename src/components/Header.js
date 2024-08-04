// src/components/Header.js
import React from 'react';
import { Navbar, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo.svg'; // Import SVG logo

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand href="#home">
        <Image src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
        <span className="ms-2">My Todo App</span>
      </Navbar.Brand>
      <div className="ms-auto">
        <Button variant="light" className="me-2"><i className="bi bi-check-circle"></i>Previous Day</Button>
        <Button variant="light" className="me-2">Today</Button>
        <Button variant="light">Next Day</Button>
      </div>
    </Navbar>
  );
};

export default Header;
