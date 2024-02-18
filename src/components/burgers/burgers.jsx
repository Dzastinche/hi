import Card from "./burger.card/burgercard";
import "./burgers.scss";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/reducers/reducers";
import { useEffect, useState } from "react";

const BurgerSide = (props) => {
  const [burgers, add] = useState([]);
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
    <div className="burgerSidePage">
      {burgers.map((el, i) => {
        return <Card recipes={el} key={i} />;
      })}
    </div>
  );
};

export default BurgerSide;
