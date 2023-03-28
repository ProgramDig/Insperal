import React, { useEffect, useState } from "react";
import { SexEnum } from "../../enums/sex.enum";
import { IndexCardEnum } from "../../enums/index-card.enum";
import { RankEnum } from "../../enums/rank.enum";
import { LocalityEnum } from "../../enums/locality.enum";
import { VlkResultEnum } from "../../enums/vlk-result.enum";
import axios from "axios";
import { url } from "../../main";
import useAppSelector from "../../hooks/useAppSelector.hook";
import classes from "./Admin.page.module.scss";
import { Button } from "react-bootstrap";

interface WomenAccount {
  id: number;
  firstName: string;
  secondName: string;
  thirdName: string;
  dateOfBirth: Date;
  sex: SexEnum;
  indexСard: IndexCardEnum;
  rank: RankEnum;
  team: number;
  vos: number;
  code: number;
  accountGroup: string;
  locality: LocalityEnum;
  fullAddress: string;
  phone: string;
  workplace: string;
  vlkResult: VlkResultEnum;
  vlkDate: Date;
  description: string;
}

const AdminPage = () => {
  const token: string = useAppSelector(state => state.token.value);
  const [data, setData] = useState<WomenAccount[]>();

  useEffect(() => {
    if (!data) {
      const fetch = async () => {
        const response = await axios.get(`${url}/women-accounting`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(response.data)
      };
      fetch();
    }
  }, []);

  return (
    <div className="container">
      <h1 className={"d-flex justify-content-center m-3"}>Панель адміністратора</h1>

      <div >
        <Button className={classes.buttons} variant="primary">Оновити</Button>
        <Button className={classes.buttons} variant="primary">Додати</Button>
        <Button className={classes.buttons} variant="primary">Редагувати</Button>
        <Button className={classes.buttons} variant="primary">Видалити</Button>
      </div>

      <div>
        <table className={`table table-primary ${classes.table}`}>
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
            <th scope="col">Стать</th>
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
              <tr>
                <th scope={"row"}>{item.id}</th>
                <td>{item.indexСard}</td>
                <td>{item.team}</td>
                <td>{item.rank}</td>
                <td>{item.secondName}</td>
                <td>{item.firstName}</td>
                <td>{item.thirdName}</td>
                <td>{item.dateOfBirth.toString().split("T")[0]}</td>
                <td>{item.sex}</td>
                <td>{item.vos}</td>
                <td>{item.code}</td>
                <td>{item.accountGroup}</td>
                <td>{item.vlkResult}</td>
                <td>{item.locality}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;