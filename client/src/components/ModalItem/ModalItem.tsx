import React, { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";
import { WomenAccount } from "../../interfaces/WomenAccount";
import useAppSelector from "../../hooks/useAppSelector.hook";
import trash from "../../assets/trash-fill.svg";
import x from "../../assets/x-lg.svg";
import pen from "../../assets/pen.svg";
import classes from "./ModalItem.module.scss";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import { removeItem } from "../../store/slices/items.slice";
import axios from "axios";
import { url } from "../../main";
import { loadItemsHook } from "../../hooks/loadItems.hook";

interface ModalItemProps {
  id: number,
  show: boolean,
  onHide: MouseEventHandler,
  showModalUpdateHandler: MouseEventHandler
}

const ModalItem: React.FC<ModalItemProps> = ({ id, show, onHide,showModalUpdateHandler }): JSX.Element => {
  const dispatch = useAppDispatch();
  const load = loadItemsHook();
  const item: WomenAccount = useAppSelector(state => state.items.list).filter(wa => wa.id === id)[0];
  const token: string = useAppSelector(state => state.token.value);
  const deleteHandler: React.MouseEventHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const id: string = (event.target as HTMLInputElement).value;
      const response = await axios.post(`${url}/women-accounting/delete`, { id }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      onHide(event);
      alert(response.data.message);
      dispatch(removeItem({ id }));
      load.fetch();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Modal show={show} onHide={(onHide as () => void)} size="lg" aria-labelledby="contained-modal-title-vcenter"
           centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Інформація про облікову особу {item?.secondName} {item?.firstName} {item?.thirdName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={classes.info}>
          <div className={classes.item}>
            <div><b>Картотека:</b> {item?.indexСard}</div>
            <div><b>Команда:</b> {item?.team}</div>
            <div><b>Звання:</b> {item?.rank}</div>
          </div>
          <div className={classes.item}>
            <div><b>Прізвище:</b> {item?.secondName}</div>
            <div><b>Ім'я:</b> {item?.firstName}</div>
            <div><b>По батькові:</b> {item?.thirdName}</div>
          </div>
          <div className={classes.item}>
            <div><b>Дата народження:</b> {item?.dateOfBirth.toString().split("T")[0]}</div>
            <div><b>Стать:</b> {item?.sex}</div>
            <div><b>Ідентифікатор в базі:</b> {item?.id}</div>
          </div>
        </div>

        <div className={`${classes.info} mt-4`}>
          <div className={classes.item}>
            <div><b>ВОС:</b> {item?.vos}</div>
            <div><b>КОД:</b> {item?.code}</div>
            <div><b>Група обліку:</b> {item?.accountGroup}</div>
          </div>
          <div className={classes.item}>
            <div><b>Населений пункт:</b> {item?.locality}</div>
            <div><b>Повна адреса:</b> {item?.fullAddress}</div>
            <div><b>Номер телефону:</b> {item?.phone}</div>
          </div>
          <div className={classes.item}>
            <div><b>Місце роботи:</b> {item?.workplace}</div>
            <div><b>Результат ВЛК:</b> {item?.vlkResult}</div>
            <div><b>Дата ВЛК:</b> {item?.vlkDate.toString().split("T")[0]}</div>
          </div>
        </div>
        <div className={`${classes.info} mt-2`}>
          <div><b>Примітки:</b> {item?.description}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-danger action" value={item?.id} onClick={deleteHandler}>Видалити <img src={trash}
                                                                                                     alt="trash" /></Button>
        <Button className={"btn-success"} onClick={showModalUpdateHandler}>Редагувати <img src={pen} alt="pen" /></Button>
        <Button onClick={onHide}>Закрити вікно <img src={x} alt="x" /></Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalItem;