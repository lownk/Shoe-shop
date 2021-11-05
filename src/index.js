import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// 장바구니

const 초기값 = {
  cart: [],
  total: 0,
};

const cartReducer = (state = 초기값, 액션) => {
  switch (액션.type) {
    case "항목추가":
      const cartitem = state.cart.find((item) => item.id === 액션.payload.id);

      if (cartitem) {
        cartitem.quantity += 액션.payload.quantity;
      } else {
        const addToCart = {
          id: 액션.payload.id,
          img: 액션.payload.img,
          name: 액션.payload.name,
          price: 액션.payload.price,
          quantity: 1,
        };
        state.cart.push(addToCart);
      }

      return {
        ...state,
        cart: [...state.cart],
        total: state.total + 액션.payload.price,
      };

    // if (cartitem) {
    //   const copy = [...state];
    //   copy[cartitem].quantity++;
    //   return copy;
    // } else {
    //   const copy = [...state];
    //   copy.push(액션.payload);
    //   return copy;
    // }

    case "수량삭제":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== 액션.payload.id),
        total: state.total - 액션.payload.price * 액션.payload.quantity,
      };
    // const copy = [...state];
    // const 생존상품 = copy.filter((상품) => {
    //   return 상품.id !== 액션.payload;
    // });
    // return 생존상품;

    case "수량증가":
      const plus = state.cart.find((item) => item.id === 액션.payload.id);

      if (plus) {
        plus.quantity += 1;
      }

      return {
        ...state,
        cart: [...state.cart],
        total: state.total + 액션.payload.prie,
      };

    case "수량감소":
      const minus = state.cart.find((item) => item.id === 액션.payload.id);

      if (minus && minus.quantity > 1) {
        minus.quantity -= 1;

        return {
          ...state,
          cart: [...state.cart],
          total: state.total - 액션.payload.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart],
          total: state.total,
        };
      }
    // const copy = [...state];
    // if (액션.payload2 > 1) {
    //   copy[액션.payload].quantity--;
    // }
    // return copy;
    default:
      return state;
  }
};

// alert창
const alert초기값 = true;

function alertReducer(state = alert초기값, 액션) {
  if (액션.type === "alert닫기") {
    state = false;
    return state;
  } else {
    return state;
  }
}

const store = createStore(combineReducers({ cartReducer, alertReducer }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
