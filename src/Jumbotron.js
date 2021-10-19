import React from "react";
import styled from "styled-components";

function Jumbotron() {
  return (
    <div className="bg-light p-5 rounded-lg m-3 background">
      <div className="innerbackground">
        <h1 className="title">20% Season Off</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information. It uses
          utility classes for typography and spacing to space content out within
          the larger container.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;
