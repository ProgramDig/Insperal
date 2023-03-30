import React, { useState } from "react";
import CardItem from "../../components/CardItem/CardItem";
import SearchDropdown from "../../components/SearchDropdown/SearchDropdown";
import { Button, Form, InputGroup } from "react-bootstrap";
import searchIcon from "../../assets/search.svg";
import classes from "./Table.page.module.scss";
import cloud from "../../assets/cloud-arrow-down.svg";
import { loadItemsHook } from "../../hooks/loadItems.hook";
import { WomenAccount } from "../../interfaces/WomenAccount";
import useAppSelector from "../../hooks/useAppSelector.hook";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import { setFilterList } from "../../store/slices/items.slice";


const TablePage: React.FC = (): JSX.Element => {
  const loadItems = loadItemsHook();
  const dispatch = useAppDispatch();
  const items: WomenAccount[] = useAppSelector(state => state.items.list);

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

  const loadHandler: React.MouseEventHandler = (): void => {
    loadItems.fetch();
  };

  return (
    <div className={"container " + classes.body }>
      <h1 className={"d-flex justify-content-center mt-4 mb-3"}>Перелік облікових осіб</h1>

      <div className={classes.block}>
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
        </div>

        <div className={classes.searchBlock}>
          <div className="mb-3" style={{marginRight: 20}}>
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

      <CardItem />
    </div>
  );
};

export default TablePage;