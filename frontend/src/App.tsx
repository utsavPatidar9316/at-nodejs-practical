import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
