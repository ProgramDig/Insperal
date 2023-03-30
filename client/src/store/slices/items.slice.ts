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
    setItem(state, action) {
      console.log(state)
      console.log(action)
      // state.list.push(action.payload.data);
    },
    removeItems(state) {
      state.list = initialState.list;
    },
    updateItem(state, action) {
      state.list.reduce((acc: WomenAccount[], item: WomenAccount) => {
        if (item.id === action.payload) {
          return [...acc, { ...item }];
        }
        return [...acc, item];
      }, []);
    },
    removeItem(state, action) {
      state.list.filter((item: WomenAccount) => item.id !== action.payload.id);
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

export const { removeItem, removeItems, updateItem, setItems, removeFilterList, setFilterList, setItem} = itemsSlice.actions;
export default itemsSlice.reducer;