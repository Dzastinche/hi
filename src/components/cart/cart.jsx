import React, { useState } from "react";
import "./cart.scss";
import CartContent from "./cart-content/cart-content";

const Cart = () => {
  const [show, hide] = useState(true);
  const toggle = () => {
    hide(!show);
  };
  return (
    <div className="cart-everything" style={{ right: show ? "20px" : "100px" }}>
      <button
        onClick={() => {
          console.log("klikno");
          toggle();
        }}
      >
        {show ? "show" : "hide"}
      </button>
      <div style={{ height: show ? "0px" : "70%" }} className={`cart`}>
        <CartContent></CartContent>
      </div>
    </div>
  );
};

export default Cart;
