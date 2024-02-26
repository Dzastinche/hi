import React, { useEffect, useState } from "react";
import "./burgercard.scss"; //
import { useDispatch } from "react-redux";
import { getRecipes } from "../../../redux/reducers/reducers";

const style = {
  backgroundImage:
    "url('https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg')",
  backgroundSize: "cover",
};
const Card = ({ recipes }) => {
  const dispatch = useDispatch();
  const allRecips = recipes;

  const [burger, change] = useState(allRecips);
  //making new state for sides

  const [recipe, setRecipe] = useState(Object.values(allRecips)[0]);
  const [normal, red] = useState([]);
  const [editedRecipe, sendRecipe] = useState([...recipe]);
  //working with buttons + and -
  const changeSides = (uId, sign, i) => {
    let array = [];
    const side = uId;
    let index = normal.indexOf(i);
    //when button + is clicked
    if (sign === "+") {
      switch (index !== -1) {
        case true:
          let newRed = normal.filter((el) => el !== i);
          red(newRed);
          break;
        default:
          array = recipe.map((singleSide) => {
            if (side === singleSide && !singleSide.includes("Extra")) {
              return `Extra ${singleSide}`;
            } else {
              !editedRecipe.includes(side)
                ? sendRecipe([...editedRecipe, side])
                : console.log(editedRecipe);

              return singleSide;
            }
          });
          setRecipe(array);
          break;
      }
    }
    //when button - is clicked
    else {
      let newRed = [...normal];

      array = recipe.map((singleSide) => {
        console.log(singleSide === side, singleSide.includes("Extra"), normal);
        if (singleSide === side) {
          if (singleSide === side && singleSide.includes("Extra")) {
            console.log(normal);
            return singleSide.replace("Extra", "").trim();
          } else {
            sendRecipe(editedRecipe.filter((el) => el !== singleSide));
            newRed.push(i);
            return singleSide;
          }
        } else {
          return singleSide;
        }
      });
      red(newRed);
      setRecipe(array);
    }
  };
  const addBurgerToCart = () => {
    console.log(recipe, editedRecipe);
    dispatch(getRecipes(recipe));
  };
  return (
    <div className="card">
      <div className="card-front" style={style}>
        <h2 className="card-title">{Object.keys(recipes)}</h2>
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
                {normal.includes(i) ? <p>-</p> : null}
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
          <button
            onClick={() => {
              addBurgerToCart();
            }}
          >
            add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
/*{Object.values[allRecips.props].map((el) =>
console.log("da vidim", el)
)}*/
