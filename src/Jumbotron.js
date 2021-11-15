import React from "react";

function Jumbotron() {
  return (
    <div className="bg-light p-5 rounded-lg m-3 background">
      <div className="innerBackground">
        <h1 className="title">20% Season Off</h1>
        <p className="lead">
          Enjoy the big sale prepared by SinuSHOE in the winter of 2021.
          <br /> Various types of shoes and freedom of choice in wide size await
          you. Go on an adventure to find the right type of shoes for you right
          now!
        </p>
        <a className="btn btn-success btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;
