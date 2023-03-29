import React from "react";
import logo from "../../assets/box-fill-white-small.svg"
import classes from "./Footer.module.scss";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={`bg-light text-center text-lg-start mt-5 mb-0 ${classes.foot}`}>
      <div className="text-center p-3" style={{ backgroundColor: "#0C6EFD", color: "white" }}>
        <span>© 2023 Indsperal</span> <img className={classes.logo} src={logo} alt="logo"/>
      </div>
    </footer>
  );
};

export default Footer;