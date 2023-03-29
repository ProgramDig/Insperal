import { createSlice } from "@reduxjs/toolkit";
import { WomenAccount } from "../../interfaces/WomenAccount";

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