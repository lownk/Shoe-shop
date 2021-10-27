import React, { useState, useContext } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Data from "./data.js";
import Card from "./Card.js";
import Jumbotron from "./Jumbotron.js";
import Detail from "./Detail.js";
import axios from "axios";
import Loading from "./Loading.js";
import Fail from "./Fail";
import { Link, Route, Switch } from "react-router-dom";
import Cart from "./Cart";

export const 재고context = React.createContext();

function App() {
  const [data, data변경] = useState(Data);
  const [클릭횟수, 클릭횟수변경] = useState(1);
  const [실패창, 실패창변경] = useState(false);
  const [로딩창, 로딩창변경] = useState(false);
  const [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              ShoeShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/detail/1">
                  Detail
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
          <재고context.Provider value={재고}>
            <div className="row">
              {data.map((a, i) => {
                return <Card data={data[i]} i={i} key={i} />;
              })}
            </div>
          </재고context.Provider>

          <button
            className="btn btn-primary"
            onClick={() => {
              클릭횟수변경(클릭횟수 + 1);
              // console.log(클릭횟수);
              로딩창변경(true);
              axios
                .get(
                  `https://codingapple1.github.io/shop/data${클릭횟수 + 1}.json`
                )
                .then((result) => {
                  로딩창변경(false);
                  data변경([...data, ...result.data]);
                })
                .catch(() => {
                  로딩창변경(false);
                  실패창변경(true);
                  console.log("실패했어요.." + 클릭횟수);
                });
            }}
          >
            더보기
          </button>
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
