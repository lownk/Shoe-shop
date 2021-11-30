<br><br><br>
## 🛼 프로젝트 개요
---
캐주얼한 분위기의 풋웨어 웹사이트 '시느슈'입니다.<br>
상품 열람, 장바구니에 담기, 주문하기와 같이 커머스 사이트가 가진 주요 기능들을 담은 웹사이트를 React.js와 React-Redux 학습에 초점을 맞추어 개발했습니다.<br>
HTML5와 SCSS으로 마크업하고 JavaScript 기반의 라이브러리 React를 사용했습니다.<br>
React-Redux로 컴포넌트의 state를 관리했으며 Axios를 이용해 외부 데이터와 통신했습니다.

`개발기간 : 2021/10/18 ~ 2021/11/15`
<br><br><br>

## 🛼 개발 환경
---
스크립트 언어 : <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"/></a>

라이브러리/프레임워크 : <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"/></a> <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/></a> <img src="https://img.shields.io/badge/Axios-4ca9a3?style=flat-square&logo=Axios&logoColor=white"/></a> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/></a>

툴 : <img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/></a> <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/></a> <img src="https://img.shields.io/badge/Trello-0052CC?style=flat-square&logo=Trello&logoColor=white"/></a> <br><br>
<img width="1440" alt="스크린샷 2021-11-10 오후 5 14 23" src="https://user-images.githubusercontent.com/85019895/142412891-512fcc04-c208-489c-a9be-bc4bd6068ba9.png">

<br><br><br>


## 🛼구현 사항
---

메인페이지
- react-router를 사용한 상세페이지로의 동적 라우팅
- 상품 더보기 기능(상품 더보기 버튼 클릭시 로딩 문구 노출, 통신 실패시 실패 문구 노출)
- 상품 정렬(낮은가격순, 높은가격순, 상품명순) 기능
- NavBar UI 제작
- Footer UI 제작
<br>

상세페이지
- 품절 임박 알림창 기능
- 이전 상품, 다음 상품 조회 기능
- 주문하기 기능(버튼 클릭시 장바구니 페이지에 상품 추가, 이미 같은 상품이 있다면 수량만 증가)
- 상품 정보(상세설명, 배송정보, 교환/환불) 탭 기능
- 최근 본 상품 기능
- 상품 이미지 마우스오버시 돋보기 기능
<br>

장바구니페이지
- 상품 개별 삭제 기능
- 상품 개별 수량 증감 버튼 기능
- 상품 삭제 또는 수량 증감에 따라 총 결제 금액 변동 기능
- 상품 구매 기능


<br><br><br>

## 🛼 기능별 시연 영상
---

