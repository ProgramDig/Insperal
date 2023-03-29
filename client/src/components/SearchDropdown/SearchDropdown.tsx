import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import classes from "./SearchDropdown.module.scss"

const SearchDropdown: React.FC = (): JSX.Element => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Параметр пошуку" className={`mb-3 ${classes.dropdown}`}>
      <Dropdown.Item href="#/action-1">Ід</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Картотека</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Звання</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Прізвище</Dropdown.Item>
      <Dropdown.Item href="#/action-2">По-Батькові</Dropdown.Item>
      <Dropdown.Item href="#/action-3">ВОС</Dropdown.Item>
      <Dropdown.Item href="#/action-1">КОД</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Група обліку</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Результат ВЛК</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Населений пункт</Dropdown.Item>
    </DropdownButton>
  );
};

export default SearchDropdown;