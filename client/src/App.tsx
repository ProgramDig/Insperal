import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { AuthContext } from "./context/auth.context";

import routesHook from "./hooks/routes.hook";
import useAppSelector from "./hooks/useAppSelector.hook";
import { useAuth } from "./hooks/auth.hook";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import { loadItemsHook } from "./hooks/loadItems.hook";
import { WomenAccount } from "./interfaces/WomenAccount";

const App: React.FC = (): JSX.Element => {
  const role: string = useAppSelector(state => state.role.value);
  const items: WomenAccount[] = useAppSelector(state => state.items.list);
  const routes = routesHook({ role });
  const loadItems = loadItemsHook();
  const { login, logout } = useAuth();

  useEffect(() => {
    loadItems.fetch();
  }, [role]);

  useEffect(() => {
    if (items.length < 1) {
      loadItems.fetch();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {!!role && <NavBar />}
      <main id="wrap">
        {routes}
      </main>
      {!!role && <Footer />}
    </AuthContext.Provider>
  );
};

export default App;
