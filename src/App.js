import logo from "./logo.svg";
import "./App.css";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
    </div>
  );
}

export default App;
