const { io } = require("socket.io-client");

// API Key는 https://odds-sw.com/client/#/auth 에서 무료 발급 가능
const API_KEY = "발급받은_무료_API_KEY를_입력하세요"; 

const socket = io("https://api.odds-sw.com", {
  path: "/api/v1/live",
  transports: ["polling", "websocket"],
  auth: { apiKey: API_KEY },
  reconnection: true
});

socket.on("connect", () => {
  console.log("✅ sw_odds_service 실시간 인플레이 소켓 연결 성공!");
  
  // 축구, 야구 라이브 배당 및 스코어 구독
  socket.emit("subscribe", {
    sports: ["football", "baseball"],
    match_ids: [],
    markets: ["ft_ml", "ft_ou", "ft_hdp"], 
    bookmakers: ["bet365"]
  });
});

// 실시간 배당 업데이트 수신
socket.on("live_odds_update", (data) => {
  console.log(`📈 [배당 업데이트] ${data.home_ko} vs ${data.away_ko}`);
  console.log(data.markets);
});

socket.on("connect_error", (err) => {
  console.error("❌ 연결 에러 (API Key를 확인하세요):", err.message);
});
