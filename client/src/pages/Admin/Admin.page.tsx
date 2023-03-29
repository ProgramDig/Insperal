import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import ModalItem from "../../components/ModalItem/ModalItem";

import cloud from "../../assets/cloud-arrow-down.svg";
import searchIcon from "../../assets/search.svg";
import plus from "../../assets/plus-circle.svg";
import classes from "./Admin.page.module.scss";
import SearchDropdown from "../../components/SearchDropdown/SearchDropdown";
import { loadItemsHook } from "../../hooks/loadItems.hook";
import CreateModal from "../../components/CreateModal/CreateModal";
import TableItem from "../../components/TableItem/TableItem";

const AdminPage: React.FC = (): JSX.Element => {
  const loadItems = loadItemsHook();

  const [modalId, setModalId] = useState<number>(1);

  const [modalInfoShow, setModalInfoShow] = useState<boolean>(false);
  const [modalCreateShow, setModalCreateShow] = useState<boolean>(false);

  const showModalCreateHandler: React.MouseEventHandler = (event: React.MouseEvent<HTMLTableRowElement>): void => {
    setModalCreateShow(true);
  };

  const onHideCreateHandler: React.MouseEventHandler = (): void => {
    setModalCreateShow(false);
  };

  const showModalInfoHandler: React.MouseEventHandler = (event: React.MouseEvent<HTMLTableRowElement>): void => {
    if (!(event.target as HTMLElement).classList.contains("action")) {
      setModalInfoShow(true);
      setModalId(Number(event.currentTarget.id));
    }
  };

  const onHideInfoHandler: React.MouseEventHandler = (): void => {
    setModalInfoShow(false);
  };

  const loadHandler: React.MouseEventHandler = () => {
    loadItems.fetch();
  };

  return (
    <div className="container">
      <h1 className={"d-flex justify-content-center m-3"}>Панель адміністратора</h1>

      <div className={classes.searchBlock}>
        <div>
          <Button
            className={classes.buttons}
            onClick={loadHandler}
            variant="primary"
            disabled={loadItems.loading}
          >
            <span className={classes.btnSpan}>Оновити дані з сервера</span>
            <img src={cloud} alt="cloud" />
          </Button>
          <Button
            className={classes.buttons}
            variant="primary"
            disabled={loadItems.loading}
            onClick={showModalCreateHandler}
          >
            <span className={classes.btnSpan}>Створити новий запис</span>
            <img src={plus} alt="plus" />
          </Button>
        </div>

        <div className={classes.dropdownBlock}>
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
      </div>

      <TableItem showModalInfoHandler={showModalInfoHandler}/>

      <ModalItem id={modalId} show={modalInfoShow} onHide={onHideInfoHandler} />
      <CreateModal show={modalCreateShow} onHide={onHideCreateHandler}/>
    </div>
  );
};

export default AdminPage;