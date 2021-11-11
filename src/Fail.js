import React from "react";
import { Alert } from "react-bootstrap";
import "./Fail.scss";

function Fail() {
  return ["secondary"].map((variant, idx) => (
    <Alert
      className="mx-auto my-5"
      key={idx}
      variant={variant}
      style={{ width: "45%" }}
    >
      <div className="center">
        서버 데이터 요청에 실패하였습니다. 새로고침 후 다시 시도해주세요!
      </div>
    </Alert>
  ));
}

export default Fail;
