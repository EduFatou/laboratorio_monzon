import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="navbar custom-navbar" expand={false}>
        <Navbar.Brand as={Link} to="/">Laboratorio Monzón</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} className="custom-toggler" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton className="custom-offcanvas-header">
            <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
              <Nav.Link as={Link} to="/categorias" onClick={handleClose}>Categorías</Nav.Link>
              <Nav.Link as={Link} to="/presupuesto" onClick={handleClose}>Presupuesto</Nav.Link>
              <Nav.Link as={Link} to="/equipo" onClick={handleClose}>Equipo</Nav.Link>
              <Nav.Link as={Link} to="/registro" onClick={handleClose}>Registrarse</Nav.Link>
              <Nav.Link as={Link} to="/login" onClick={handleClose}>Acceder</Nav.Link>            
            </Nav>
            <Form className="d-flex mt-3">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Buscar</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
};

export default Navigation;