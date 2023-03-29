import React, { useState } from "react";

import useAppSelector from "../../hooks/useAppSelector.hook";
import { Button } from "react-bootstrap";
import trash from "../../assets/trash-fill.svg";
import ModalItem from "../../components/ModalItem/ModalItem";
import { WomenAccount } from "../../interfaces/WomenAccount";
import classes from "./Admin.page.module.scss";

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

      <div>
        <Button className={classes.buttons} variant="primary">Оновити</Button>
        <Button className={classes.buttons} variant="primary">Додати</Button>
        <Button className={classes.buttons} variant="primary">Редагувати</Button>
        <Button className={classes.buttons} variant="primary">Видалити</Button>
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
            <th scope="col">Дії</th>
          </tr>
          </thead>
          <tbody>
          {data?.map(item => {
            return (
              <tr onClick={showModalHandler} id={item.id.toString()}>
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
                <td className={"action"}>
                  <Button className="btn-danger action">
                    <img src={trash} alt="trash" />
                  </Button>
                </td>
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