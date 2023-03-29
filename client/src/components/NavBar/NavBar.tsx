import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/box-fill-white.svg";
// import user from "../../assets/person-circle.svg";
import exit from "../../assets/box-arrow-right.svg";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth.context";
import { RoleEnum } from "../../enums/role.enum";
import useAppSelector from "../../hooks/useAppSelector.hook";
import classes from "./NavBar.module.scss";
import { url } from "../../main";

const NavBar: React.FC = (): JSX.Element => {
  const auth = useContext(AuthContext);
  const role = useAppSelector(state => state.role.value);

  const logoutHandler: React.MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (auth.logout) {
      auth.logout();
    }
  };

  return (
    <header>
      <Navbar bg="primary" variant="dark" className={classes.block}>
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to={"/home"}>
              Insperal <img className={classes.logo} src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to={"/home"}>
              Головна
            </Link>
            <Link className="nav-link" to={"/table"}>Таблиця</Link>
            {role === RoleEnum.ADMIN &&
              <Link className="nav-link" to={"/admin"}>Адмін панель</Link>
            }
            <Link className="nav-link" target="_blank" to={`${url}/women-accounting`}>Апі</Link>
            <a className="nav-link" target="_blank" href={`${url}/api/docs`}>Документація</a>
          </Nav>
          <Nav>
            {/*<Link className="nav-link" to={"/account"}>*/}
            {/*  <img src={user} alt="user" />*/}
            {/*</Link>*/}
            <Link className="nav-link" to={"/login"} onClick={logoutHandler}>
              <span className={classes.exit}>Вихід</span>
              <img src={exit} alt="exit" />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;