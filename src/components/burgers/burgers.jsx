import Card from "./burger.card/burgercard";
import "./burgers.scss";

const BurgerSide = (props) => {
  let allBurgers = props.params;

  return (
    <div className="burgerSidePage">
      {allBurgers.map((el, i) => {
        return <Card props={el} key={i} />;
      })}
    </div>
  );
};

export default BurgerSide;
