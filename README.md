# back-end-practice
# 연습 출처 : https://www.youtube.com/watch?v=2jwnbZKc66E&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=1

## 1차:

- MVC 중 V(View)와 C(Controller) 분리
  - function을 home.ctrl을 이용하여 index.js에 가져와 C 이용
- server 실행 위치와 view의 생성 위치를 분리
- server 선언 및 설정과 server의 listen을 분리

### 구조 설명:

- **bin** 파일: 서버의 listen 관련 코드
- **public** 파일: view에서의 기능
- **routes** 파일: view에서 응답을 보내면 각 응답 위치당 서버에서 이루어질 기능을 정의
- **view** 파일: 사용자가 보는 view (프론트엔드)
- **app.js**: 서버 설정 및 선언

-----------------------------------------------------------------------------------------

## 2차:

- 프론트와 백엔드 로그인 시스템 구현
  - 프론트
    - id와 pw 칸과 버튼을 제작
    - login.js를 통해 fetch 통신을 이용하여 백엔드로 id와 pw의 값을 전송
  - 백엔드
    - models를 따로 분리하여 통신으로 받은 값을 이용하여 login 인가 기능 제작
    - 하드코딩으로 한 저장소를 UserStorage.js에서 class를 이용하여 제작 
  
-----------------------------------------------------------------------------------------

## 3차:
- 회원가입 페이지 작성 및 유사DB 구현
  - 백엔드
    - 회원가입을 위한 route연결 및 회원가입 기능 제작
      - (회원가입 기능 : DB 저장 및 ID동일성 체크)
    - JSON으로 유사 DB 구현 (Feature : ID, PW)
  - 프론트엔드
    - 회원가입 페이지 생성 (ID와 PW)
    - 회원가입 시 쳇 페이지 로드 
    - 로그인 및 회원가입 페이지 변환
      - (출처 : 회원가입 페이지 : Copyright (c) 2024 by afirulaf (https://codepen.io/afirulaf/pen/ExgKpJ))
      - (출처 : 로그인 페이지 : Copyright (c) 2024 by Marco Biedermann (https://codepen.io/marcobiedermann/pen/nbpKWV))