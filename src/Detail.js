import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const 박스 = styled.div`
  padding-top: 30px;
`;

const 제목 = styled.h4`
  font-size: 25;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  const [alert, alert변경] = useState(true);
  const [inputData, inputData변경] = useState("");
  const [누른탭, 누른탭변경] = useState(0);
  const [스위치, 스위치변경] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const 찾은상품 = props.data.find((상품) => {
    return 상품.id == id;
  });
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // 1. 누가 detail페이지 들어가면
  // 2. local storage에 있는 항목을 꺼냄
  // 3. 경우가 두가지가 있겠네? null이 나오거나 []가 나오거나
  // 4. []가 나오면 따옴표 제거하고 url파라미터의 id부분을 push()함
  // 5. array에 0이 이미 있으면 0추가하지말고 그냥냅둬주길 중복 처리하기 (set자료형)
  // 6. 그러면 []를 다시 llocalStorge에 저장함(따옴표쳐서)

  useEffect(() => {
    // localStorage.setItem("watched", "[]");
    let arr = localStorage.getItem("watched");

    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }

    arr.push(id);
    arr = new Set(arr);
    arr = [...arr];

    localStorage.setItem("watched", JSON.stringify(arr));
  }, []);

  useEffect(() => {
    const 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머); //setTimeOut주의점 : 컴포넌트 사라질때 타이머 해제하기. 코드꼬임 버그예방
    };
  }, []);

  return (
    <div className="container">
      <박스>
        <제목>Detail</제목>
      </박스>
      {inputData}
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      />

      {alert === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      {/* 상품 디테일 */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              찾은상품.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>

          <Info 재고={props.재고} />
          <div>
            사이즈 선택
            <select name="sizes" id="sizes">
              <option value="230">230</option>
              <option value="240">240</option>
              <option value="250">250</option>
              <option value="260">260</option>
              <option value="270">270</option>
            </select>
          </div>

          <button
            className="btn btn-danger"
            onClick={() => {
              props.재고변경([
                ...props.재고.map((i) => {
                  const 재고빠짐 = i - 1;
                  return 재고빠짐;
                }),
              ]);
              dispatch({
                type: "항목추가",
                payload: { id: 찾은상품.id, name: 찾은상품.title, quantity: 1 },
              });
              history.push("/cart");
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      {/* 상세설명 탭 */}
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
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

  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다</div>;
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다</div>;
  } else if (props.누른탭 === 2) {
    return <div>2번째 내용입니다</div>;
  }
}

function Info(props) {
  return <p>재고 : {props.재고[0]}</p>;
}

export default Detail;
