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
        cartitem.quantity++;
      } else {
        const addToCart = {
          id: 액션.payload.id,
          img: 액션.payload.img,
          title: 액션.payload.title,
          price: 액션.payload.price,
          content: 액션.payload.content,
          quantity: 1,
        };

        state.cart.push(addToCart);
      }

      return {
        ...state,
        cart: [...state.cart],
        total: state.total + 액션.payload.price,
      };

    case "상품삭제":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== 액션.payload.id),
        total: state.total - 액션.payload.price * 액션.payload.quantity,
      };

    case "수량증가":
      const plus = state.cart.find((item) => item.id === 액션.payload.id);

      if (plus) {
        plus.quantity++;
        console.log("this", 액션.payload.price);
      }

      return {
        ...state,
        cart: [...state.cart],
        total: state.total + 액션.payload.price,
      };

    case "수량감소":
      const minus = state.cart.find((item) => item.id === 액션.payload.id);

      if (minus && minus.quantity > 1) {
        minus.quantity--;

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

reportWebVitals();
