import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Hompage/Home";
import Login from "./Components/LogIn/Login";
import Register from "./Components/Register/Register";
import Products from "./Components/Header/Products/Products";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Orders from "./Components/Order/Orders";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
