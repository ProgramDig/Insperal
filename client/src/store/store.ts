import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slices/token.slice";
import roleSlice from "./slices/role.slice";
import itemsSlice from "./slices/items.slice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
    role: roleSlice,
    items: itemsSlice
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch