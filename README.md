# Liner 프론트엔드 사전과제

## 0. 사용 스택 및 라이브러리

개발언어는 typeScript를 선택하여 사용하였고 CSS 라이브러리로는 Styled-components를 사용하였습니다. 자주 쓰이는 색상은 Global Style로 설정하여 재사용할 수 있도록하였으며, Lottie 애니메이션 구현을 위해 React-lottie를 사용하였습니다.</br></br>

## 1. 과제 1~3 공통 컴포넌트

- 모든페이지에서 공통적으로 사용되는 Header, 좌우측의 Tab과 자주쓰이는 input, button들은 components 폴더에 분류하여 최대한 재사용할 수 있도록 구성했습니다.</br>
- 프로젝트에서 사용된 svg파일들은 개인적으로는 ReactComponent로 사용해왔으나, 라이너 홈페이지에서 사용되는 방법과 같게 하기위해 images폴더에 저장하여 background-image로 적용하였습니다.</br></br>

## 2. 과제 4~6 Home, Highlights, Detail Pages

- 이벤트에 따른 UI의 동적인 변화는 react-hooks를 사용하여 지엽적인 상태관리로 구현하였습니다.</br></br>
- Detail Page의 경우, 추천페이지에서 라우팅된 Detail Page만 Relevant keyword와 Relevan Page를 가져야했습니다. 따라서 location객체의 pathname을 통해 추천페이지인지, 하이라이팅 페이지인지 분기하였습니다.</br></br>
- 이외에 페이지 간 데이터 전달은 실제 데이터가 있다면 데이터의 id값을 URL에 담는 등의 방법으로 전달받아 API요청을 보냈겠지만, 직접 만든 dummy data를 사용해야했기 때문에 두 가지 방법이 생각났습니다. </br>첫째는 context Api나 전역상태관리 라이브러리를 통해 상태를 전달하는 방법이었습니다. 그러나 페이지가 적고 전역으로 관리할 만큼 데이터가 많지 않다는 생각에, 라우팅을 통해 데이터를 전달하는 방법을 택했습니다. useHistory로 라우팅 시 데이터를 담아서 useLocation의 state에 담긴 데이터를 받아 사용하였습니다.</br></br>
- 페이지를 리스트로 나열하는 경우 인피니트 스크롤을 통해 랜딩하였습니다. useInfiniteScroll이라는 훅을 만들어 사용하였고, intersection observer를 사용하여 가장 아래의 리스트를 관찰하여, 해당 엘리먼트가 화면에 보이면 5개의 데이터를 추가하여 불러오도록 로직을 구성하였습니다.
