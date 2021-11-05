import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";

function Cart(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>상품 no.</th>
            <th>상품명</th>
            <th>수량</th>
            <th>상품 삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.cartReducer.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>
                  <Button
                    className="countButton"
                    variant="dark"
                    onClick={() => {
                      dispatch({
                        type: "수량감소",
                        payload: a.id,
                        payload2: a.quantity,
                      });
                    }}
                  >
                    -
                  </Button>
                  {a.quantity}
                  <Button
                    variant="dark"
                    className="countButton"
                    onClick={() => {
                      dispatch({
                        type: "수량증가",
                        payload: a.id,
                      });
                    }}
                  >
                    +
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn btn-primary"
                    variant="상품삭제"
                    onClick={() => {
                      dispatch({ type: "상품삭제", payload: a.id });
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

// function 함수명(state) {
//   return {
//     state: state.alertReducer,
//     alert열렸니: state.alertReducer,
//   };
// }
// export default connect(함수명)(Cart);
export default Cart;
