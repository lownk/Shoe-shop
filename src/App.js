import React, { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Data from "./data.js";
import Card from "./Card.js";
import Jumbotron from "./Jumbotron.js";
import Detail from "./Detail.js";
import axios from "axios";
import Loading from "./Loading.js";
import Fail from "./Fail";
import { Link, Route } from "react-router-dom";
import Cart from "./Cart";

export const 재고context = React.createContext();

function App() {
  let [data, data변경] = useState(Data);
  let [클릭횟수, 클릭횟수변경] = useState(1);
  let [실패창, 실패창변경] = useState(false);
  let [로딩창, 로딩창변경] = useState(false);
  let [더보기, 더보기변경] = useState(true);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              sinuSHOE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/detail/0">
                  Product Detail
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" as={Link} to="/cart">
                    Shopping Cart
                  </NavDropdown.Item>
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
        <Jumbotron />
        <div className="container">
          {/* <재고context.Provider value={재고}> */}
          <div className="row">
            {data.map((a, i) => {
              return <Card data={data[i]} i={i} key={i} />;
            })}
          </div>
          {/* </재고context.Provider> */}

          {더보기 == true ? (
            <button
              className="btn btn-primary my-5 px-5"
              onClick={() => {
                클릭횟수변경(클릭횟수 + 1);
                // console.log(클릭횟수);
                로딩창변경(true);
                실패창변경(false);
                axios
                  .get(
                    `https://codingapple1.github.io/shop/data${
                      클릭횟수 + 1
                    }.json`
                  )
                  .then((result) => {
                    로딩창변경(false);
                    data변경([...data, ...result.data]);
                  })
                  .catch(() => {
                    로딩창변경(false);
                    실패창변경(true);
                    더보기변경(false);
                    console.log("실패했어요.." + 클릭횟수);
                  });
              }}
            >
              더보기
            </button>
          ) : null}

          {로딩창 == true ? <Loading /> : null}
        </div>
        {실패창 == true ? <Fail /> : null}
      </Route>

      <Route path="/detail/:id">
        <Detail data={data} 재고={재고} 재고변경={재고변경} />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>
    </div>
  );
}

export default App;
