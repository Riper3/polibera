import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default function NavMenu() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Polibera</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/blogs">Blogs</Nav.Link>
        <Nav.Link href="/categories">Categories</Nav.Link>
      </Nav>
    </Navbar>
    </>
  )
}
