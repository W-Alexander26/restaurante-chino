import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//importaciones necesarias de la librerá de react boostrap.

const product = () => {
  return (
    //Etiquetas que muestran el tipo de navbar en todas las páginas.
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">Restaurante Chino</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <NavDropdown title="Cuenta" id="basic-nav-Cuenta">
                <NavDropdown.Item href="/register">Registrate</NavDropdown.Item>
                <NavDropdown.Item href="/login">Inicia sesión</NavDropdown.Item>
                <NavDropdown.Item href="/product">Productos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Hola</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default product;
