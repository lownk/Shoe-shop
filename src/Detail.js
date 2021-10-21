import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { Nav } from "react-bootstrap";

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

  useEffect(() => {
    const 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머); //setTimeOut주의점 : 컴포넌트 사라질때 타이머 해제하기. 코드꼬임 버그예방
    };
  }, []);

  const { id } = useParams();
  const history = useHistory();
  const 찾은상품 = props.data.find((상품) => {
    return 상품.id == id;
  });

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

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>

          <Info 재고={props.재고} />

          <button
            className="btn btn-danger"
            onClick={() => {
              props.재고변경([
                ...props.재고.map((i) => {
                  const 재고빠짐 = i - 1;
                  return 재고빠짐;
                }),
              ]);
              console.log(props.재고);
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

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              누른탭변경(0);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              누른탭변경(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              누른탭변경(2);
            }}
          >
            Option 3
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 누른탭={누른탭} />
    </div>
  );
}

function TabContent(props) {
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
