import logo from "./logo.svg";
import "./App.css";
import { Users } from "./containers/Users";
import { Login } from "./containers/Login";

function App() {
  return (
    <div className="App">
      <Users />
      <Login />
    </div>
  );
}

export default App;