## 메인페이지: 상품 더보기 기능
- Axios 라이브러리의 .get, .then, .catch메소드를 사용해 더보기 버튼 클릭시 외부 데이터와 통신, 새로운 상품 정보를 불러옵니다.<br>
버튼을 클릭 한 직후 로딩중임을 알리는 문구를 노출하며 통신 실패시에는 통신에 실패했다는 알림창을 노출시킵니다.
<br><br>
![메인페이지-더보기버튼1 mov](https://user-images.githubusercontent.com/85019895/141939170-c9cf299d-a224-4531-abd1-5d023c1ceed1.gif)
<br><br><br>

## 메인페이지: 상품 정렬 기능 버튼
- 각각 낮은가격순, 높은가격순, 상품명순으로 상품을 정렬합니다.<br>
자바스크립트 내장 함수인 .sort()를 사용했습니다.
<br><br>
![메인페이지-상품정렬1 mov](https://user-images.githubusercontent.com/85019895/141939983-309eb7b1-f6cb-4b37-855d-4300dee6055d.gif)
<br><br><br>

## 상세페이지: 상품 사진 돋보기 기능, 상품 설명 탭
- 대부분의 커머스 사이트에서 사용하는 사진 확대 기능입니다.<br>npm react-image-magnifiers 라이브러리를 적용하여 상품을 더욱 정밀하게 살펴볼 수 있습니다.
<br><br>
![상세페이지-돋보기기능1 mov](https://user-images.githubusercontent.com/85019895/141940186-e7223e64-1508-4602-bfe6-d7791d3486b6.gif)
![상세페이지-레이아웃,설명탭1 mov](https://user-images.githubusercontent.com/85019895/141941023-f7718657-e3c8-42a0-80b9-1832dcab06e8.gif)
<br><br><br>

## 상세페이지: 최근 본 상품 기능
- 최근 본 상품들의 이미지를 UI로 띄워주는 기능입니다.<br>사용자가 열람한 상품 id를 순서대로 local Storage에 배열 데이터타입으로 저장해놓고 바인딩했습니다.<br>이미 본 상품페이지를 재 방문 했을 시 해당 상품이 다시 UI의 가장 끝에 위치해야하기때문에 만약 배열 속에 중복되는 id가 있다면 해당 id를 .filter()메소드로 배열에서 제거하고, .push()메소드로 배열의 맨 뒤에 다시 추가되도록 만들었습니다. 상품 이미지를 클릭하면 해당 상품의 상세페이지로 이동하며, 최근 본 상품은 총 5개까지 노출됩니다.
<br><br>
![상세페이지-최근본상품1 mov](https://user-images.githubusercontent.com/85019895/141941818-2a05a301-6c60-4357-b51f-ec56807dd881.gif)
<br><br><br>

## 상세페이지: 타이머 알림창
- useEffect Hook 안에 setTimeOut함수를 사용해 페이지 방문 2초 후에 사라지도록 한 구매 독촉 알림창입니다.<br> 코드가 꼬이는 버그를 예방하기 위해 clearTimeOut함수를 return해 컴포넌트가 사라질때 타이머가 해제 되도록 했습니다.
<br><br>
![상세페이지-타이머알림창1 mov](https://user-images.githubusercontent.com/85019895/141942789-6096b7ef-593e-4ba1-a9ca-b8963538b72b.gif)
<br><br><br>

## 장바구니페이지: 상품 장바구니에 담기, 개별 수량 조절 기능, 상품 개별 삭제 기능
- 상세페이지에서 구매하기 버튼을 눌렀을 때 redux의 "항목추가" case가 발동되며 cartReducer라는 reducer속의 cart라는 초기값 배열에 상품의 데이터들을 전송 시킨 후 장바구니페이지로 페이지를 이동합니다. 장바구니페이지에서는 상세페이지에서 dispatch의 payload로 받아온 데이터들이 들어있는 cart배열을 .map메소드로 목록화하여 보여줍니다. .find()메소드를 사용해 cart배열 속의 id와 상세페이지에서 payload로 받아온 id가 같은 상품을 찾아내어 변수로 저장해두고, 이를 이용해 장바구니에 이미 같은 항목이 있을 경우 상품 수량에 1을 더해줍니다. 같은 방식으로 수량을 추가, 감소할 수 있으며 상품 자체를 목록에서 삭제할 수도 있습니다.
<br><br>
![장바구니페이지-상품담기,수량조절1 mov](https://user-images.githubusercontent.com/85019895/141943909-94766413-bfe1-4662-8400-d42c99c182b2.gif)
![장바구니페이지-상품삭제1 mov](https://user-images.githubusercontent.com/85019895/141944148-dabab290-47b5-4d8a-9711-d896ee0a2cf8.gif)
<br><br><br>

## 장바구니페이지: 상품 구매하기 기능(Modal)
- 구매하기 버튼을 누르면 useState에 저장된 값(boolean type)을 반대로 바꿔주는 토글 함수가 실행됩니다. useState에 저장된 값이 true이면, 실질적인 모달창과 그 부모 요소로 구성된 UI가 나타납니다. 본 모달창을 조명 하기 위해 dimmer로 사용할 부모 요소는 어둡게 스타일링했고 z-index속성을 부여하여 화면의 다른 요소들 사이에서 가장 위쪽으로 올라오도록 고정했습니다. 사용자의 보편적인 모달창에 대한 반응에 따라 모달창의 바깥쪽을 클릭하면 모달창이 사라지게 해야했기에 부모요소의 onClick 이벤트에서도 토글 함수를 호출했습니다. 다만 실질적인 모달창 부분에는 부모요소의 이벤트가 자식요소에게로 위임되는것을 막기 위한 e.stopPropagation()함수를 사용했기때문에 클릭하더라도 모달창이 닫히는 일이 없습니다. 모달을 닫고 나면 장바구니의 상품들이 들어있는 state.cartReducer.cart에 빈 배열([])이 할당되면서 UI에서도 상품목록이 사라지고, '장바구니에 담긴 상품이 없습니다'문구가 노출됩니다.
<br><br>
![화면 기록 2021-11-22 오후 5 44 41 mov](https://user-images.githubusercontent.com/85019895/142831103-7663da96-b498-48e3-8a91-23ef3926f79e.gif)

<br><br><br>
---



