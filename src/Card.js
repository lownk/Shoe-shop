import React from "react";
import { useHistory } from "react-router";
import "./Card.scss";
// import { 재고context } from "./App.js";

function Card(props) {
  // const 재고 = useContext(재고context);
  const history = useHistory();

  return (
    <div
      className="col-md-4 mouseOver"
      onClick={() => {
        history.push(`/detail/${props.data.id}`);
      }}
    >
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="100%"
      />
      <h4>{props.data.title}</h4>
      <p>{props.data.content}.</p>
      <p>
        ₩{props.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
      {/* 재고 : {재고} */}
    </div>
  );
}

export default Card;
