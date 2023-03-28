import React, { useContext} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/box-fill-white.svg";
import user from "../../assets/person-circle.svg";
import exit from "../../assets/box-arrow-right.svg";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth.context";
import { RoleEnum } from "../../enums/role.enum";
import useAppSelector from "../../hooks/useAppSelector.hook";

const NavBar: React.FC = (): JSX.Element => {
  const auth = useContext(AuthContext);
  const role = useAppSelector(state => state.role.value);

  const logoutHandler: React.MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    auth.logout()
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link>
              <NavLink className="nav-link" to={"/home"}>
                Insperal <img src={logo} alt="logo" />
              </NavLink>
            </Nav.Link>

          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className="nav-link" to={"/home"}>Головна</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav-link" to={"/table"}>Таблиця</NavLink>
            </Nav.Link>
            {role === RoleEnum.ADMIN &&
              <Nav.Link>
                <NavLink className="nav-link" to={"/admin"}>Адмін панель</NavLink>
              </Nav.Link>
            }
            <Nav.Link>
              <NavLink className="nav-link" to={"/api"}>Апі</NavLink>
            </Nav.Link>
            <Nav.Link href="/docs">
              <NavLink className="nav-link" to={"/docs"}>Документація</NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/account">
              <NavLink className="nav-link" to={"/account"}>
                <img src={user} alt="user" />
              </NavLink>
            </Nav.Link>
            <Nav.Link href="/login">
              <NavLink className="nav-link" to={"/login"} onClick={logoutHandler}>
                <img src={exit} alt="exit" />
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;