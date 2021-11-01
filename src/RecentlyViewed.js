import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RecentlyViewed.scss";

function RecentlyViewed() {
  const { id } = useParams();

  // localStorage에 있는 watched array를 가지고와서
  // parse로 따옴표 제거한 후
  // arr이라는 변수에 저장
  // 그 arr 각각 상품들의 id를 img src에 바인딩

  useEffect(() => {
    let arr = localStorage.getItem("watched");

    arr = JSON.parse(arr);

    // arr.push(id);
    // arr = new Set(arr);
    // arr = [...arr];

    localStorage.setItem("watched", JSON.stringify(arr));
  }, []);

  return (
    <div className="container hehe">
      <div className="row m-auto">
        <div className="col-md-2">
          <img
            src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
            width="100%"
          />
        </div>
        {/* <div className="col-md-2">
          <img
            src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-2">
          <img
            src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
            width="100%"
          />
        </div> */}
      </div>
    </div>
  );
}

export default RecentlyViewed;
