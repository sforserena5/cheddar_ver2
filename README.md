
1. index.html
- React가 들어갈 root 자리 ("main.jsx"로 연결)
- height 100% margin 0 _ 모바일웹 연동성
- 웹사이트 상단부 이름
  (이 외엔 건들지 않을 예정)
2. main.jsx
- index.html root에 연결
3. App.jsx (선택 페이지 관리)
- const[activeTab, setActiveTab] = useState("Home")으로 현재 어떤 탭이 선택되었는지 기억하는 변수/함수 정의하고, 이를 TabBar 파일에 넘겨줌
- tab_pages 디렉토리 속 파일들이 걸려있음

4. TabBar.jsx
- icons 걸려있음
