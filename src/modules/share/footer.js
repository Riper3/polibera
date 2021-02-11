import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
    <Navbar id="footer" bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar>
    </>
  )
}
