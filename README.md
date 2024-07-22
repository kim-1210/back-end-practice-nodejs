# back-end-practice

## 1주차:

- MVC 중 V(View)와 C(Controller) 분리
  - function을 home.ctrl을 이용하여 index.js에 가져와 C 이용
- server 실행 위치와 view의 생성 위치를 분리
- server 선언 및 설정과 server의 listen을 분리
- M(Model)을 분리

### 구조 설명:

- **bin** 파일: 서버의 listen 관련 코드
- **public** 파일: view에서의 기능
- **routes** 파일: view에서 응답을 보내면 각 응답 위치당 서버에서 이루어질 기능을 정의
- **view** 파일: 사용자가 보는 view (프론트엔드)
- **app.js**: 서버 설정 및 선언

-----------------------------------------------------------------------------------------