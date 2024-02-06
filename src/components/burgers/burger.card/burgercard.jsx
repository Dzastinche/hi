import React, { useState } from "react";
import "./burgercard.scss"; //
const style = {
  backgroundImage:
    "url('https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg')",
  backgroundSize: "cover",
};
const Card = ({ recipe, ...props }) => {
  const allRecips = props.props;
  const [burger, change] = useState(allRecips);
  const changeSides = (uId, sign) => {
    const state = Object.values(burger)[0];
    let newState = [];
    if (sign === "-") {
      newState = state.filter((el) => el !== uId);
      console.log(newState, state);
    } else {
      const finditem = state.find((el) => el === uId);
      newState = [];
      state.map((ele) => {
        ele === uId && newState.includes(ele)
          ? newState.push(`extra ${finditem}`)
          : newState.push(ele);
        console.log(
          newState,
          ele,
          uId,
          finditem,
          "nzj",
          newState.includes(ele)
        );
      });

      console.log(newState, state);
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
          {Object.values(burger)[0].map((el, i) => {
            return (
              <div className="recipes" id={i} key={i}>
                <p>{el}</p>
                <div>
                  <button
                    className="recipes-plus"
                    onClick={() => {
                      console.log(el);
                      changeSides(el, "+");
                    }}
                  >
                    +
                  </button>
                  <button
                    className="recipes-minus"
                    onClick={() => {
                      console.log(el);
                      changeSides(el, "-");
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
