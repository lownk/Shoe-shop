import React, { useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Data from "./data.js";
import Card from "./Card.js";
import Jumbotron from "./Jumbotron.js";
import Detail from "./Detail.js";

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
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/detail">Detail</Link>
                </Nav.Link>
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
        <Jumbotron />
        <div className="container">
          <div className="row">
            {data.map((a, i) => {
              return <Card data={data[i]} i={i} key={i} />;
            })}
          </div>
        </div>
      </Route>

      <Route path="/detail">
        <Detail />
      </Route>
    </div>
  );
}

export default App;
