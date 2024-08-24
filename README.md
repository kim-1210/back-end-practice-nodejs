# Back-End Practice

이 프로젝트는 백엔드 개발 연습을 목적으로 진행되었습니다. 주요 작업은 MVC 패턴의 구현, 프론트엔드와 백엔드 로그인 시스템 구축, 회원가입 페이지 작성 및 DB 연결 등을 포함합니다.

## 프로젝트 구조

- **bin/**: 서버의 `listen` 관련 코드
- **public/**: 프론트엔드에서 사용하는 정적 파일
- **routes/**: 각 요청에 대해 처리할 서버 기능 정의
- **view/**: 사용자가 보는 프론트엔드 페이지
- **app.js**: 서버 설정 및 선언

## 작업 내역

### 1차: MVC 패턴 구현

- **View**와 **Controller** 분리
  - `home.ctrl`을 이용해 `index.js`에서 Controller 기능 구현
- 서버 실행 위치와 View의 생성 위치 분리
- 서버 선언 및 설정 코드와 `server.listen` 코드 분리

### 2차: 로그인 시스템 구현

- **프론트엔드**
  - 로그인 페이지에서 ID와 PW 입력 필드 및 버튼 생성
  - `login.js`를 통해 `fetch` API를 이용해 백엔드로 ID와 PW 값 전송

- **백엔드**
  - `models`를 분리하여 로그인 인증 기능 구현
  - `UserStorage.js`에서 하드코딩된 사용자 데이터를 클래스를 이용해 저장소 구현

### 3차: 회원가입 페이지 작성 및 유사 DB 구현

- **백엔드**
  - 회원가입을 위한 라우트 연결 및 기능 구현
    - (회원가입 기능: DB에 저장 및 ID 중복 체크)
  - JSON 파일을 이용한 유사 DB 구현 (ID, PW 정보 포함)

- **프론트엔드**
  - 회원가입 페이지 생성 (ID와 PW 입력 필드 포함)
  - 회원가입 후 채팅 페이지 로드
  - 로그인 페이지와 회원가입 페이지 간의 변환 기능 구현
    - (회원가입 페이지 디자인 출처: [afirulaf](https://codepen.io/afirulaf/pen/ExgKpJ))
    - (로그인 페이지 디자인 출처: [Marco Biedermann](https://codepen.io/marcobiedermann/pen/nbpKWV))

### 4차: MySQL DB 연결

- `UserStorage.js`에서 기존의 JSON 데이터를 MySQL 데이터베이스로 대체하여 로그인 기능 구현
