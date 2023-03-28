import { useCallback, useEffect } from "react";

import useAppDispatch from "./useAppDispatch.hook";

import { removeToken, setToken } from "../store/slices/token.slice";
import { removeRole, setRole } from "../store/slices/role.slice";

const LOCALSTORAGE_NAME = "User";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = useCallback((jwtToken: any, role: any) => {
    dispatch(setToken(jwtToken));
    dispatch(setRole(role))
    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify({ token: jwtToken, role: role }));
  },[]);

  const logout = useCallback(() => {
    dispatch(removeToken());
    dispatch(removeRole());
    localStorage.removeItem(LOCALSTORAGE_NAME);
  }, []);

  useEffect(() => {
    const data: Storage | null  = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME) || "{}");
    if(data && data.token) {
      login(data.token, data.role);
    }
  }, [login]);

  return {login, logout};
};