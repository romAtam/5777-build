import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/";
import SigninPage from "./pages/signin";
import Blender from "./pages/Blender";
import Javascript from "./pages/Javascript";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SigninPage />
        </Route>
        <Route exact path="/BLENDER">
          <Blender />
        </Route>
        <Route exact path="/JAVASCRIPT">
          <Javascript />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
