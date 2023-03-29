import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import SearchDropdown from "../../components/SearchDropdown/SearchDropdown";
import { Form, InputGroup } from "react-bootstrap";
import searchIcon from "../../assets/search.svg";
import classes from "./Table.page.module.scss";


const TablePage = () => {
  return (
    <div className={"container"}>
      <h1 className={"d-flex justify-content-center mt-4 mb-3"}>Перелік облікових осіб</h1>

      <div className={classes.block}>
        <SearchDropdown />

        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Text id="inputGroup-sizing-default">
            <img src={searchIcon} alt="searchIcon" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <CardItem/>
    </div>
  );
};

export default TablePage;