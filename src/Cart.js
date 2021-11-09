import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";

function Cart(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log("ffff", state);

  return (
    <>
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
                <td>
                  <div className="marginn">{a.id}</div>
                </td>
                <td className="col-md-2">
                  <img className="shoePic" alt="shoes" src={a.img} />
                </td>
                <td>
                  <div className="productTitle">
                    <b>{a.title}</b>
                    <div>{a.content}</div>
                  </div>
                </td>
                <td>
                  <div className="productTitle">
                    ₩{a.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </td>
                <td>
                  <div className="countBar productTitle">
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
                <td>
                  <Button
                    className="btn btn-primary productTitle"
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
    </>
  );
}

// function 함수명(state) {
//   return {
//     state: state.alertReducer,
//     alert열렸니: state.alertReducer,
//   };
// }
// export default connect(함수명)(Cart);
export default Cart;
