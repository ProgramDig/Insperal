import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { AuthContext } from "./context/auth.context";

import routesHook from "./hooks/routes.hook";
import useAppSelector from "./hooks/useAppSelector.hook";
import { useAuth } from "./hooks/auth.hook";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  const role: string = useAppSelector(state => state.role.value);
  const routes = routesHook({ role });
  const { login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {!!role && <NavBar />}
      {routes}
    </AuthContext.Provider>
  );
};

export default App;
