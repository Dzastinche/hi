import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import MyHeader from "./components/header/header-menu.jsx";

import BurgerSide from "./components/burgers/burgers.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "./redux/reducers/reducers.js";

function App() {
  const [burgers, add] = useState([]);
  const recipe = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3000/burgers")
      .then((ele) => ele.json())
      .then((el) => {
        add(el.burgers);
        dispatch(getRecipes(el.burgers));
      })
      .catch((err) => console.log("Error", err));
  }, []);

  return (
    <div>
      <MyHeader></MyHeader>
      <Link to="/card">to Cards</Link>
      <Routes>
        <Route path="/card" element={<BurgerSide params={burgers} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
