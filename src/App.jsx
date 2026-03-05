import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Not from "./components/Not";
import Create from "./components/Create";
import Home from "./components/Home";
import Products from "./components/Products";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<Not />} />
          <Route path="/create" element={<Create />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
