import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand as={Link} to="/">Laboratorio Monzón</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
          <Nav.Link as={Link} to="/presupuesto">Presupuesto</Nav.Link>
          <Nav.Link as={Link} to="/equipo">Equipo</Nav.Link>
        </Nav>
        <Form inline="true" className="form-inline">
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
