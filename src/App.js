import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import MyHeader from "./components/header/header-menu.jsx";

import BurgerSide from "./components/burgers/burgers.jsx";
import Cart from "./components/cart/cart.jsx";

function App() {
  const style = {
    backgroundImage:
      "url('https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg')",
    backgroundSize: "cover",
  };
  const [hide, show] = useState(true);

  const toggle = () => {
    hide ? show(false) : show(true);
    console.log(hide);
  };
  return (
    <div>
      <MyHeader></MyHeader>

      <Cart></Cart>

      <Link to="/card">to Cards</Link>
      <Routes>
        <Route path="/card" element={<BurgerSide />}></Route>
      </Routes>
    </div>
  );
}

export default App;
