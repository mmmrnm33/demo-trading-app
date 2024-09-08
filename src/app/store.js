import { configureStore } from "@reduxjs/toolkit";
import webSocketReducer from "../features/Markets/Markets";
import coinReducer from "../features/Coin/Coin";

export const store = configureStore({
  reducer: {
    webSocket: webSocketReducer,
    coin: coinReducer,
  },
});
