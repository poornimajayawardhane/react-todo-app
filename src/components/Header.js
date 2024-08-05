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
    </Navbar>
  );
};

export default Header;
