import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import MyHeader from "./components/header/header-menu.jsx";

import BurgerSide from "./components/burgers/burgers.jsx";

function App() {
  return (
    <div>
      <MyHeader></MyHeader>
      <Link to="/card">to Cards</Link>
      <Routes>
        <Route path="/card" element={<BurgerSide />}></Route>
      </Routes>
    </div>
  );
}

export default App;
