import React, { MouseEventHandler, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { SexEnum } from "../../enums/sex.enum";
import { IndexCardEnum } from "../../enums/index-card.enum";
import { RankEnum } from "../../enums/rank.enum";
import { LocalityEnum } from "../../enums/locality.enum";
import { VlkResultEnum } from "../../enums/vlk-result.enum";
import x from "../../assets/x-lg.svg";
import { CreateWomenAccount } from "../../interfaces/CreateWomenAccount";
import { CreateHook } from "../../hooks/create.hook";
import { loadItemsHook } from "../../hooks/loadItems.hook";
import { UpdateWomenAccount } from "../../interfaces/UpdateWomenAccount";
import { WomenAccount } from "../../interfaces/WomenAccount";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { UpdateHook } from "../../hooks/update.hook";

interface UpdateModalProps {
  show: boolean,
  onHide: MouseEventHandler,
  id: number
}

const UpdateModal: React.FC<UpdateModalProps> = ({ show, onHide, id }): JSX.Element => {
  const items: WomenAccount[] = useAppSelector(state => state.items.list);

  const initialItem: UpdateWomenAccount = {
      id: 0,
      firstName: "",
      secondName: "",
      thirdName: "",
      indexСard: IndexCardEnum.NGU,
      team: 0,
      rank: RankEnum.colonel,
      sex: SexEnum.women,
      workplace: "",
      vos: 0,
      dateOfBirth: new Date(""),
      code: 0,
      accountGroup: "",
      fullAddress: "",
      vlkDate: new Date(""),
      locality: LocalityEnum.Kyiv,
      vlkResult: VlkResultEnum.true,
      description: "",
      phone: ""
    };

  const [item, setItem] = useState<UpdateWomenAccount>(initialItem);

  useEffect((): void => {
    if (id !== 1) {
      setItem({
        ...items.filter((item: WomenAccount) => item.id === id)[0],
        // @ts-ignore
        dateOfBirth: item.dateOfBirth.toString().split("T")[0],
        // @ts-ignore
        vlkDate: item.vlkDate.toString().split("T")[0]
      });
    }
  }, [show]);

  const updateHook = UpdateHook();
  const load = loadItemsHook();

  const changeHandler: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const updateHandler: React.MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    for (let prop in item) {
      if (Object.prototype.hasOwnProperty.call(item, prop)) {
        const value = item[prop as keyof CreateWomenAccount];
        if (value === "") {
          return alert("Заповніть всі поля");
        }
      }
    }
    updateHook.update(item);
    onHide(event);
    load.fetch();
  };

  return (
    <Modal show={show} onHide={(onHide as () => void)} size="lg" aria-labelledby="contained-modal-title-vcenter"
           centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Створити новий запис
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="input-group mb-3">
            <span className="input-group-text">ПІБ</span>
            <input
              type="text"
              placeholder="Приклад: Шевченко"
              className="form-control"
              name="secondName"
              value={item.secondName}
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="Приклад: Василь"
              className="form-control"
              name="firstName"
              value={item.firstName}
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="Приклад: Дмитрович"
              className="form-control"
              name="thirdName"
              value={item.thirdName}
              onChange={changeHandler}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Дата надодження</span>
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              value={item.dateOfBirth?.toString()}
              onChange={changeHandler}
            />
            <label className="input-group-text" htmlFor="sex">Стать</label>
            <select
              className="form-select"
              id="sex"
              name="sex"
              onChange={changeHandler}
            >
              <option selected>{SexEnum.women}</option>
              {Object.values(SexEnum).map((value, index) => {
                if (value !== SexEnum.women) {
                  return (
                    <option key={index + value} value={value}>{value}</option>
                  );
                }
              })}
            </select>
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="indexСard">Картотека</label>
            <select
              className="form-select"
              id="indexСard"
              name="indexСard"
              onChange={changeHandler}
            >
              <option selected>{IndexCardEnum.NGU}</option>
              {Object.values(IndexCardEnum).map((value, index) => {
                if (value !== IndexCardEnum.NGU) {
                  return (
                    <option key={index + value} value={value}>{value}</option>
                  );
                }
              })}
            </select>
            <label className="input-group-text" htmlFor="rank">Звання</label>
            <select
              className="form-select"
              id="rank"
              name="rank"
              onChange={changeHandler}
            >
              <option selected>{RankEnum.soldier}</option>
              {Object.values(RankEnum).map((value, index) => {
                if (value !== RankEnum.soldier) {
                  return (
                    <option key={index + value} value={value}>{value}</option>
                  );
                }
              })}
            </select>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Команда</span>
            <input
              type="text"
              className="form-control"
              placeholder="Приклад: 31"
              name="team"
              value={item.team}
              onChange={changeHandler}
            />
            <span className="input-group-text" id="basic-addon1">ВОС</span>
            <input
              type="text"
              placeholder="Приклад: 21"
              className="form-control"
              name="vos"
              value={item.vos}
              onChange={changeHandler}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">КОД</span>
            <input
              type="text"
              placeholder="Приклад: 11"
              className="form-control"
              name="code"
              value={item.code}
              onChange={changeHandler}
            />
            <span className="input-group-text" id="basic-addon1">Група обліку</span>
            <input
              type="text"
              placeholder="Приклад: А"
              className="form-control"
              name="accountGroup"
              value={item.accountGroup}
              onChange={changeHandler}
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="locality">Населений Пункт</label>
            <select
              className="form-select"
              id="locality"
              name="locality"
              onChange={changeHandler}
            >
              <option selected>{LocalityEnum.Kyiv}</option>
              {Object.values(LocalityEnum).map((value, index) => {
                if (value !== LocalityEnum.Kyiv) {
                  return (
                    <option key={index + value} value={value}>{value}</option>
                  );
                }
              })}
            </select>
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect02">Повна адреса</label>
            <input
              type="text"
              placeholder="Приклад: м. Київ, вул. Васильківська 20"
              className="form-control"
              name="fullAddress"
              value={item.fullAddress}
              onChange={changeHandler}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Номер телефону</span>
            <input
              type="text"
              placeholder="Приклад: 0901289432"
              className="form-control"
              name="phone"
              value={item.phone}
              onChange={changeHandler}
            />
            <span className="input-group-text" id="basic-addon1">Місце роботи</span>
            <input
              type="text"
              placeholder="Приклад: ТОВ АСУ"
              className="form-control"
              name="workplace"
              value={item.workplace}
              onChange={changeHandler}
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="vlkResult">Результат ВЛК</label>
            <select
              className="form-select"
              id="vlkResult"
              name="vlkResult"
              onChange={changeHandler}
            >
              <option selected>{VlkResultEnum.true}</option>
              {Object.values(VlkResultEnum).map((value, index) => {
                if (value !== VlkResultEnum.true) {
                  return (
                    <option key={index + value} value={value}>{value}</option>
                  );
                }
              })}
            </select>
            <label className="input-group-text" htmlFor="vlkDate">Дата ВЛК</label>
            <input
              type="date"
              id="vlkDate"
              className="form-control"
              name="vlkDate"
              value={item.vlkDate?.toString()}
              onChange={changeHandler}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group">
              <span className="input-group-text">Примітки</span>
              <textarea
                className="form-control"
                name="description"
                value={item.description}
                onChange={changeHandler}
              ></textarea>
            </div>
          </div>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className={"btn-success"} onClick={updateHandler}>Оновити</Button>
        <Button className="btn-danger action" onClick={onHide}>Відміна <img src={x} alt="x" /></Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;