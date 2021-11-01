import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

const 초기값 = [
  // { id: 0, name: "멋진신발", quantity: 1 },
  // { id: 1, name: "좋은신발", quantity: 1 },
];

function reducer(state = 초기값, 액션) {
  if (액션.type === "항목추가") {
    const found = state.findIndex((a) => {
      return a.id === 액션.payload.id;
    });
    //state안에 id가 액션.payload인 애가 있냐? 그 아이의 인덱스를 뱉어라

    if (found >= 0) {
      const copy = [...state];
      copy[found].quantity++;
      return copy;
    } else {
      const copy = [...state];
      copy.push(액션.payload);
      return copy;
    }
  } else if (액션.type === "수량증가") {
    const copy = [...state];
    copy[액션.payload].quantity++;
    return copy;
  } else if (액션.type === "수량감소") {
    const copy = [...state];
    copy[액션.payload].quantity--;
    return copy;
  } else if (액션.type === "상품삭제") {
    const copy = [...state];
    const 생존상품 = copy.filter((상품) => {
      return 상품.id !== 액션.payload;
    });
    return 생존상품;
  } else {
    return state;
  }
}

const alert초기값 = true;
function reducer2(state = alert초기값, 액션) {
  if (액션.type === "alert닫기") {
    state = false;
    return state;
  } else {
    return state;
  }
}

const store = createStore(combineReducers({ reducer, reducer2 }));

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
