import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import routesHook from "./hooks/routes.hook";
import "bootstrap/dist/css/bootstrap.min.css";
import useAppSelector from "./hooks/useAppSelector.hook";
import {AuthContext} from "./context/auth.context"
import { useAuth } from "./hooks/auth.hook";

function App() {
  const role = useAppSelector(state => state.role.value);
  const routes = routesHook({ role });
  const { login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{login, logout}}>
      {!!role && <NavBar />}
      {routes}
    </AuthContext.Provider>
  );
}

export default App;
