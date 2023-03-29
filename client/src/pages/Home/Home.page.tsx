import React from "react";
import logo from "../../assets/box-fill-black.svg";
import classes from "./Home.page.module.scss";
import { Button } from "react-bootstrap";
import { url } from "../../main";
import MyChart from "../../components/MyChart/MyChart";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className={"container"}>
      <div className={classes.logoBlock}>
        <h1 className={classes.title}><b>Insperal</b> <img src={logo} alt="logo" /></h1>
        <div className={classes.text}>
          <b>
            Програмний модуль обліку резерву військово-навчених
            ресурсів районного територіального центру
            комплектування та соціальної підтримки для жінок
          </b>
        </div>
        <div className={classes.version}>
          <span>
            <b>Версія</b> 1.0.0
          </span>
        </div>
        <Button>
          <a className={"nav-link"} href={`${url}/women-accounting`} target="_blank" >API бази даних</a>
        </Button>
      </div>

      <div>
        <h2 className={"mt-5 mb-5 d-flex justify-content-center"}>Графік активності використання додатку</h2>
        <MyChart/>
      </div>
    </div>
  );
};

export default HomePage;