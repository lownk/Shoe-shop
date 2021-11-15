import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import RecentlyViewed from "./RecentlyViewed";
import Magnifier from "react-glass-magnifier";

const 박스 = styled.div`
  padding-top: 30px;
`;

const 제목 = styled.h4`
  font-size: 25;
  color: ${(props) => props.색상};
  margin-top: 30px;
  margin-bottom: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();
  let state = useSelector((state) => state);
  const dispatch = useDispatch();

  let [alert, alert변경] = useState(true);
  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);
  let [최근본상품, 최근본상품변경] = useState([]);
  let [최근본상품표시, 최근본상품표시변경] = useState(false);

  let 찾은상품 = props.data.find((상품) => {
    return 상품.id == id;
  });

  // 최근 본 상품 기능 구현
  // 1. 누가 detail페이지 들어가면
  // 2. local storage에 있는 항목을 꺼냄
  // 3. 경우가 두가지가 있겠네? null이 나오거나 []가 나오거나
  // 4. []가 나오면 따옴표 제거하고 url파라미터의 id부분을 push()함
  // 5. array에 0이 이미 있으면 0추가하지말고 그냥냅둬주길 중복 처리하기 (set자료형)
  // 6. 그러면 []를 다시 localStorge에 저장함(따옴표쳐서)

  useEffect(() => {
    // localStorage.setItem("watched", "[]");
    let arr = localStorage.getItem("watched");

    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }

    arr.push(id);
    arr = [...arr];

    //이미 본 상품을 또 봤을때 이전의 자리에서 제거하고 배열의 가장 끝에 다시 추가해주는 로직(최신순이 되도록)
    if (arr.includes(id)) {
      arr = arr.filter((a) => a !== id);
      arr.push(id);
    }

    // 화면에 5개의 상품만 보여줄거니까 6개가 되면 맨앞 요소 삭제
    if (arr.length > 5) {
      arr.shift();
    }

    localStorage.setItem("watched", JSON.stringify(arr));
    console.log("저장한목록", arr);
  }, []);

  // localStorage 내용물 가져오기
  useEffect(() => {
    let arr = localStorage.getItem("watched");
    arr = JSON.parse(arr);

    arr = [...arr];
    console.log("따옴표뗀목록", arr);

    최근본상품변경(arr);
  }, []);

  useEffect(() => {
    console.log("최근본상품", 최근본상품);
  }, [최근본상품]);

  useEffect(() => {
    const 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머); //setTimeOut주의점 : 컴포넌트 사라질때 타이머 해제하기. 코드꼬임 버그예방
    };
  }, []);

  useEffect(() => {
    const 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머);
    };
  }, []);

  return (
    <div className="container">
      <박스>
        <제목>Product Detail</제목>
      </박스>
      {/* {inputData}
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      /> */}
      {alert === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      {/* 상품 디테일 */}
      <div className="row">
        <div className="col-md-1 m-auto">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="arrow"
            size="2x"
            onClick={() => {
              history.push(`/detail/${id - 1}`);
            }}
          />
        </div>
        <div className="col-md-6 m-auto">
          <div className="wrap">
            <Magnifier
              className="magImage"
              imageUrl={`https://codingapple1.github.io/shop/shoes${
                찾은상품.id + 1
              }.jpg`}
              imgAlt="shoe"
              zoomFactor={1.8}
              glassDimension={240}
              largeImageUrl={`https://codingapple1.github.io/shop/shoes${
                찾은상품.id + 1
              }.jpg`}
              glassBorderColor="white"
              glassBorderWidth={1}
            />
            {/* <img
              className="target"
              data-scale="2"
              src={`https://codingapple1.github.io/shop/shoes${
                찾은상품.id + 1
              }.jpg`}
              width="100%"
            /> */}
          </div>
        </div>
        <div className="col-md-4 m-auto">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>
            ₩{찾은상품.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <Info 재고={props.재고} />

          <button
            className="btn btn-light mx-2 my-3 px-5 py-3"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기
          </button>
          <button
            className="btn btn-dark mx-2 px-5 py-3"
            onClick={() => {
              props.재고변경([
                ...props.재고.map((i) => {
                  const 재고빠짐 = i - 1;
                  return 재고빠짐;
                }),
              ]);
              dispatch({
                type: "항목추가",
                payload: {
                  id: 찾은상품.id,
                  title: 찾은상품.title,
                  img: `https://codingapple1.github.io/shop/shoes${
                    찾은상품.id + 1
                  }.jpg`,
                  price: 찾은상품.price,
                  content: 찾은상품.content,
                },
              });
              history.push("/cart");
            }}
          >
            주문하기
          </button>
        </div>
        <div className="col-md-1 m-auto">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="arrow"
            size="2x"
            onClick={() => {
              history.push(`/detail/${+id + 1}`);
            }}
          />
        </div>
      </div>

      {/* 최근본상품 */}
      {최근본상품표시 === false ? (
        <recentlyViewed
          최근본상품={최근본상품}
          최근본상품변경={최근본상품변경}
          최근본상품표시={최근본상품표시}
          최근본상품표시변경={최근본상품표시변경}
        />
      ) : null}

      {/* 상세설명 탭 */}
      <Nav
        className="mt-5 describeBox"
        variant="tabs"
        defaultActiveKey="link-0"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              누른탭변경(0);
            }}
          >
            상품 상세 설명
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              누른탭변경(1);
            }}
          >
            배송정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              스위치변경(false);
              누른탭변경(2);
            }}
          >
            교환/환불
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={스위치} classNames="wow" timeout={1000}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci quis tortor euismod congue. Vivamus hendrerit ullamcorper dignissim. Quisque ultrices at mi in viverra. Nulla facilisi. Sed vel velit at velit consectetur consectetur. Etiam sapien justo, tristique eget fermentum eu, malesuada sed diam. Nulla facilisi. Proin suscipit tincidunt purus ac molestie. Nulla leo tortor, sodales a fringilla sit amet, lacinia eu orci. Sed porttitor iaculis lectus id pharetra. Nullam malesuada, nisl at vulputate elementum, purus nisl iaculis purus, eu tempor elit mi et odio. In quis consectetur risus, ac feugiat ante. Nunc imperdiet, velit quis rhoncus pellentesque, justo nisi lacinia mi, et bibendum ipsum libero id nibh. Phasellus blandit ante laoreet tempor venenatis. In iaculis dolor in neque sodales dapibus. Quisque lacinia dictum vestibulum. Vestibulum ornare nulla eu massa congue maximus. Phasellus venenatis volutpat risus, vitae luctus purus gravida eget. Vestibulum id arcu vitae quam dictum viverra nec nec metus. Sed vulputate ultrices purus, id viverra mauris luctus sit amet. Mauris eget lectus mattis, posuere nibh non, vestibulum arcu. Mauris aliquam dui at ante hendrerit, sit amet imperdiet diam sodales.";
  if (props.누른탭 === 0) {
    return <div className="describeText">{dummyText}</div>;
  } else if (props.누른탭 === 1) {
    return <div className="describeText">{dummyText}</div>;
  } else if (props.누른탭 === 2) {
    return <div className="describeText">{dummyText}</div>;
  }
}

function Info(props) {
  return <p>재고 : {props.재고[0]}</p>;
}

function recentlyViewed(props) {
  return (
    <div className="container recentlyViewedBox">
      <div className="row">
        최근 본 상품
        {props.최근본상품.map((a, i) => {
          return a > 0 ? (
            <div className="innerBox col-md-2">
              <img
                src={`https://codingapple1.github.io/shop/shoes${a}.jpg`}
                width="90%"
                onClick={() => {
                  // history.push(`/detail/${a - 1}`);
                }}
              />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Detail;
