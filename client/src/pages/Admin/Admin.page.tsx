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
import UpdateModal from "../../components/UpdateModal/UpdateModal";
import { WomenAccount } from "../../interfaces/WomenAccount";
import { setFilterList } from "../../store/slices/items.slice";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";

const AdminPage: React.FC = (): JSX.Element => {
  const items: WomenAccount[] = useAppSelector(state => state.items.list);

  const loadItems = loadItemsHook();
  const dispatch = useAppDispatch();

  const [modalId, setModalId] = useState<number>(1);

  const [modalUpdateShow, setModalUpdateShow] = useState<boolean>(false);
  const [modalInfoShow, setModalInfoShow] = useState<boolean>(false);
  const [modalCreateShow, setModalCreateShow] = useState<boolean>(false);

  const [select, setSelect] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const selectOnChangeHandle: React.ChangeEventHandler = (event: any): void => {
    setSelect(event.target.value);
  };

  const searchOnChangeHandler: React.ChangeEventHandler = (event: any): void => {
    const query = event.target.value;
    setSearch(query);
    let updateForm: WomenAccount[] = [...items];
    updateForm = updateForm.filter((DO) => {
      switch (select) {
        case "id":
          return DO.id.toString().toLowerCase().indexOf(query.toString().toLowerCase()) !== -1;
        case "indexСard":
          return DO.indexСard.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "accountGroup":
          return DO.accountGroup.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "vlkResult":
          return DO.vlkResult.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "locality":
          return DO.locality.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "code":
          return DO.code.toString().toLowerCase().indexOf(query.toString().toLowerCase()) !== -1;
        case "vos":
          return DO.vos.toString().toLowerCase().indexOf(query.toString().toLowerCase()) !== -1;
        case "thirdName":
          return DO.thirdName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "secondName":
          return DO.secondName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "rank":
          return DO.rank.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        default:
          return DO.secondName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    });
    dispatch(setFilterList(updateForm));
  };

  const showModalUpdateHandler: React.MouseEventHandler = (event: React.MouseEvent<HTMLTableRowElement>): void => {
    setModalUpdateShow(true);
  };

  const onHideUpdateHandler: React.MouseEventHandler = (): void => {
    setModalUpdateShow(false);
  };

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
            <span className={classes.btnSpan}>Загрузити дані з сервера</span>
            <img src={cloud} alt="cloud" />
          </Button>
          <Button
            className={`${classes.buttons} `}
            variant="primary"
            disabled={loadItems.loading}
            onClick={showModalCreateHandler}
          >
            <span className={classes.btnSpan}>Створити новий запис</span>
            <img src={plus} alt="plus" />
          </Button>
        </div>

        <div className={classes.dropdownBlock}>
          <div className="mb-3" style={{ marginRight: 20 }}>
            <SearchDropdown select={select} selectOnChangeHandle={selectOnChangeHandle} />
          </div>

          <InputGroup className="mb-3">
            <Form.Control value={search} onChange={searchOnChangeHandler} aria-label="Default"
                          aria-describedby="inputGroup-sizing-default" />
            <InputGroup.Text id="inputGroup-sizing-default">
              <img src={searchIcon} alt="searchIcon" />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>

      <TableItem showModalInfoHandler={showModalInfoHandler} />

      <UpdateModal show={modalUpdateShow} onHide={onHideUpdateHandler} id={modalId} />
      <ModalItem id={modalId} show={modalInfoShow} onHide={onHideInfoHandler}
                 showModalUpdateHandler={showModalUpdateHandler} />
      <CreateModal show={modalCreateShow} onHide={onHideCreateHandler} />
    </div>
  );
};

export default AdminPage;