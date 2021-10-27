import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let 초기값 = [
  { id: 0, name: "멋진신발", quantity: 1 },
  { id: 1, name: "좋은신발", quantity: 2 },
  { id: 2, name: "예쁜신발", quantity: 3 },
  { id: 3, name: "이상한신발", quantity: 4 },
];

function reducer(state = 초기값, 액션) {
  if (액션.type === "항목추가") {
    let copy = [...state];
    copy.push(액션.payload);
    return copy;
  } else if (액션.type === "수량증가") {
    let copy = [...state];
    copy[액션.payload].quantity++;
    return copy;
  } else if (액션.type === "수량감소" && state[0].quantity > 0) {
    let copy = [...state];
    copy[액션.payload].quantity--;
    return copy;
  } else {
    return state;
  }
}

let alert초기값 = true;
function reducer2(state = alert초기값, 액션) {
  if (액션.type === "alert닫기") {
    state = false;
    return state;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

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
