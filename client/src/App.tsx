import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { AuthContext } from "./context/auth.context";

import routesHook from "./hooks/routes.hook";
import useAppSelector from "./hooks/useAppSelector.hook";
import { useAuth } from "./hooks/auth.hook";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RoleEnum } from "./enums/role.enum";
import axios from "axios";
import { url } from "./main";
import useAppDispatch from "./hooks/useAppDispatch.hook";
import { setItems } from "./store/slices/items.slice";

const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const role: string = useAppSelector(state => state.role.value);
  const token: string = useAppSelector(state => state.token.value);

  const routes = routesHook({ role });
  const { login, logout } = useAuth();

  useEffect(() => {
    if (role === RoleEnum.ADMIN.toString()) {
      const fetch = async () => {
        try {
          const response = await axios.get(`${url}/women-accounting`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          dispatch(setItems(response.data));
        } catch (error) {
          alert(error)
        }
      };
      fetch();
    }
  }, [role]);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {!!role && <NavBar />}
      {routes}
    </AuthContext.Provider>
  );
};

export default App;
