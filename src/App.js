import React, { useEffect, useState } from "react";
import "./App.scss";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faTumblrSquare,
  faInstagram,
  faYoutube,
  faSpotify,
  faPinterest,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

export const 재고context = React.createContext();

function App() {
  let [data, data변경] = useState(Data);
  let [클릭횟수, 클릭횟수변경] = useState(1);
  let [실패창, 실패창변경] = useState(false);
  let [로딩창, 로딩창변경] = useState(false);
  let [더보기, 더보기변경] = useState(true);
  let [재고, 재고변경] = useState([10, 11, 12]);

  // 필터링함수

  let 필터없음 = () => {
    let sortingField = "id";
    let copyData = [...data];
    copyData = copyData.sort(function (a, b) {
      return a[sortingField] - b[sortingField];
    });
    data변경(copyData);
  };

  let 낮은가격순 = () => {
    let sortingField = "price";
    let copyData = [...data];
    copyData = copyData.sort(function (a, b) {
      return a[sortingField] - b[sortingField];
    });
    data변경(copyData);
  };

  let 높은가격순 = () => {
    let sortingField = "price";
    let copyData = [...data];
    copyData = copyData.sort(function (a, b) {
      return b[sortingField] - a[sortingField];
    });
    data변경(copyData);
  };

  let 상품명순 = () => {
    let copyData = [...data];
    copyData = copyData.sort(function (a, b) {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });
    data변경(copyData);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  // 옵션 이벤트핸들러
  let 옵션선택 = (e) => {
    if (e.target.value === "필터없음") {
      필터없음();
    } else if (e.target.value === "낮은가격순") {
      낮은가격순();
    } else if (e.target.value === "높은가격순") {
      높은가격순();
    } else if (e.target.value === "상품명순") {
      상품명순();
    }
  };

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
          {/* 필터기능 */}
          <div className="filterStyle">
            상품 정렬 :
            <select
              onChange={(e) => {
                옵션선택(e);
              }}
              name="producFilter"
              id="productFilter"
            >
              <option value="정렬없음">정렬 없음</option>
              <option value="낮은가격순">낮은 가격순</option>
              <option value="높은가격순">높은 가격순</option>
              <option value="상품명순">상품명순</option>
            </select>
          </div>

          {/* 상품카드 */}
          <div className="row">
            {data.map((a, i) => {
              return <Card data={data[i]} i={i} key={i} />;
            })}
          </div>

          {/* 더보기버튼 */}
          {더보기 == true ? (
            <button
              className="btn btn-dark my-5 px-5 mx-5"
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

      {/* 푸터 */}
      <div className="footer">
        <article className="footerOne">
          <div className="elWrap">
            <span className="element">CONTACT US</span>
            <span className="element">
              <FontAwesomeIcon icon={faTwitter} className="icons" />
              <span className="text">@sinushoe_help</span>
            </span>
            <span className="element">
              <FontAwesomeIcon icon={faPhoneAlt} className="icons" />
              <span className="text">1 234 567 8910</span>
            </span>
            <span className="element">
              <FontAwesomeIcon icon={faQuestionCircle} className="icons" />
              <span className="text">help@sinushoe.com</span>
            </span>
          </div>
        </article>
        <article className="footerTwo">
          <span className="sectionOne">
            <span className="largeCategorie">LET US HELP YOU</span>
            <ul className="smallCategorie">
              <li className="text">Order Status</li>
              <li className="text">Shipping & Handling</li>
              <li className="text">Returns & Exchanges</li>
              <li className="text">International Orders</li>
              <li className="text">Need Some Help?</li>
              <li className="text">Request a Style Guide</li>
            </ul>
          </span>

          <span className="sectionTwo">
            <span className="largeCategorie">OUR STORES</span>
            <ul className="smallCategorie">
              <li className="text">Stores Locator</li>
            </ul>
            <span className="largeCategorie">sinuSHOE REWARDS</span>
            <ul className="smallCategorie">
              <li className="text">Sign Up Now</li>
              <li className="text">FAQs</li>
            </ul>
          </span>

          <span className="sectionThree">
            <span className="largeCategorie">OUR BRANDS</span>
            <ul className="smallCategorie">
              <li className="text">sinuSHOE Factory</li>
              <li className="text">The Loyal Shoe</li>
            </ul>
            <span className="largeCategorie">ABOUT sinuSHOE</span>
            <ul className="smallCategorie">
              <li className="text">Out Story</li>
              <li className="text">Careers</li>
            </ul>
          </span>

          <span className="sectionFour">
            <span className="largeCategorie">POPULAR SEARCHES</span>
            <ul className="smallCategorie">
              <li className="text">Sneakers</li>
              <li className="text">Heels</li>
              <li className="text">Dress Shoes</li>
              <li className="text">Sport Shoes </li>
              <li className="text">Slippers</li>
            </ul>
          </span>

          <span className="sectionFive">
            <span className="largeCategorie">GET TO KNOW US</span>
            <ul className="smallCategorie">
              <li className="text">
                <FontAwesomeIcon icon={faTwitter} className="littleIcons" />
                <FontAwesomeIcon icon={faInstagram} className="littleIcons" />
                <FontAwesomeIcon icon={faGooglePlusG} className="littleIcons" />
                <FontAwesomeIcon icon={faFacebook} className="littleIcons" />
                <FontAwesomeIcon
                  icon={faTumblrSquare}
                  className="littleIcons"
                />
                <FontAwesomeIcon icon={faYoutube} className="littleIcons" />
                <FontAwesomeIcon icon={faSpotify} className="littleIcons" />
                <FontAwesomeIcon icon={faPinterest} className="littleIcons" />
              </li>
              <li className="text shipTo">
                SHIP TO : <span className="flag">🇰🇷</span> SOUTH KOREA | CHANGE
              </li>
            </ul>
          </span>
        </article>
      </div>

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
