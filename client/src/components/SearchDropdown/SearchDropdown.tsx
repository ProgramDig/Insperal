import React from "react";
import { Form } from "react-bootstrap";

interface SearchDropdownProps {
  select: string,
  selectOnChangeHandle: React.ChangeEventHandler
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ select, selectOnChangeHandle }): JSX.Element => {
  return (
    <Form.Select value={select} onChange={selectOnChangeHandle} aria-label="Default select example">
      <option>Параметр пошуку</option>
      <option value="id">Ід</option>
      <option value="indexСard">Картотека</option>
      <option value="rank">Звання</option>
      <option value="secondName" selected>Прізвище</option>
      <option value="thirdName">По-Батькові</option>
      <option value="locality">Населений пункт</option>
    </Form.Select>
  );
};

export default SearchDropdown;