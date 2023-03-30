import React from "react";
import classes from "../../pages/Admin/Admin.page.module.scss";
import { WomenAccount } from "../../interfaces/WomenAccount";
import useAppSelector from "../../hooks/useAppSelector.hook";

interface TableItemProps {
  showModalInfoHandler: (event: React.MouseEvent) => void;
}

const TableItem: React.FC<TableItemProps> = ({ showModalInfoHandler }): JSX.Element => {
  const data: WomenAccount[] = useAppSelector(state => state.items.filterList);
  return (
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
        {data.length !== 0 ? data.map(item => {
            return (
              <tr key={item.id} className={classes.tableRow} onClick={showModalInfoHandler} id={item.id.toString()}>
                <th scope={"row"}>{item.id}</th>
                <td className={""}>{item.indexСard}</td>
                <td className={""}>{item.team}</td>
                <td className={""}>{item.rank}</td>
                <td className={""}>{item.secondName}</td>
                <td className={""}>{item.firstName}</td>
                <td className={""}>{item.thirdName}</td>
                <td className={""}>{item.dateOfBirth.toString().includes("T") ?
                  item.dateOfBirth.toString().split("T")[0] :
                  item.dateOfBirth.toString()
                }</td>
                <td className={""}>{item.vos}</td>
                <td>{item.code}</td>
                <td className={""}>{item.accountGroup}</td>
                <td className={""}>{item.vlkResult}</td>
                <td className={""}>{item.locality}</td>
              </tr>
            );
          }) :
          (
            <>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
              <tr>
                <td>
                  #
                </td>
              </tr>
            </>

          )

        }
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;