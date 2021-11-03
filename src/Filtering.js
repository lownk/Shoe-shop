import React from "react";

function Filtering() {
  return (
    <div>
      select box 만들고 onchange 속성 부여해놓기 낮은가격순 옵션에 onclick
      일어나면 화면에 있는 상품 데이터들의 price가 sort() 되고 그 배열을
      기준으로 다시 card 정렬이 만들어짐
    </div>
  );
}

export default Filtering;
