import { updateData } from "../features/Markets/Markets";
import { store } from "../app/store";

export const createUpbitWebSocket = () => {
  const ws = new WebSocket("wss://api.upbit.com/websocket/v1");

  ws.onopen = () => {
    console.log("웹소켓 연결 성공");

    const subscribeMessage = [
      { ticket: "market" },
      {
        type: "ticker",
        codes: [
          "KRW-BTC",
          "KRW-ETH",
          "KRW-BCH",
          "KRW-SOL",
          "KRW-AAVE",
          "KRW-XRP",
        ],
      },
    ];

    ws.send(JSON.stringify(subscribeMessage));
  };

  ws.onmessage = (event) => {
    const blob = event.data;
    const reader = new FileReader();

    reader.onload = function () {
      try {
        const jsonData = JSON.parse(reader.result);
        store.dispatch(updateData(jsonData));
      } catch (error) {
        console.error(error);
      }
    };

    reader.readAsText(blob);
  };

  ws.onclose = () => {
    console.log("웹소켓 연결 종료");
  };

  ws.onerror = (error) => {
    console.error(error);
  };

  return ws;
};
