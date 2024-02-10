import React, { useEffect, useState } from "react";
import "./burgercard.scss"; //
import { ReactReduxContext } from "react-redux";
const style = {
  backgroundImage:
    "url('https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg')",
  backgroundSize: "cover",
};
const Card = (props) => {
  const allRecips = props.props;
  const [burger, change] = useState(allRecips);
  //making new state for sides
  const state = Object.values(burger)[0];
  const [recipe, setRecipe] = useState(state);
  const [normal, red] = useState([]);
  useEffect(() => {}, [burger, recipe]);
  const changeSides = (uId, sign, i) => {
    const finditem = recipe.find((el) => el === uId);
    let array = [...normal];
    if (sign === "-") {
      const newRecipe = recipe.map((ele) => {
        if (normal.includes(i)) {
          const element = array.indexOf(i);
          array.splice(element, 1);
          return ele;
        } else {
          if (uId === ele && ele.includes("extra ")) {
            array = array.filter((el) => el !== i);
            red(array);
            return ele.replace("extra", "");
          } else {
            array.includes(i) ? red(array) : array.push(i);
            red(array);
            return ele;
          }
        }
      });
      setRecipe(newRecipe);
    } else {
      const element = array.indexOf(i);
      array.splice(element, 1);
      red(array);
      //cheking if the side exist
      let newRecipe = recipe.map((ele) => {
        if (ele.includes("extra")) {
          return ele;
        } else {
          if (normal.includes(i)) {
            array.splice(element, 1);
            red(array);
            return ele;
          } else {
            return ele == uId && finditem ? `extra ${ele}` : ele;
          }
        }
      });

      setRecipe(newRecipe);
    }
  };

  return (
    <div className="card">
      <div className="card-front" style={style}>
        <h2 className="card-title">{Object.keys(allRecips)}</h2>
        <button className="card-button">Prikaži recept</button>
      </div>
      <div className="card-back">
        <h3 className="card-title">Recept</h3>

        <div className="card-recipe">
          {recipe.map((el, i) => {
            return (
              <div
                className={normal.includes(i) ? "recipes-red" : "recipes"}
                id={i}
                key={i}
              >
                <p>{el}</p>
                <div>
                  <button
                    className="recipes-plus"
                    onClick={() => {
                      changeSides(el, "+", i);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="recipes-minus"
                    onClick={() => {
                      changeSides(el, "-", i);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
/*{Object.values[allRecips.props].map((el) =>
console.log("da vidim", el)
)}*/
