import React, { useState, useContext } from "react";
import { 재고context } from "./App.js";

function Card(props) {
  let 재고 = useContext(재고context);

  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="100%"
      />
      <h4>{props.data.title}</h4>
      <p>
        {props.data.content}. {props.data.price}₩
      </p>
      {재고}
    </div>
  );
}

export default Card;
