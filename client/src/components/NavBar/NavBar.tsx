import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/box-fill.svg";
import user from "../../assets/person-circle.svg";
import exit from "../../assets/box-arrow-right.svg";
import { Link } from "react-router-dom";

const NavBar: React.FC = (): JSX.Element => {
  const role = "ADMIN";
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link>
              <Link className="nav-link" to={"/home"}>
                Insperal <img src={logo} alt="logo" />
              </Link>
            </Nav.Link>

          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nav-link" to={"/home"}>Головна</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to={"/table"}>Таблиця</Link>
            </Nav.Link>
            {role === "ADMIN" &&
              <Nav.Link>
                <Link className="nav-link" to={"/admin"}>Адмін панель</Link>
              </Nav.Link>
            }
            <Nav.Link>
              <Link className="nav-link" to={"/api"}>Апі</Link>
            </Nav.Link>
            <Nav.Link href="/docs">
              <Link className="nav-link" to={"/docs"}>Документація</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/account">
              <Link className="nav-link" to={"/account"}>
                <img src={user} alt="user" />
              </Link>
            </Nav.Link>
            <Nav.Link href="/login">
              <Link className="nav-link" to={"/login"}>
                <img src={exit} alt="exit" />
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;