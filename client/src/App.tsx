import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import routesHook from "./hooks/routes.hook";

function App() {
  const routes = routesHook({});
  return (
    <div>
      <NavBar/>
      {routes}
    </div>
  );
}

export default App;
