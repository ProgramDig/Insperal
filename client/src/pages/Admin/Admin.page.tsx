import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import ModalItem from "../../components/ModalItem/ModalItem";
import { WomenAccount } from "../../interfaces/WomenAccount";
import useAppSelector from "../../hooks/useAppSelector.hook";

import cloud from "../../assets/cloud-arrow-down.svg"
import searchIcon from "../../assets/search.svg";
import plus from "../../assets/plus-circle.svg"
import classes from "./Admin.page.module.scss";
import SearchDropdown from "../../components/SearchDropdown/SearchDropdown";

const AdminPage: React.FC = (): JSX.Element => {
  const data: WomenAccount[] = useAppSelector(state => state.items.list);

  const [modalId, setModalId] = useState<number>(1);
  const [modalShow, setModalShow] = useState<boolean>(false);

  const showModalHandler: React.MouseEventHandler = (event: React.MouseEvent<HTMLTableRowElement>): void => {
    if (!(event.target as HTMLElement).classList.contains("action")) {
      setModalShow(true);
      setModalId(Number(event.currentTarget.id));
    }
  };

  const onHideHandler: React.MouseEventHandler = (): void => {
    setModalShow(false);
  };

  return (
    <div className="container">
      <h1 className={"d-flex justify-content-center m-3"}>Панель адміністратора</h1>

      <div className={classes.searchBlock}>
        <div>
          <Button className={classes.buttons} variant="primary">
            <span className={classes.btnSpan}>Оновити дані з сервера</span>
            <img src={cloud} alt="cloud" />
          </Button>
          <Button className={classes.buttons} variant="primary">
            <span className={classes.btnSpan}>Створити новий запис</span>
            <img src={plus} alt="plus" />
          </Button>
        </div>

        <div className={classes.dropdownBlock}>
          <SearchDropdown/>

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
      </div>

      <div className={classes.wrap}>
        <table className={`table ${classes.table}`}>
          <thead>
          <tr>
            <th scope="col">Ід</th>
            <th scope="col">Картотека</th>
            <th scope="col">Команда</th>
            <th scope="col">Звання</th>
            <th scope="col">Прізвище</th>
            <th scope="col">Ім'я</th>
            <th scope="col">По батькові</th>
            <th scope="col">Дата народження</th>
            <th scope="col">ВОС</th>
            <th scope="col">КОД</th>
            <th scope="col">Група обліку</th>
            <th scope="col">Результат ВЛК</th>
            <th scope="col">Населений пункт</th>
          </tr>
          </thead>
          <tbody>
          {data?.map(item => {
            return (
              <tr className={classes.tableRow} onClick={showModalHandler} id={item.id.toString()}>
                <th scope={"row"}>{item.id}</th>
                <td className={""}>{item.indexСard}</td>
                <td className={""}>{item.team}</td>
                <td className={""}>{item.rank}</td>
                <td className={""}>{item.secondName}</td>
                <td className={""}>{item.firstName}</td>
                <td className={""}>{item.thirdName}</td>
                <td className={""}>{item.dateOfBirth.toString().split("T")[0]}</td>
                <td className={""}>{item.vos}</td>
                <td>{item.code}</td>
                <td className={""}>{item.accountGroup}</td>
                <td className={""}>{item.vlkResult}</td>
                <td className={""}>{item.locality}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <ModalItem id={modalId} show={modalShow} onHide={onHideHandler} />

    </div>
  );
};

export default AdminPage;