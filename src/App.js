import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/";
import SigninPage from "./pages/signin";

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
      </Switch>
    </div>
  );
}

export default App;
