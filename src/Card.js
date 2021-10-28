import React, { useContext } from "react";
import { useHistory } from "react-router";
import { 재고context } from "./App.js";

function Card(props) {
  const 재고 = useContext(재고context);
  const history = useHistory();

  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push(`/detail/${props.data.id}`);
      }}
    >
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="100%"
      />
      <h4>{props.data.title}</h4>
      <p>
        {props.data.content}. {props.data.price}₩
      </p>
      재고 : {재고}
    </div>
  );
}

export default Card;
