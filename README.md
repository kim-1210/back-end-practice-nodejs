# back-end-pratice

1주차 : 
    - MVC중 V(View)와 C(Controller) 분리 -> <function을 home.ctrl을 이용하여 index.js에 가져와 C 이용>
    - server실행 위치와 view의 생성 위치를 분리 
    - server 선언 및 설정과 server의 listen을 분리
    - M을 분리 
    ==> bin파일에는 listen이, public 파일에는 view에서의 기능이
    ==> routes에서는 view에서 응답을 보내면 각 응답 위치당 서버에서 이루어질 기능
    ==> view파일에는 사용자가 보는 view <프론트>
    ==> app.js에는 서버 설정 및 선언