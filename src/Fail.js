import React from "react";
import "./Fail.scss";

function Fail() {
  return (
    <div class="shadow-sm p-3 mb-5 bg-light rounded py-3">
      서버 데이터 요청에 실패하였습니다. 새로고침 후 다시 시도해주세요!
    </div>
  );
}

export default Fail;
