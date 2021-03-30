import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Users } from "./containers/Users";
import { Login } from "./containers/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
