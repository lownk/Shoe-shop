import React, { useState } from "react";

function Card(props) {
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
    </div>
  );
}

export default Card;
