import React, { useState } from "react";

function Card(props) {
  return (
    <div>
      <div className="col-md-4">
        <img
          src="https://codingapple1.github.io/shop/shoes1.jpg"
          width="100%"
        />
        <h4>{props.data.title}</h4>
        <p>
          {props.data.content}. {props.data.price}
        </p>
      </div>
    </div>
  );
}

export default Card;
