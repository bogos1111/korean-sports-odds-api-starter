# 🚀 Korean Sports Odds API Starter Kit
한국형 실시간 스포츠 배당(Pre-match & In-Play) 수집 워커 및 73종 마켓 자동 정산 오픈소스 템플릿입니다. 
복잡한 해외 원천사 API 연동 없이, 정제된 한글화 데이터와 한국형 정산 규격(아시안 쿼터라인 제외)을 즉시 프로젝트에 적용할 수 있습니다.

## 🔑 무료 테스트 API Key 발급받기
가입 즉시 개발 환경에서 테스트할 수 있는 무료 API Key가 발급됩니다.
👉 **[30일 REST API & 3일 인플레이 웹소켓 무료 체험 신청하기](https://odds-sw.com/client/#/auth)**

## ✨ 주요 기능 및 특징
* **O(1) 인메모리 처리:** 1만 5천 개 이상의 스포츠 리그와 팀명을 지연 없이 100% 한글화하여 서빙합니다.
* **Format Once, Broadcast Many:** 복잡한 파싱 없이 1차원 Flat 배열로 떨어지는 JSON을 그대로 DB에 넣으세요.
* **유령 경기 차단:** 취소되거나 응답이 끊긴 0:0 유령 경기를 시스템과 관제소에서 2중 차단합니다.
* **단조 증가 방어:** 지연 패킷으로 인해 과거 점수로 역행하는 것을 방지하는 UPSERT SQL 템플릿을 제공합니다.

## 💻 빠른 시작 (Quick Start)
1. `nodejs_worker/websocket_client.js` 파일에 발급받은 `API_KEY`를 입력합니다.
2. `npm install socket.io-client` 패키지를 설치합니다.
3. `node websocket_client.js`를 실행하여 실시간 데이터 스트리밍을 확인합니다.

## 📚 전체 연동 명세서 및 정산 가이드
73종 마켓 정산 규칙, 델타 동기화(since) 로직, AI 전용 연동 가이드(LLMs.txt)는 아래 공식 문서를 참고하세요.
👉 **[공식 API 연동 가이드 보기](https://odds-sw.com/client/#/docs)**
