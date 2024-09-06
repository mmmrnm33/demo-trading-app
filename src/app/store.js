import { configureStore } from "@reduxjs/toolkit";
import webSocketReducer from "../features/Markets/Markets";

export const store = configureStore({
  reducer: {
    webSocket: webSocketReducer,
  },
});
