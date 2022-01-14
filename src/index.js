import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from './Views/admin/Login';
import Logout from './Views/admin/Logout';
import Register from './Views/admin/Register';
import Dashboard from './Views/dashboard/Dashboard';
import Mortgages from "./Views/dashboard/calculators/Mortgages";
import Savings from "./Views/dashboard/calculators/Savings";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mortgages" element={<Mortgages />} />
      <Route path="/savings" element={<Savings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);