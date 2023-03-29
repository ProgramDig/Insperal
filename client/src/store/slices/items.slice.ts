import { createSlice } from "@reduxjs/toolkit";
import { SexEnum } from "../../enums/sex.enum";
import { IndexCardEnum } from "../../enums/index-card.enum";
import { RankEnum } from "../../enums/rank.enum";
import { LocalityEnum } from "../../enums/locality.enum";
import { VlkResultEnum } from "../../enums/vlk-result.enum";

export interface WomenAccount {
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

type ItemsSlice = {
  list: WomenAccount[],
  filterList: WomenAccount[]
}

const initialState: ItemsSlice = {
  list: [],
  filterList: []
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action) {
      state.list = [...action.payload];
    },
    removeItems(state) {
      state.list = initialState.list;
    },
    updateItem(state, action) {
      state.list.reduce((acc: any, item: any) => {
        if (item._id === action.payload._id) {
          return [...acc, { ...item }];
        }
        return [...acc, item];
      }, []);
    },
    removeItem(state, action) {
      state.list.filter((item: any) => item._id !== action.payload._id);
    },
    setFilterList(state, action) {
      state.filterList = [...action.payload];
    },
    removeFilterList(state) {
      state.list = initialState.list;
      state.filterList = initialState.filterList;
    }
  }
});

export const { removeItem, removeItems, updateItem, setItems, removeFilterList, setFilterList } = itemsSlice.actions;
export default itemsSlice.reducer;