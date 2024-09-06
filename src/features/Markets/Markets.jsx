import { createSlice } from "@reduxjs/toolkit";

const webSocketSlice = createSlice({
  name: "webSocket",
  initialState: {
    data: {},
  },
  reducers: {
    updateData: (state, action) => {
      const { code, trade_price, change_rate } = action.payload;
      state.data[code] = { trade_price, change_rate };
    },
    clearData: (state) => {
      state.data = {};
    },
  },
});

export const { updateData, clearData } = webSocketSlice.actions;

export default webSocketSlice.reducer;
