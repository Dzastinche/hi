import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, add] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/burgers")
      .then((ele) => ele.json())
      .then((el) => {
        add(el.burgers);
      })
      .then(console.log(value));
  }, [add]);
  console.log("da vidims", value);
  return (
    <div>
      <p>sta cemo sad</p>
      {value.map((el, i) => {
        return <p key={i}>g{Object.keys(el)[0]}</p>;
      })}
    </div>
  );
}

export default App;
