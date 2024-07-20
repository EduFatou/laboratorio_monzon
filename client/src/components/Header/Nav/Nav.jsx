import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';
import { UserContext } from '../../../context/UserContext';

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { user } = useContext(UserContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      <Navbar className="navbar custom-navbar" expand={false}>
        <Navbar.Brand as={Link} to="/">Laboratorio Monzón</Navbar.Brand>
        <div className="d-flex ms-auto me-2 align-items-center">
          <Form className="d-none d-md-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>
          <Button 
            variant="outline-light" 
            className="d-md-none me-2"
            onClick={toggleSearch}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </Button>
        </div>
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
            <Offcanvas.Title id="offcanvasNavbarLabel" className="w-100 text-center">
              Menú
              {user && (
                <div className="mt-2">
                  <span>{user.name}</span>
                </div>
              )}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
              <Nav.Link as={Link} to="/categorias" onClick={handleClose}>Categorías</Nav.Link>
              <Nav.Link as={Link} to="/presupuesto" onClick={handleClose}>Presupuesto</Nav.Link>
              <Nav.Link as={Link} to="/equipo" onClick={handleClose}>Equipo</Nav.Link>
              {user === null && (
                <>
                  <Nav.Link as={Link} to="/registro" onClick={handleClose}>Registrarse</Nav.Link>
                  <Nav.Link as={Link} to="/login" onClick={handleClose}>Acceder</Nav.Link>
                </>
              )}
              {user && user.role === 'admin' && (
                <Nav.Link as={Link} to="/dashboard" onClick={handleClose}>Dashboard</Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      {showSearch && (
        <Form className="d-md-none p-2 form">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2 mb-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Buscar</Button>
        </Form>
      )}
    </>
  );
};

export default Navigation;