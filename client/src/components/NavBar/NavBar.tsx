import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/box-fill.svg";
import user from "../../assets/person-circle.svg";
import exit from "../../assets/box-arrow-right.svg";

const NavBar = () => {
  const role = "ADMIN";
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Insperal <img src={logo} alt="logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Головна</Nav.Link>
            <Nav.Link href="#features">Таблиця</Nav.Link>
            {role === "ADMIN" && <Nav.Link href="#admin">Адмін панель</Nav.Link>}
            <Nav.Link href="#api">АПІ</Nav.Link>
            <Nav.Link href="#docs">Документація</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#account"><img src={user} alt="user" /></Nav.Link>
            <Nav.Link href="#exit"><img src={exit} alt="exit" /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;