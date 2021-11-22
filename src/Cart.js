import React, { useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";

function Cart(props) {
  const state = useSelector((state) => state);
  let [모달창열렸니, 모달창열렸니변경] = useState(false);
  let [상품안내, 상품안내변경] = useState(false);
  const dispatch = useDispatch();

  const 모달창토글 = (e) => {
    모달창열렸니변경(!모달창열렸니);
  };

  const 상품없음안내노출 = () => {
    console.log("hihihihi");
    상품안내변경(true);
  };

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>상품 no.</th>
            <th>상품이미지</th>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>상품 삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.cartReducer.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td className="parent">
                  <div className="child">{a.id}</div>
                </td>
                <td className="col-md-2">
                  <img className="shoePic" alt="shoes" src={a.img} />
                </td>
                <td className="parent">
                  <div className="child">
                    <b>{a.title}</b>
                    <div>{a.content}</div>
                  </div>
                </td>
                <td className="parent">
                  <div className="child">
                    ₩{a.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </td>
                <td className="parent">
                  <div className="countBar">
                    <Button
                      className="countButton"
                      variant="light"
                      onClick={() => {
                        dispatch({
                          type: "수량감소",
                          payload: {
                            id: a.id,
                            quantity: a.quantity,
                            price: a.price,
                          },
                        });
                      }}
                    >
                      -
                    </Button>
                    <span className="countNumber">{a.quantity}</span>
                    <Button
                      variant="light"
                      className="countButton"
                      onClick={() => {
                        dispatch({
                          type: "수량증가",
                          payload: {
                            id: a.id,
                            price: a.price,
                          },
                        });
                      }}
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td className="parent">
                  <Button
                    className="btn btn-primary child"
                    variant="dark"
                    onClick={() => {
                      dispatch({
                        type: "상품삭제",
                        payload: {
                          id: a.id,
                          price: a.price,
                          quantity: a.quantity,
                        },
                      });
                    }}
                  >
                    삭제
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* 총합계금액 */}

      {상품안내 && (
        <div className="noItem">장바구니에 담긴 상품이 없습니다.</div>
      )}

      <div className="totalAmount">
        <span className="center">상품 금액</span>
        <b className="center">
          ₩
          {state.cartReducer.total
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </b>
        <span className="center">+</span>
        <span className="center">배송비</span>
        <b className="center">₩2,500</b>
        <span className="center">=</span>
        <h3 className="center">
          ₩
          {(state.cartReducer.total + 2500)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h3>
      </div>
      <div className="orderWrap">
        <Button
          className="btn btn-dark px-5 py-3 orderBtn"
          variant="dark"
          onClick={모달창토글}
        >
          주문하기
        </Button>
      </div>

      {모달창열렸니 && (
        <div className="modalWrap" onClick={모달창토글}>
          <div className="orderModal" onClick={(e) => e.stopPropagation()}>
            <div>
              <h4>주문이 완료되었습니다!</h4>
              <div className="smallFont">
                빠른 시일 내 상품 배송을 시작하겠습니다.
              </div>
              <br />
              <span className="ok" onClick={모달창토글}>
                <Button
                  className="btn btn-dark smallFont"
                  variant="dark"
                  onClick={() => {
                    state.cartReducer.cart = [];
                    state.cartReducer.total = 0;
                    {
                      상품없음안내노출();
                    }
                  }}
                >
                  알겠습니다
                </Button>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* alert  */}
      {props.alert열렸니 === true ? (
        <div className="my-alert2">
          <p>
            지금 구매하시면 신규 할인 20%
            <button
              onClick={() => {
                dispatch({ type: "alert닫기" });
              }}
            >
              닫기
            </button>
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
