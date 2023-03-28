import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slices/token.slice";
import roleSlice from "./slices/role.slice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
    role: roleSlice
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch