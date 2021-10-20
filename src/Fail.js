import React from "react";
import styled from "styled-components";

const styleOne = styled.div`
  margin: auto;
  font-size: 5rem;
  color: red;
`;

function Fail() {
  return (
    <styleOne>
      서버 데이터 요청에 실패하였습니다. 새로고침 후 다시 시도해주세요.
    </styleOne>
  );
}

export default Fail;
