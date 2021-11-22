import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./RecentlyViewed.scss";

function RecentlyViewed() {
  let { id } = useParams();
  let [최근본상품, 최근본상품변경] = useState([]);
  const history = useHistory();

  // localStorage에 있는 watched array를 가지고와서
  // parse로 따옴표 제거한 후
  // arr이라는 변수에 저장
  // 그 arr 을 state에 저장하고
  // 그 arr 각각 상품들의 id를 img src에 바인딩

  useEffect(() => {
    let arr = localStorage.getItem("watched");
    arr = JSON.parse(arr);

    arr = [...arr];
    console.log("따옴표뗀목록", arr);
    arr = arr.filter((num) => num !== "0");

    최근본상품변경(arr);
  }, []);

  useEffect(() => {
    console.log("최근본상품", 최근본상품);
  }, [최근본상품]);

  return (
    <div className="container recentlyViewedBox">
      <div className="row">
        최근 본 상품
        {최근본상품.map((a, i) => {
          return a > 0 ? (
            <div className="innerBox col-md-2">
              <img
                src={`https://codingapple1.github.io/shop/shoes${a}.jpg`}
                width="90%"
                onClick={() => {
                  history.push(`/detail/${a - 1}`);
                }}
              />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default RecentlyViewed;
