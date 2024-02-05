import React from "react";
import "./burgercard.scss"; //
const style = {
  backgroundImage:
    "url('https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg')",
  backgroundSize: "cover",
};
const Card = ({ recipe, ...props }) => {
  const allRecips = props.props;
  console.log("karta", Object.values(allRecips));
  return (
    <div className="card">
      <div className="card-front" style={style}>
        <h2 className="card-title">{Object.keys(allRecips)}</h2>
        <button className="card-button">Prikaži recept</button>
      </div>
      <div className="card-back">
        <h3 className="card-title">Recept</h3>

        <p className="card-recipe">
          {Object.values(allRecips)[0].map((el) => {
            return (
              <div className="recipes">
                <p>{el}</p>
                <div>
                  <button className="recipes-plus">+</button>
                  <button className="recipes-minus">-</button>
                </div>
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
/*{Object.values[allRecips.props].map((el) =>
console.log("da vidim", el)
)}*/
