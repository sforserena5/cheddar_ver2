# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

환자 식단관리 모바일 웹서비스 **Cheddar(체다)**. 사용자는 다음을 할 수 있습니다.

- 매일 식단 기록
- 식단 기록을 통한 체다 포인트(CP) 적립
- 주간 기록 진행률 확인
- 체다 AI와 대화
- 병원 내 랭킹 확인
- 주간 피드백 리포트 확인

의료/환자 식단관리 서비스이므로 따뜻하고 친근하되, 유치하거나 게임처럼 보이지 않아야 합니다. 신뢰감과 안정감이 우선입니다.

---

## 기술 스택

- **React 19** + **Vite 8** (ESM, `"type": "module"`)
- 스타일은 [src/App.css](src/App.css) 한 파일에 집중 관리 (CSS 변수는 `:root`에 정의)
- 아이콘: `lucide-react` 와 `react-icons` — 신규 UI 라이브러리는 명시적 요청 없이는 추가하지 않습니다.
- 정적 자산(이미지/SVG/폰트)은 [public/](public/) 에 두고 절대 경로(`/cheese/...`)로 참조

---

## 개발 명령어

```bash
npm run dev      # Vite 개발 서버
npm run build    # 프로덕션 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint (flat config, eslint.config.js)
```

테스트 스크립트는 아직 없습니다.

---

## 아키텍처

단일 루트 컴포넌트 [src/App.jsx](src/App.jsx) 가 `activeTab` 상태를 가지고, 조건부 렌더링으로 [src/tab_pages/](src/tab_pages/) 안의 한 페이지만 화면에 띄웁니다. 라우터 라이브러리는 사용하지 않습니다.

```
main.jsx          → React 루트 마운트 (StrictMode)
└─ App.jsx        → useState("home"|"diet"|"chat"|"point"|"settings")
   ├─ <Home />    → setActiveTab prop으로 다른 탭으로 점프 가능
   ├─ <Diet /> <Chat /> <Point /> <Settings />
   └─ <TabBar activeTab setActiveTab />   하단 고정 탭바
```

- 새 탭을 추가할 때는 ① [src/tab_pages/](src/tab_pages/) 에 컴포넌트 추가 → ② [src/App.jsx](src/App.jsx) 의 조건부 렌더링 분기 추가 → ③ [src/TabBar.jsx](src/TabBar.jsx) 에 버튼 추가 — 세 곳을 함께 수정해야 합니다.
- 탭 간 이동은 페이지 컴포넌트가 `setActiveTab` prop을 받아 호출 (Home의 카드 클릭 → Point 이동 등).
- 캐릭터 표현(스트릭 기반 이미지/메시지/이펙트 분기)은 [src/TalkingCharacter.jsx](src/TalkingCharacter.jsx) 가 담당. `streak` 값에 따라 이미지·sparkle·crown이 결정됩니다.

### 아이콘 디렉토리 구분

- [src/icons/](src/icons/) — **탭바**에서 쓰는 아이콘. `active` prop으로 활성/비활성 색상 토글.
- [src/charticons/](src/charticons/) — 홈 화면 캐릭터/카드용 아이콘.
- 두 폴더는 같은 이름(`ChatIcon` 등)을 쓰지만 용도가 다르니 import 경로에 주의.

### 모바일 웹 레이아웃 규약

- `.wholescreen` 의 `max-width: 430px` 로 모바일 폭을 가정하고 가운데 정렬합니다.
- `index.html` 과 `body` 의 `height` / `margin` 은 모바일웹 연동성 때문에 건드리지 않습니다.
- 스크롤바 점프 방지를 위해 `html { scrollbar-gutter: stable }` 가 적용돼 있습니다.

---

## 디자인 시스템

전체 톤: 따뜻한 크림 베이지 배경 + 흰색/연크림 카드 + 체다 노랑 포인트 + 세이지/민트 보조. 둥근 모서리, 부드러운 그림자, 귀엽지만 과하지 않게.

새 색상이 필요하면 [src/App.css](src/App.css) 의 `:root` 토큰을 먼저 확인하고 재사용하세요. 하드코딩된 hex 추가는 지양.

```css
--card: #FFFDF8;          --card-white: #FFFFFF;
--primary: #F2C94C;       --primary-strong: #D1A916;   --primary-soft: #FFF3C4;
--text-main: #2E2A24;     --text-sub: #7A746A;         --text-muted: #A7A29A;
--line: rgba(46, 42, 36, 0.1);
--shadow-card: 0 10px 30px rgba(46, 42, 36, 0.08);
--shadow-soft: 0 6px 18px rgba(46, 42, 36, 0.06);
--radius-card: 24px;
```

폰트는 본문 `Pretendard`, 로고 `Pacifico`. UI 텍스트는 한국어가 기본입니다.
