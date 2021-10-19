import React, { useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Data from "./data.js";
import Card from "./Card.js";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [data, data변경] = useState(Data);

  return (
    <div>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Route exact path="/">
        <div className="bg-light p-5 rounded-lg m-3 background">
          <div className="innerbackground">
            <h1 className="title">20% Season Off</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information. It
              uses utility classes for typography and spacing to space content
              out within the larger container.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {data.map((a, i) => {
              return <Card data={data[i]} i={i} key={i} />;
            })}
          </div>
        </div>
      </Route>

      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      </Route>
    </div>
  );
}

export default App;
