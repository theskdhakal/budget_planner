import "./App.css";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Layout } from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-bootstrap";

function App() {
  return (
    <div className="wrapper">
      <Layout>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </div>
  );
}

export default App;
